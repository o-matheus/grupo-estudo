# Validação — 14/10/2026

## Verificado neste ambiente

- Compilação nativa com Go 1.27.1: aprovada, sem dependências externas.
- Análise estática com `go vet`: aprovada.
- Requisições HTTP reais ao executável Go local: `/` retorna 200 e a mensagem; `/health` retorna 200 e JSON; `/inexistente` retorna 404; POST em `/` retorna 405 com `Allow: GET`.
- Inicialização e logs de requisições observados no terminal.
- `docker compose config`: aprovado para a porta padrão 8080 e para `HOST_PORT=8081`, usando Compose v5.5.1.
- Tag `golang:1.27.2-bookworm`: presente na página da imagem oficial de Go no Docker Hub consultada nesta data.

## Validação Docker concluída após iniciar o Desktop

- Acesso à janela Containers confirmado pelo Computer Use.
- Construção real de `estudo-docker` com `golang:1.27.2-bookworm`: aprovada.
- Container `estudo` iniciado com publicação 8080:8080; respostas reais 200 em `/` e `/health`, 404 em `/inexistente`, e logs conferidos.
- [Captura real do Docker Desktop](capturas/docker-container.png) salva com o container em execução.
- Compose: construção, inicialização, resposta de saúde e encerramento aprovados.
- Compose com `HOST_PORT=8081`: inicialização, mensagem e encerramento aprovados.
- Containers e rede de teste encerrados/removidos; imagens mantidas para o encontro. Foi usado o projeto Compose `estudo-docker-encontro` para isolar o teste.

O bloqueio inicial de acesso ao serviço foi resolvido. A captura textual local anterior foi preservada e continua identificada como execução sem Docker.

## Ainda pendente

- [ ] Alterar a mensagem, reconstruir e recriar o container; conferir a nova resposta.
- [ ] Capturas gráficas do navegador, construção e logs. A tentativa anterior no navegador integrado retornou `ERR_BLOCKED_BY_CLIENT`.
- [ ] Ensaio humano com cronômetro, encerrando o conteúdo às 28:00 e reservando dois minutos para perguntas.

O roteiro totaliza 30 minutos planejados; não foi realizado um ensaio humano cronometrado.

## Apresentação HTML

- Arquivo independente com 14 slides, 14 notas e captura Docker incorporada, sem recursos externos de execução.
- Aberto diretamente por file:// no Chrome; navegação por setas, Home/End, notas, cópia de código e tela cheia conferidas.
- Layout observado no tamanho normal e com zoom de 175%, ativando a organização em uma coluna.
- Prévia de impressão conferida: 14 páginas, uma por slide, sem controles da apresentação; respostas da revisão aparecem na impressão.
- Cópia manual disponível como alternativa no código caso a área de transferência falhe; esse erro não foi reproduzido no Chrome.

## Guia prático HTML

- Sete capítulos e sete soluções recolhidas por padrão, sem recursos externos; sintaxe JavaScript e estrutura HTML conferidas.
- Soluções Go de primeiro servidor, rotas, mensagem alterada e desafio compiladas e verificadas com go vet.
- Container próprio validou a primeira mensagem; reconstrução e recriação validaram a mensagem alterada e /health.
- Compose próprio validou /tarefas com a lista esperada, caminho desconhecido 404 e POST /tarefas 405.
- Containers, rede e duas tags de imagem de teste removidos. Os testes usaram a porta 18080 para evitar conflito com a prática.
- Testes isolados do JavaScript validaram atualização e armazenamento da checklist, alternativa de cópia manual e abertura/restauração das soluções para impressão.
- Arquivo aberto diretamente no Chrome e layout inicial observado. O Computer Use perdeu acesso à janela durante as interações (noWindowsAvailable); a conferência visual completa de soluções abertas, telas menores e prévia de impressão ficou pendente.
