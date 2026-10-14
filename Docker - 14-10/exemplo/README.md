# Servidor Go com Docker

Não é necessário instalar Go no computador: a imagem contém o compilador. Use Docker Desktop com containers Linux, ou Docker Engine com Compose no Linux, um terminal, editor e navegador. A primeira construção precisa de internet.

## Antes do encontro

Abra o Docker Desktop e aguarde o serviço iniciar. No terminal, entre nesta pasta `exemplo` (coloque caminhos com espaços entre aspas):

```sh
docker version
docker compose version
docker pull golang:1.27.2-bookworm
docker build -t estudo-docker .
```

`docker version` deve mostrar Client e Server. A tag da imagem foi consultada na [página oficial de Go no Docker Hub](https://hub.docker.com/_/golang) em 14/10/2026. Ela fixa a versão do Go e a variante Linux, mas não fixa o digest da imagem.

## Construir e executar

```sh
# O ponto indica a pasta usada como contexto de construção.
docker build -t estudo-docker .
# Primeiro 8080: computador; segundo 8080: container.
docker run --name estudo -p 8080:8080 estudo-docker
```

O terminal fica ocupado pelo servidor. Abra um segundo terminal para os próximos comandos, e visite [http://localhost:8080](http://localhost:8080).

```sh
docker ps
docker logs estudo
curl -i http://localhost:8080/
curl -i http://localhost:8080/health
curl -i http://localhost:8080/inexistente
```

Resultados: `/` → HTTP 200 e `Olá, grupo de estudo!`; `/health` → HTTP 200 e `{"status":"ok"}`; caminho desconhecido → HTTP 404. Métodos diferentes de GET nas duas rotas retornam 405. No Windows, se `curl` for um alias do PowerShell, use `curl.exe`.

```sh
# Parar não apaga o container; remover não apaga a imagem.
docker stop estudo
docker rm estudo
```

## Alterar e reconstruir

Troque a mensagem em `main.go` por `Olá, Docker!`, salve, pare e remova o container antigo. Execute novamente:

```sh
docker build -t estudo-docker .
docker run --name estudo -p 8080:8080 estudo-docker
```

Atualize o navegador. A imagem contém a cópia do código feita na construção: editar o arquivo local não altera um container existente. Mesmo que a tag seja reutilizada, é preciso criar outro container a partir da imagem reconstruída. Ao terminar, restaure a mensagem original e reconstrua, se quiser repetir a apresentação.

## Executar com Compose

Primeiro pare e remova o container `estudo`, para liberar a porta:

```sh
docker stop estudo
docker rm estudo
docker compose up --build
```

Execute Compose nesta pasta. Ele lê `compose.yaml`, constrói a imagem e inicia o serviço `app`. Em outro terminal nesta mesma pasta:

```sh
docker compose ps
docker compose logs app
docker compose down
```

`down` encerra e remove os containers e a rede deste projeto; a imagem construída permanece. Não execute Docker e Compose ao mesmo tempo na mesma porta.

## Problemas comuns

| Sintoma | Ação |
|---|---|
| Não conecta ao daemon | Inicie Docker Desktop/Engine e confira a seção Server de `docker version`. |
| Porta 8080 ocupada | Use `docker run --name estudo -p 8081:8080 estudo-docker` e visite `http://localhost:8081`. |
| Nome `estudo` já existe | Confira `docker ps -a`; se for o container deste exemplo, pare-o e remova-o antes de repetir. |
| Mensagem antiga no navegador | Salve, reconstrua a imagem e recrie o container. |
| Dockerfile não encontrado | Execute os comandos dentro de `exemplo`. |
| Download falha | Confira internet; faça o download e a primeira construção antes do encontro. |

Para Compose na porta alternativa, crie um arquivo `.env` nesta pasta com `HOST_PORT=8081` e execute `docker compose up --build`. Ao voltar para 8080, remova esse arquivo. No macOS/Linux também funciona `HOST_PORT=8081 docker compose up --build`.

## O que cada arquivo faz

| Arquivo | Função |
|---|---|
| `main.go` | Código do servidor e das respostas HTTP. |
| `go.mod` | Nome do módulo e versão mínima de Go; sem dependências externas. |
| `Dockerfile` | Receita para construir a imagem e definir seu comando inicial. |
| `.dockerignore` | Exclui arquivos desnecessários do contexto enviado à construção. |
| `compose.yaml` | Registra o serviço e o encaminhamento de portas. |

Este exemplo mantém compilador e aplicação na mesma imagem para facilitar a primeira leitura. Depois, estude construção em múltiplas etapas, execução sem root e configuração por ambiente. O endpoint `/health` é uma rota da aplicação; sozinho ele não configura um healthcheck do Docker.
