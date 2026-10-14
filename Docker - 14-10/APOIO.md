# Apoio para a demonstração

Use este material se a execução ao vivo falhar. As saídas abaixo são **exemplos esperados**, não evidência de uma execução Docker neste computador. IDs, datas, tempos e nomes gerados variam. Há também uma [captura textual das respostas HTTP locais](capturas/HTTP-local.txt), obtida executando Go sem container.

## O que mostrar ao grupo

```text
$ docker build -t estudo-docker .
... etapas de construção ...
... naming to docker.io/library/estudo-docker ...

$ docker run --name estudo -p 8080:8080 estudo-docker
AAAA/MM/DD HH:MM:SS Servidor ouvindo em :8080
AAAA/MM/DD HH:MM:SS GET /
AAAA/MM/DD HH:MM:SS GET /health
```

| Endereço | Status esperado | Corpo esperado |
|---|---|---|
| `http://localhost:8080/` | 200 | `Olá, grupo de estudo!` |
| `http://localhost:8080/health` | 200 | `{"status":"ok"}` |
| `http://localhost:8080/inexistente` | 404 | `404 page not found` |

```text
$ docker ps
CONTAINER ID   IMAGE           ...   PORTS                    NAMES
<id>           estudo-docker   ...   0.0.0.0:8080->8080/tcp   estudo
```

Também pode aparecer publicação IPv6. `docker logs estudo` mostra as mesmas linhas registradas pelo programa. Depois da alteração e reconstrução, `/` deve mostrar `Olá, Docker!`.

## Plano alternativo

1. Mostre o código e o Dockerfile no editor; percorra o fluxo de construção e execução com os resultados esperados acima.
2. Se Go estiver instalado, é possível mostrar o servidor com `go run .` dentro de `exemplo`. Diga explicitamente que essa execução é local, sem container, e não valida Docker.
3. Preserve os conceitos e as perguntas finais; retome a prática quando Docker estiver disponível.

## Capturas para preparar no ensaio

Após reparar/iniciar Docker, faça capturas reais do terminal com a construção concluída, do navegador com `/` e `/health`, e do terminal com `docker ps` e `docker logs estudo`. Guarde-as em `capturas/`, sem expor outras janelas. Já existe uma [captura real do container no Docker Desktop](capturas/docker-container.png). As capturas do navegador e das demais etapas ainda precisam ser preparadas. Use também as saídas esperadas deste documento. Não confunda uma captura local de Go com uma execução dentro de Docker.
