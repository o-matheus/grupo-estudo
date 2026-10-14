import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import MarkdownIt from 'markdown-it';

const ignored = new Set(['.git', '.idea', '.vscode', '.vercel', 'node_modules', 'dist', 'minha-pratica']);
const allowed = new Set(['.md', '.html', '.png', '.jpg', '.jpeg', '.webp', '.svg', '.txt', '.go', '.mod', '.sum', '.yaml', '.yml']);
const pagePath = name => name.endsWith('README.md') ? name.slice(0, -9) + 'index.html' : name.replace(/\.md$/i, '.html');
const urlPath = name => '/' + name.split('/').map(encodeURIComponent).join('/');
const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug = text => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

async function collect(root, directory) {
  const files = [];
  for (const entry of await fs.readdir(path.join(root, directory), { withFileTypes: true })) {
    if (ignored.has(entry.name) || entry.name.startsWith('.env')) continue;
    if (entry.name.startsWith('.') && entry.name !== '.dockerignore') continue;
    const relative = path.posix.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collect(root, relative));
    else if (entry.isFile() && (allowed.has(path.extname(entry.name).toLowerCase()) || ['Dockerfile', '.dockerignore'].includes(entry.name))) files.push(relative);
  }
  return files;
}

function meetingDate(folder, text) {
  const iso = folder.match(/^(\d{4}-\d{2}-\d{2}) - /)?.[1];
  const legacy = text.match(/(\d{2})\/(\d{2})\/(\d{4})/);
  return iso || (legacy ? `${legacy[3]}-${legacy[2]}-${legacy[1]}` : '');
}

export async function build(root, out = path.join(root, 'dist')) {
  const entries = await fs.readdir(root, { withFileTypes: true });
  const meetings = [];
  for (const entry of entries) {
    if (!entry.isDirectory() || !(entry.name === 'Docker - 14-10' || /^\d{4}-\d{2}-\d{2} - .+/.test(entry.name))) continue;
    let text;
    try { text = await fs.readFile(path.join(root, entry.name, 'README.md'), 'utf8'); }
    catch (error) { if (error.code === 'ENOENT') continue; throw error; }
    const title = text.match(/^#\s+(.+)$/m)?.[1] || entry.name;
    meetings.push({ folder: entry.name, title: title.replace(/\s*[—–]\s*encontro de.*$/i, ''), date: meetingDate(entry.name, text) });
  }
  meetings.sort((a,b) => b.date.localeCompare(a.date) || a.folder.localeCompare(b.folder));
  const files = ['README.md', 'CONTRIBUTING.md'];
  for (const meeting of meetings) files.push(...await collect(root, meeting.folder));
  const sourceFiles = new Set(files);
  const references = [];
  const rendered = new Map();
  for (const file of files.filter(f => f.endsWith('.md'))) {
    const text = await fs.readFile(path.join(root, file), 'utf8');
    const md = new MarkdownIt({ html: false, linkify: true, typographer: false });
    const headings = [];
    const counts = new Map();
    const originalHeading = md.renderer.rules.heading_open;
    md.renderer.rules.heading_open = (tokens, index, options, env, renderer) => {
      const text = tokens[index+1].content;
      const base = slug(text) || 'secao';
      const count = counts.get(base) || 0; counts.set(base, count + 1);
      const id = count ? `${base}-${count}` : base;
      tokens[index].attrSet('id', id);
      if (tokens[index].tag === 'h2') headings.push({id, text});
      return originalHeading ? originalHeading(tokens,index,options,env,renderer) : renderer.renderToken(tokens,index,options);
    };
    function rewrite(value) {
      if (/^(https?:|mailto:|tel:|#)/i.test(value)) return value;
      const match = value.match(/^([^?#]*)(.*)$/); const original = match[1], suffix = match[2];
      let decoded;
      try { decoded = decodeURIComponent(original); } catch { throw new Error(`URL inválida em ${file}: ${value}`); }
      const target = path.posix.normalize(path.posix.join(path.posix.dirname(file), decoded));
      if (target.startsWith('../') || !sourceFiles.has(target)) throw new Error(`Link local sem arquivo publicado em ${file}: ${value}`);
      const destination = target.endsWith('.md') ? pagePath(target) : target;
      references.push(destination);
      return urlPath(destination) + suffix;
    }
    const originalLink = md.renderer.rules.link_open;
    md.renderer.rules.link_open = (tokens,index,options,env,renderer) => {
      const href = tokens[index].attrGet('href');
      tokens[index].attrSet('href', rewrite(href));
      if (/^https?:/i.test(href)) tokens[index].attrSet('rel','noopener');
      else if (!/\.md(?:[?#]|$)/i.test(href) && !href.startsWith('#') && !/\.html(?:[?#]|$)/i.test(href)) tokens[index].attrSet('download','');
      return originalLink ? originalLink(tokens,index,options,env,renderer) : renderer.renderToken(tokens,index,options);
    };
    const originalImage = md.renderer.rules.image;
    md.renderer.rules.image = (tokens,index,options,env,renderer) => {
      tokens[index].attrSet('src', rewrite(tokens[index].attrGet('src')));
      tokens[index].attrSet('loading','lazy');
      return originalImage(tokens,index,options,env,renderer);
    };
    md.renderer.rules.fence = (tokens,index) => `<div class="codeblock"><div class="codehead"><span>${escape(tokens[index].info || 'Código')}</span><button type="button" class="copy">Copiar</button></div><pre><code>${escape(tokens[index].content)}</code></pre></div>`;
    const content = md.render(text);
    rendered.set(file, { content, headings, title: text.match(/^#\s+(.+)$/m)?.[1] || file });
  }
  // O build só publica arquivos selecionados; não copia a raiz inteira.
  await fs.rm(out, {recursive:true, force:true}); await fs.mkdir(path.join(out,'assets'), {recursive:true});
  for (const file of files) {
    const destination = path.join(out, file.endsWith('.md') ? pagePath(file) : file);
    await fs.mkdir(path.dirname(destination), {recursive:true});
    if (!file.endsWith('.md')) { await fs.copyFile(path.join(root,file), destination); continue; }
    const data = rendered.get(file);
    const meeting = meetings.find(m => file.startsWith(m.folder + '/'));
    const date = value => value ? value.split('-').reverse().join('/') : '';
    const meetingList = meetings.map(m => `<li><a href="${urlPath(m.folder+'/index.html')}"><span class="date">${date(m.date)}</span><strong>${escape(m.title)}</strong><span class="open">Ver materiais →</span></a></li>`).join('');
    const sidebar = meeting ? `<a href="${urlPath(meeting.folder+'/index.html')}" class="back">← Encontro: ${escape(meeting.title)}</a><nav aria-label="Materiais do encontro"><a href="${urlPath(meeting.folder+'/index.html')}">Visão geral</a>${files.filter(f=>f.startsWith(meeting.folder+'/') && (f.endsWith('.md') || f.endsWith('.html'))).filter(f=>f!==meeting.folder+'/README.md').map(f=>`<a ${f===file?'aria-current="page"':''} href="${urlPath(f.endsWith('.md')?pagePath(f):f)}">${escape(path.posix.basename(f).replace(/\.(md|html)$/,'').replace('README','Exemplo e execução'))}</a>`).join('')}</nav>` : `<nav aria-label="Navegação"><a href="/">Encontros</a><a href="/CONTRIBUTING.html">Como contribuir</a></nav>`;
    const toc = data.headings.length ? `<nav class="toc" aria-label="Nesta página"><strong>Nesta página</strong>${data.headings.map(h=>`<a href="#${h.id}">${escape(h.text)}</a>`).join('')}</nav>` : '';
    const github = 'https://github.com/o-matheus/grupo-estudo/blob/main/' + file.split('/').map(encodeURIComponent).join('/');
    const home = file==='README.md';
    const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Encontros, anotações e exercícios do grupo de estudo."><title>${escape(data.title)} · Grupo de estudo</title><link rel="stylesheet" href="/assets/site.css"><script defer src="/assets/site.js"></script></head><body><header><a class="brand" href="/">Grupo de estudo<span>Aprender, praticar, compartilhar.</span></a><a href="https://github.com/o-matheus/grupo-estudo">Repositório ↗</a></header><div class="layout"><aside>${sidebar}${toc}</aside><main>${home?`<section class="intro"><span class="eyebrow">NOSSO PERCURSO</span><h1>Um encontro.<br>Um novo aprendizado.</h1><p>Anotações, exemplos e atividades para estudar juntos e continuar no seu ritmo.</p><ul class="meetings">${meetingList}</ul></section><hr>`:''}<article>${data.content}</article><footer><a href="${github}">Ver este documento no GitHub ↗</a><p>Os exemplos são executados no seu computador. Este site reúne os materiais.</p></footer></main></div><p id="copy-status" class="sr-only" aria-live="polite"></p></body></html>`;
    await fs.writeFile(destination,html);
  }
  await fs.copyFile(path.join(root,'scripts/site.css'),path.join(out,'assets/site.css'));
  await fs.copyFile(path.join(root,'scripts/site.js'),path.join(out,'assets/site.js'));
  await fs.writeFile(path.join(out,'404.html'), '<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Página não encontrada</title><link rel="stylesheet" href="/assets/site.css"><main class="intro"><h1>Página não encontrada</h1><p>O endereço pode ter mudado.</p><a href="/">Voltar aos encontros</a></main></html>');
  for (const reference of references) await fs.access(path.join(out, reference));
  return {meetings:meetings.length,files:files.length, pages:rendered.size};
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log('Site gerado:', await build(process.cwd()));
}
