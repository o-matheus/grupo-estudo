# Grupo de estudo

Repositório dos encontros do grupo: apresentações, atividades práticas, exemplos de código e fontes para continuar estudando.

**[Acessar o site do grupo](https://grupo-estudo.vercel.app)**

## Encontros

| Data | Tema | Material |
|---|---|---|
| 21/10/2026 | Scrum na prática | [Pasta do encontro](2026-10-21%20-%20Scrum/README.md) · [Slides HTML](2026-10-21%20-%20Scrum/apresentacao.html) · [Oficina guiada](2026-10-21%20-%20Scrum/atividade.html) |
| 14/10/2026 | Docker: primeiros passos com Go | [Pasta do encontro](Docker%20-%2014-10/README.md) · [Slides HTML](Docker%20-%2014-10/apresentacao.html) · [Atividade passo a passo](Docker%20-%2014-10/atividade.html) · [Exemplo Go](Docker%20-%2014-10/exemplo/README.md) |

## Como estudar

1. Abra a pasta do encontro e leia seu README.
2. Use a apresentação para revisar os conceitos e o guia prático para construir a atividade no seu ritmo.
3. Consulte o exemplo de referência e as fontes ao final dos materiais.

No site, abra os slides e atividades pelos links do encontro. Para usar offline, baixe ou clone o repositório e abra o arquivo HTML no navegador. Os materiais funcionam offline; os links para fontes externas precisam de internet. A página de arquivos do GitHub normalmente mostra o código HTML, em vez de executar a apresentação.

No encontro de Docker, a instalação e o download inicial são feitos antes da prática. O guia explica como criar sua tentativa em `minha-pratica`, separada do exemplo de referência.

## Organização

Cada encontro tem uma pasta própria com um README que apresenta objetivo, pré-requisitos, materiais e forma de execução. A pasta `Docker - 14-10` contém o primeiro encontro, de 2026.

Para novos encontros, use `AAAA-MM-DD - Tema`, por exemplo `2026-10-21 - APIs HTTP`. Veja [como contribuir e adicionar encontros](CONTRIBUTING.md).

## Materiais e fontes

Os exemplos são didáticos. Cada encontro registra suas fontes e, quando disponível, as verificações realizadas. Dúvidas, correções e sugestões de temas podem ser discutidas nas issues do repositório no GitHub.

## Site dos materiais

O repositório também gera um site estático para a Vercel. Os Markdown viram páginas de leitura; apresentações e atividades HTML mantêm suas interações. O índice do site detecta automaticamente os encontros com README e data no nome da pasta.

### Rodar localmente

Instale Node.js 22 ou mais recente e, na raiz do repositório, execute:

```sh
npm ci
npm test
npm run build
npm run preview
```

Abra `http://localhost:4173`. O preview depende do build anterior. A saída é `dist/`, que não é versionada. Os arquivos HTML didáticos também podem ser abertos individualmente offline.

### Publicar na Vercel

Importe `o-matheus/grupo-estudo` em um projeto Vercel com a raiz do repositório como Root Directory, preset **Other**, build `npm run build` e saída `dist`. Use `main` como branch de produção. O arquivo `vercel.json` já registra a configuração de build. Não são necessárias variáveis de ambiente.

A conexão GitHub/Vercel publica atualizações após pushes e disponibiliza previews para outras branches. O site hospeda os materiais; os servidores Go dos exercícios são executados no computador de quem estuda.
