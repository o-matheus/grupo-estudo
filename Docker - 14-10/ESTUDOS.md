# Fontes e exercícios para continuar

Fontes oficiais consultadas em 14/10/2026. A documentação pode usar exemplos com mais arquivos e bibliotecas que a nossa demonstração.

| Ordem | Fonte | O que estudar |
|---|---|---|
| 1 | [O que é um container](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/) | Isolamento e diferença entre imagem e container. |
| 2 | [Escrever um Dockerfile](https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/) | Construção e função de cada instrução. |
| 3 | [Go com Docker](https://docs.docker.com/guides/golang/) | Construção, execução, testes e múltiplas etapas. |
| 4 | [Introdução ao Compose](https://docs.docker.com/compose/gettingstarted/) | Serviços, rede e uma aplicação com mais de um container. |
| 5 | [Java com Docker](https://docs.docker.com/guides/java/) | Aplicar os mesmos conceitos ao ecossistema Java. |
| Apoio | [Imagem oficial de Go](https://hub.docker.com/_/golang) | Consultar versões e variantes disponíveis. |

## Exercícios em ordem de dificuldade

1. **Modificar a mensagem:** editar, reconstruir e recriar o container. Sucesso: o navegador mostra a nova resposta.
2. **Adicionar `GET /tarefas`:** retornar uma pequena lista em JSON, sem banco. Sucesso: resposta 200 com `Content-Type: application/json` e caminho desconhecido continua retornando 404.
3. **Configuração por ambiente:** ler `MENSAGEM` com `os.Getenv`, mantendo uma mensagem padrão quando ausente. Passar com `docker run -e MENSAGEM="Meu grupo" ...` e depois por `environment` no Compose.
4. **Banco e persistência:** adicionar PostgreSQL como segundo serviço e um volume nomeado. Sucesso: a API conecta usando o nome do serviço e os dados sobrevivem à recriação do container. Estudar prontidão do banco, credenciais e migrações antes de implementar.
5. **Imagem final menor:** seguir a seção de múltiplas etapas do guia de Go. Comparar tamanhos e conferir que as rotas continuam funcionando; incluir os arquivos necessários ao runtime e estudar usuário sem root.

Na versão atual, o Dockerfile copia apenas `go.mod` e `main.go`. Ao dividir o projeto em outros arquivos ou pacotes, atualize `COPY` para incluir os novos arquivos. Se adotar bibliotecas externas, passe a incluir `go.sum` e a etapa de download dos módulos. A progressão é didática; preparação para produção exige estudar também segurança, logs, configuração, desligamento e operação.
