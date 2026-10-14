import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {build} from './build.mjs';

test('gera encontros, converte links e exclui arquivos locais',async()=>{
 const root=await fs.mkdtemp(path.join(os.tmpdir(),'grupo-estudo-site-'));
 try{
  await fs.mkdir(path.join(root,'scripts'));
  for(const file of ['site.css','site.js'])await fs.copyFile(new URL(file,import.meta.url),path.join(root,'scripts',file));
  await fs.writeFile(path.join(root,'README.md'),'# Grupo\n\n[Encontro](2026-10-21%20-%20HTTP/README.md)');
  await fs.writeFile(path.join(root,'CONTRIBUTING.md'),'# Contribuir');
  const meeting=path.join(root,'2026-10-21 - HTTP');await fs.mkdir(meeting);
  await fs.writeFile(path.join(meeting,'README.md'),'# HTTP — encontro de 21/10/2026\n\n## Estudar\n\n[Notas](notas.md)\n\n![Figura](figura.png)\n\n[Exemplo](main.go)\n\n| A | B |\n|---|---|\n| 1 | 2 |\n\n```sh\necho ola\n```');
  await fs.writeFile(path.join(meeting,'notas.md'),'# Notas\n\n[Voltar](README.md)');
  await fs.writeFile(path.join(meeting,'main.go'),'package main');
  await fs.writeFile(path.join(meeting,'atividade.html'),'<!doctype html><html><head><title>Teste</title></head><body><main>Exercício</main></body></html>');
  await fs.writeFile(path.join(meeting,'figura.png'),'test');
  await fs.writeFile(path.join(meeting,'.env'),'segredo');
  for(const folder of ['.idea','minha-pratica','dist']){await fs.mkdir(path.join(meeting,folder));await fs.writeFile(path.join(meeting,folder,'local.md'),'privado');}
  const result=await build(root);assert.equal(result.meetings,1);
  const home=await fs.readFile(path.join(root,'dist/index.html'),'utf8');assert.match(home,/21\/10\/2026/);assert.match(home,/2026-10-21%20-%20HTTP\/index.html/);
  const page=await fs.readFile(path.join(root,'dist/2026-10-21 - HTTP/index.html'),'utf8');assert.match(page,/notas.html/);assert.match(page,/<table>/);assert.match(page,/class="copy"/);assert.match(page,/download=""/);assert.match(page,/href="\/">← Página inicial/);
  const activity=await fs.readFile(path.join(root,'dist/2026-10-21 - HTTP/atividade.html'),'utf8');assert.match(activity,/href="\/">← Página inicial/);assert.match(activity,/2026-10-21%20-%20HTTP\/index.html">← Materiais do encontro/);assert.match(activity,/<main>Exercício<\/main>/);
  for(const name of ['.env','.idea','minha-pratica','dist'])await assert.rejects(fs.access(path.join(root,'dist/2026-10-21 - HTTP',name)));
  await fs.writeFile(path.join(meeting,'notas.md'),'[Ausente](nao-existe.md)');await assert.rejects(build(root),/Link local sem arquivo publicado/);
 }finally{await fs.rm(root,{recursive:true,force:true});}
});
