# Validação — encontro de Scrum

Verificações realizadas em 21/10/2026. Referência: [Guia oficial do Scrum, edição 2020](https://scrumguides.org/scrum-guide.html).

## Conteúdo e estrutura

- 12 slides com notas, roteiro correspondente e oficina em quatro etapas: 4 + 6 + 5 + 5 = 20 minutos. Apresentação: 25 minutos. Total planejado: 45 minutos.
- Exemplo de pedidos identificado como fictício. Campos inicialmente vazios; decisões e nomes não foram preenchidos em nome do grupo.
- Cinco valores, autogerenciamento, eventos, artefatos e compromissos incluídos. Técnicas complementares e adaptações distinguidas do framework.

## Verificações técnicas executadas

- Testes existentes do gerador: aprovados, incluindo links e exclusão de arquivos locais. Executados também com Node 24.19.0, compatível com o requisito do projeto.
- Build: dois encontros detectados; links locais dos HTML gerados conferidos por inspeção automatizada.
- Navegador desktop: navegação por teclado, notas e entrada/saída de tela cheia verificadas. Campos, geração de Markdown e persistência após recarregar verificados.
- Download real de Markdown confirmado com um valor fictício de teste, depois removido do formulário local.
- Viewport móvel de 390 × 844: apresentação e formulário conferidos visualmente.
- Harness isolado do JavaScript da atividade: exportação, campos pendentes, atualização textual para impressão, armazenamento bloqueado/corrompido e cópia manual sem clipboard aprovados. Texto das respostas inserido como texto, sem interpretar HTML.
- git diff --check: sem erros nas verificações anteriores à publicação.

## Limites

O navegador de testes bloqueia o protocolo file://; abertura offline real não foi verificada nele. Inspeção confirmou CSS e JavaScript embutidos, sem fontes, imagens ou scripts externos obrigatórios. Links para referências exigem internet; documentos Markdown de apoio podem ser lidos no editor offline.

A atualização do conteúdo de impressão foi testada no harness e o CSS de impressão foi inspecionado. A paginação visual em PDF e a impressão física não foram verificadas. Não se afirma validação visual do PDF.

Ensaio humano com cronômetro e aplicação com o grupo ainda cabem ao apresentador. As verificações técnicas não comprovam a duração real das falas nem a execução da oficina.

## Publicação

A publicação deve ser confirmada pelo acesso às páginas em produção após o envio. Este arquivo não contém respostas de participantes.
