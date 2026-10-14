# Roteiro do apresentador — 30 minutos

**Público:** iniciantes em programação com contato com Go e Java. **Formato:** uma pessoa demonstra; o grupo acompanha. **Meta:** distinguir imagem de container, construir uma imagem e acessar a aplicação no navegador.

Prepare a pasta `exemplo` no editor, dois terminais e o navegador. Faça previamente o download e a primeira construção; veja [as instruções](exemplo/README.md). Use um cronômetro. Às 28:00, encerre a demonstração e abra as perguntas.

## 0:00–3:00 — O problema

**Fala sugerida:** “Imagine que eu mando uma aplicação para vocês. Aqui funciona, mas no computador de outra pessoa falta uma ferramenta ou a versão é diferente. Docker nos ajuda a empacotar a aplicação com o ambiente necessário para executá-la. Vamos construir esse pacote e colocar um servidor para funcionar.”

Explique que o terminal é uma forma de dar comandos ao computador. Docker não substitui o código nem corrige erros da aplicação. Um ambiente empacotado ainda depende de configurações adequadas, arquitetura compatível e acesso aos serviços necessários.

**Transição:** “Primeiro vamos dar nome às três peças que vamos usar.”

## 3:00–7:00 — Imagem, container e Dockerfile

| Conceito | Explicação para o grupo |
|---|---|
| Dockerfile | Receita escrita para construir uma imagem. |
| Imagem | Pacote com arquivos e configurações usados para criar containers. |
| Container | Instância criada a partir da imagem, com seu próprio processo e estado. Pode estar rodando ou parado. |

Mostre a sequência:

```text
main.go + go.mod + Dockerfile
             │ docker build
             ▼
          imagem
             │ docker run
             ▼
         container ─── servidor Go
```

**Fala sugerida:** “Podemos criar vários containers a partir da mesma imagem. Parar um container não apaga a imagem. Containers isolam processos e usam recursos do sistema operacional; não precisam carregar um sistema operacional completo por aplicação.”

No Docker Desktop, os containers Linux normalmente rodam dentro de uma máquina virtual Linux. Evite aprofundar virtualização neste encontro.

**Pergunta rápida:** “A receita está rodando ou serve para construir algo?” Resposta: serve para construir a imagem.

## 7:00–10:00 — A aplicação mínima

Abra `exemplo/main.go`. Mostre só três partes: as rotas, as respostas e `Addr: ":8080"`.

**Fala sugerida:** “Servidor é um programa que espera pedidos. O navegador faz um pedido HTTP e recebe uma resposta. A porta identifica por onde esse servidor recebe os pedidos. Nosso programa fica esperando na porta 8080.”

- `/` retorna uma mensagem de texto.
- `/health` retorna JSON, um formato de dados que outros programas conseguem ler.
- Um endereço desconhecido retorna 404.

Explique `go.mod` em uma frase: identifica o projeto e sua versão mínima de Go. Não há bibliotecas externas; não precisamos de `go.sum`. O log registra os pedidos que chegam.

**Transição:** “Agora vamos colocar esse programa dentro de uma imagem.”

## 10:00–16:00 — Construir a imagem

Abra o Dockerfile e explique as seis linhas:

| Instrução | Fala sugerida |
|---|---|
| `FROM golang:1.27.2-bookworm` | “Partimos de uma imagem oficial que já tem o compilador Go.” |
| `WORKDIR /app` | “Esta será a pasta de trabalho dentro da imagem.” |
| `COPY go.mod main.go ./` | “Copiamos os arquivos do projeto para essa pasta.” |
| `RUN go build -o /app/servidor .` | “Durante a construção, compilamos o código e geramos o executável.” |
| `EXPOSE 8080` | “Documentamos a porta da aplicação. Esta linha não publica a porta.” |
| `CMD ["/app/servidor"]` | “Ao iniciar o container, executamos este programa.” |

Execute dentro de `exemplo`:

```sh
docker build -t estudo-docker .
```

Explique `-t` como o nome da imagem e `.` como a pasta de arquivos disponível para a construção. Mostre que a execução pode aproveitar etapas em cache. O `.dockerignore` evita enviar arquivos desnecessários.

**Pergunta rápida:** “O `RUN` acontece quando construímos; o `CMD` acontece quando…?” Resposta: quando iniciamos o container.

**Controle de tempo:** se a construção demorar, use a imagem preparada no ensaio e o [apoio](APOIO.md). Não gaste o encontro instalando ferramentas.

## 16:00–22:00 — Executar, observar e alterar

No primeiro terminal:

```sh
docker run --name estudo -p 8080:8080 estudo-docker
```

**Fala sugerida:** “Criamos um container chamado `estudo`. A primeira porta é do computador; a segunda é do container. Nosso programa escuta em todas as interfaces do container, na porta 8080.”

```text
Navegador → localhost:8080 → encaminhamento Docker → container:8080 → Go
```

Abra `http://localhost:8080`, depois `/health` e `/inexistente`. No segundo terminal:

```sh
docker ps
docker logs estudo
```

Mostre a relação entre atualizar o navegador e aparecer uma requisição no log. O navegador pode pedir `/favicon.ico`, que também retornará 404.

**Às 19:00**, altere a mensagem em `main.go` para `Olá, Docker!` e salve. Atualize o navegador antes de reconstruir: a mensagem continua antiga. Execute no segundo terminal:

```sh
docker stop estudo
docker rm estudo
docker build -t estudo-docker .
docker run --name estudo -p 8080:8080 estudo-docker
```

Atualize o navegador e mostre a nova mensagem.

**Fala sugerida:** “O código foi copiado durante a construção. A alteração local só chega a esta execução depois de reconstruirmos a imagem e criarmos outro container. Parar é diferente de remover.”

## 22:00–26:00 — Registrar a execução com Compose

Use o terminal que estiver livre. Pare e remova a execução anterior:

```sh
docker stop estudo
docker rm estudo
```

Abra `compose.yaml`. Explique `services`, `app`, `build: .` e `ports`. `${HOST_PORT:-8080}` significa usar a porta informada em `HOST_PORT`, ou 8080 quando não informada.

**Fala sugerida:** “Em vez de lembrar o comando inteiro, registramos como iniciar o serviço em um arquivo. Compose também permite reunir vários serviços, como uma API e um banco. Hoje começamos com um.”

```sh
docker compose up --build
```

Atualize o navegador. Em outro terminal, na mesma pasta:

```sh
docker compose ps
docker compose logs app
docker compose down
```

Explique que o nome do container criado por Compose é gerado a partir do projeto e serviço; por isso usamos `docker compose logs app`. Dockerfile define a construção; Compose registra como iniciar os serviços.

## 26:00–28:00 — Como essa base cresce

**Fala sugerida:** “O mesmo caminho serve para uma aplicação maior: escrevemos o código, construímos a imagem e iniciamos containers. Podemos acrescentar rotas, configuração e outros serviços sem mudar essa ideia central.”

Apresente os próximos passos, sem executá-los:

1. Criar uma rota que retorna uma lista de tarefas em JSON.
2. Ler uma configuração por variável de ambiente.
3. Adicionar PostgreSQL ao Compose; acessar o banco pelo nome do serviço, e não por `localhost` dentro do container da API.
4. Usar um volume para os dados sobreviverem à remoção do container do banco.
5. Usar múltiplas etapas para compilar em uma imagem e levar apenas o executável para uma imagem final menor; estudar execução sem root.

Abra a [trilha de estudos](ESTUDOS.md) e indique por onde começar. Java fica como estudo complementar, após os conceitos iniciais.

## 28:00–30:00 — Revisão e perguntas

Faça as três perguntas e aceite respostas em palavras simples:

- **O que construímos?** Uma imagem, usando o Dockerfile e o código.
- **O que executamos?** Um container criado a partir dessa imagem.
- **Como o navegador chega à aplicação?** Pela porta do computador encaminhada para a porta do container.

**Fala de encerramento:** “Para praticar, mudem a resposta ou criem outra rota, reconstruam a imagem e rodem novamente. Depois sigam para Compose com um banco de dados.”

## Ensaio do apresentador

Leia as falas em voz alta e execute a sequência com cronômetro. Confira as marcas de 10, 16, 22 e 28 minutos. Se passar do tempo, reduza comentários sobre cache e exercícios posteriores; preserve a construção, a execução, a diferença entre `RUN` e `CMD` e as perguntas finais. O ensaio humano e as capturas Docker devem ser feitos após o serviço estar funcionando; veja [a validação](VALIDACAO.md).
