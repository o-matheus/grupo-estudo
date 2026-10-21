# Scrum explicado passo a passo

## 1. O problema antes dos termos

Imagine um pequeno estabelecimento que anota pedidos em mensagens soltas. O atendente se perde ao procurar o que foi pedido. Podemos construir um sistema inteiro de uma vez, mas ainda não sabemos se a forma de registrar será boa para quem atende. Este é um **exemplo fictício**, usado em todos os materiais.

Uma alternativa é criar uma parte pequena, utilizável, observar seu uso e ajustar o próximo passo. Scrum oferece uma estrutura para organizar esse aprendizado e a entrega de valor em problemas complexos. Não prescreve linguagem de programação nem garante prazo ou sucesso.

## 2. Aprender com o que acontece

Empirismo é tomar decisões com base no que observamos. Pensamento lean ajuda a reduzir desperdício e focar no essencial. Transparência permite compreender a situação; inspeção permite examiná-la; adaptação muda nosso plano quando aprendemos algo.

No exemplo: tornamos visível um fluxo de pedidos funcionando, observamos a dificuldade de localizar o pedido e adaptamos o próximo trabalho. Fazer reuniões sem mudar nada diante do que se aprende não realiza essa intenção.

Os valores dão suporte às ações: **compromisso** com objetivos e com o time; **foco** no trabalho necessário; **abertura** sobre dificuldades; **respeito** às pessoas; **coragem** para enfrentar problemas. Avisar cedo que uma integração travou é uma forma concreta de praticá-los.

## 3. Quem toma quais decisões

| Responsabilidade | Foco | Exemplo fictício |
|---|---|---|
| Product Owner | Maximizar valor e responder pela gestão efetiva do Product Backlog | Ouvir atendentes e ordenar necessidades |
| Scrum Master | Estabelecer Scrum e apoiar a efetividade do time | Facilitar melhoria e remoção de impedimentos |
| Developers | Criar incremento utilizável com qualidade | Planejar, implementar, testar e integrar o fluxo |

PO é uma pessoa, não um comitê. Developers abrange quem constrói o incremento, além de escrever código. O Scrum Team é multifuncional e autogerenciável: reúne ou desenvolve as habilidades necessárias e decide internamente quem faz o quê, quando e como. Não há hierarquia ou subequipes internas. Scrum Master não distribui tarefas como chefe.

## 4. Objetivos, artefatos e compromissos

Artefato é uma forma de tornar informações importantes visíveis. Cada um tem um compromisso associado que orienta inspeção e adaptação.

| Artefato | O que torna visível | Compromisso |
|---|---|---|
| Product Backlog | Lista ordenada e evolutiva do que o produto precisa | Product Goal: direção futura do produto |
| Sprint Backlog | Objetivo da Sprint, itens selecionados e plano para realizá-los | Sprint Goal: objetivo único que dá coerência ao ciclo |
| Incremento | Resultado integrado, verificado e utilizável | Definition of Done: padrão de qualidade |

**Product Goal fictício:** permitir que um pequeno estabelecimento registre e acompanhe pedidos dos clientes.

**Backlog proposto:** registrar pedido; consultar pedido; atualizar andamento; consultar histórico. A ordem deve ser discutida com quem assumir PO.

**Sprint Goal fictício:** o atendente consegue registrar e consultar um pedido básico. Os Developers podem planejar persistência, interface, testes e integração. Marcar essas tarefas não comprova que o objetivo funciona.

O incremento acrescenta valor ao que já existe e funciona junto com ele. Pode haver vários incrementos por Sprint, e entregas podem acontecer antes da Review. A Review não é uma autorização obrigatória para liberar valor.

## 5. Os eventos durante o ciclo

A **Sprint** tem duração fixa de até um mês e contém todo o trabalho e os demais eventos. Uma nova começa após a anterior. Duas semanas são apenas uma sugestão para o experimento do grupo.

- **Sprint Planning:** definir por que o ciclo vale a pena, o que pode ser realizado e como. O time colabora; Developers selecionam itens em conversa com PO e decidem como executar.
- **Daily Scrum:** 15 minutos em cada dia de trabalho para Developers inspecionarem o progresso em direção ao Sprint Goal e adaptarem o plano. Não exige três perguntas e não é prestação de contas ao chefe.
- **Sprint Review:** time e interessados inspecionam resultados, progresso e mudanças no contexto para discutir adaptações. Vai além de apresentar slides ou status.
- **Sprint Retrospective:** examinar a forma de trabalhar e planejar melhorias de qualidade e efetividade. Exemplo: integrar pequenas mudanças mais cedo para reduzir conflitos.

Para uma Sprint de um mês, os limites máximos são oito horas para Planning, quatro para Review e três para Retrospective; em Sprints menores, costumam ser mais curtos. Os tempos da nossa oficina são didáticos e não uma prescrição para esses eventos.

Durante a Sprint, o plano pode mudar conforme aprendemos, sem colocar o Sprint Goal em risco ou reduzir a qualidade. Refinamento do backlog é uma atividade contínua, não um evento formal adicional. Apenas PO pode cancelar uma Sprint, quando seu objetivo se torna obsoleto.

## 6. Comportamento esperado e qualidade

Para o item **registrar pedido**, critérios de aceitação possíveis são: aceitar produtos com quantidades válidas; calcular total; gerar identificador; permitir consultar o registro; rejeitar pedido vazio. São uma técnica complementar para esclarecer esse item.

A **Definition of Done** descreve a qualidade exigida do incremento. Proposta didática: código integrado, revisão por outro integrante, testes relevantes passando, fluxo funcionando no ambiente combinado e instruções atualizadas. Se houver um padrão organizacional, ele é mínimo; na ausência, o Scrum Team define sua DoD e os Developers devem segui-la.

Um item pode satisfazer um comportamento em uma máquina e ainda falhar na integração. Se não atende à DoD, não faz parte do incremento pronto: volta ao Product Backlog para consideração futura e não é apresentado na Review como concluído.

## 7. Ferramentas que ajudam

Ferramentas tornam o trabalho visível e ajudam a conversar sobre ele. **Scrum não exige um aplicativo específico, quadros, histórias de usuário, critérios de aceitação ou story points.** São recursos complementares: usem o que trouxer clareza ao grupo.

Todos os exemplos abaixo são fictícios e continuam o caso do sistema de pedidos.

### 7.1. Ferramentas com opção gratuita

Condições consultadas em **21/10/2026** nas páginas oficiais. Os planos podem mudar; confiram os limites antes de criar o espaço do grupo.

| Ferramenta | Como pode ajudar | Opção gratuita e limites relevantes |
|---|---|---|
| [GitHub Issues + Projects](https://github.com/features/issues) | Registrar necessidades como issues e acompanhá-las em tabela ou quadro, perto do código e dos pull requests | O [GitHub Free](https://github.com/pricing) inclui Issues e Projects. Recursos adicionais da plataforma têm seus próprios limites; não é necessário contratar um plano para este exemplo básico. |
| [Trello](https://trello.com/pt-BR) | Criar cartões com descrição, checklist e colunas de andamento | O [plano Free](https://support.atlassian.com/trello/docs/which-trello-plan-is-best-for-me/) permite até 10 colaboradores e 10 quadros abertos por Área de trabalho. |
| [Jira](https://www.atlassian.com/software/jira) | Organizar backlog e acompanhar o trabalho com quadros Scrum e Kanban | O [plano Free](https://www.atlassian.com/software/jira/pricing) permite até 10 usuários, com 2 GB de armazenamento. |
| Papel ou arquivo Markdown | Registrar objetivos, itens, qualidade e impedimentos sem configurar uma plataforma | Não exige contratar software. Em papel, combinem como compartilhar e atualizar o registro. |

**Sugestão para experimentar no grupo:** se o projeto já está no GitHub, comecem com Issues + Projects para reunir planejamento e código. Se a meta imediata é apenas visualizar cartões, Trello pode ser uma alternativa simples. Jira é uma opção para explorar uma ferramenta com recursos voltados ao acompanhamento de desenvolvimento. Não é necessário usar as três.

### 7.2. Exemplo de quadro

Um quadro organiza cartões por situação. Ele pode mostrar apenas os itens selecionados para a Sprint, enquanto o Product Backlog completo permanece em outra visualização ordenada.

| A fazer | Em andamento | Em revisão | Concluído |
|---|---|---|---|
| Consultar pedido pelo identificador | Registrar pedido | Corrigir mensagem de quantidade inválida | Exibir detalhes do pedido |

Este é um retrato fictício de andamento, não uma sequência obrigatória de implementação. Cada cartão representa um item acompanhado pelo time. Uma issue pode representar um item do Product Backlog, mas também pode registrar uma dúvida ou tarefa menor: nem toda issue é automaticamente um item desse backlog.

“Em revisão” pode indicar que falta revisão de código ou outra verificação combinada. “Concluído” precisa refletir o atendimento à Definition of Done; mover o cartão não torna o resultado pronto. Esse quadro de status também não substitui o Sprint Goal e o plano que fazem parte do Sprint Backlog.

No GitHub, criem uma issue para cada necessidade, adicionem as issues ao Project e agrupem a visualização de quadro pelo campo de status. Incluam campos adicionais apenas quando ajudarem. A [documentação de Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) explica os layouts e campos disponíveis.

### 7.3. Exemplo de história de usuário

Uma história de usuário é uma forma curta de descrever uma necessidade pelo ponto de vista de quem usará o produto. Um formato possível é **“Como [pessoa], quero [capacidade], para [benefício]”**.

> Como atendente, quero registrar os produtos e as quantidades de um pedido para conseguir recuperá-lo durante o atendimento.

A história inicia uma conversa; não precisa conter sozinha todos os detalhes. Ela pode ser a descrição de uma issue. Bugs, investigações e necessidades técnicas também podem entrar no backlog sem serem forçados a esse formato.

### 7.4. Exemplo de critérios de aceitação

Critérios de aceitação esclarecem o comportamento esperado **de um item específico**. Para a história de registrar pedido, uma proposta é:

- Um pedido com pelo menos um produto e quantidades inteiras positivas pode ser registrado.
- O total é calculado somando preço unitário × quantidade de cada produto.
- O pedido recebe um identificador e pode ser consultado depois.
- Um pedido sem produtos é rejeitado com uma mensagem explicativa.
- Quantidade zero ou negativa é rejeitada.

Um cenário verificável pode ser escrito assim:

> **Dado** um pedido com dois produtos de R$ 10,00 cada, **quando** o atendente registrar o pedido, **então** o sistema deve gerar um identificador e apresentar o total de R$ 20,00.

“Dado / Quando / Então” é um formato opcional. Não é obrigatório usar uma ferramenta de automação para escrevê-lo. Ainda precisam ser discutidas regras como descontos e alterações de preço.

**Critérios de aceitação não substituem a Definition of Done.** “Calcular corretamente o total” descreve comportamento deste item; “código integrado, revisado e com testes relevantes passando” descreve qualidade comum ao incremento. Atender aos critérios sem atender à DoD não torna o item parte de um incremento pronto.

### 7.5. Exemplo de story points e Planning Poker

Story points são uma técnica opcional de **estimativa relativa**: o time compara o tamanho do trabalho, considerando esforço, complexidade e incerteza. Não existe uma conversão universal de pontos para horas e pontos não medem produtividade individual.

Uma escala possível é **1, 2, 3, 5, 8**. Os números abaixo são apenas propostas didáticas; a estimativa real depende do conhecimento e das condições dos Developers.

| Item fictício | Pontos ilustrativos | Conversa que a estimativa provoca |
|---|---|---|
| Ajustar uma mensagem de erro conhecida | 1 | Mudança pequena e com pouca incerteza |
| Consultar pedido por identificador, com persistência existente | 3 | Exige busca, apresentação e tratamento de pedido inexistente |
| Registrar pedido com validações e persistência | 5 | Mais regras, integração e cenários de teste |
| Integrar pagamento com um serviço desconhecido | Sem estimativa ainda | Precisamos investigar a integração e talvez dividir o item |

Não se conclui que um item de 5 pontos demora cinco horas ou que outra equipe daria a mesma pontuação. A soma dos pontos, sozinha, não garante o que cabe na Sprint.

Para experimentar **Planning Poker** sem contratar ferramenta: cada Developer escolhe um número em papel; todos revelam ao mesmo tempo; quem escolheu valores diferentes explica seu raciocínio. O time esclarece o item e estima novamente, se isso ajudar. O propósito é revelar entendimentos e incertezas, não pressionar alguém a aceitar um prazo.

Para aprofundar: [explicação da Atlassian sobre story points e estimativas](https://www.atlassian.com/agile/project-management/estimation). A equipe pode começar sem pontos e adotá-los apenas se forem úteis.

### 7.6. Modelo copiável de issue ou cartão

Copiem e adaptem este exemplo fictício para GitHub, Trello ou Jira. O formato é uma sugestão, não uma exigência do Scrum.

```markdown
## Necessidade
Como atendente, quero registrar produtos e quantidades de um pedido
para conseguir recuperá-lo durante o atendimento.

## Critérios de aceitação propostos
- [ ] Registrar um pedido com ao menos um produto e quantidades válidas.
- [ ] Calcular o total a partir dos preços e quantidades.
- [ ] Gerar identificador e permitir consultar o pedido salvo.
- [ ] Rejeitar pedido vazio e quantidades inválidas.

## Dúvidas e dependências
- Como obter os preços dos produtos?
- Onde os pedidos serão armazenados?

## Estimativa
A discutir pelos Developers após esclarecer as dúvidas.

## Plano inicial, se selecionado para a Sprint
- Definir os dados e regras.
- Implementar registro e consulta.
- Testar os cenários e integrar ao produto.

## Qualidade
Conferir a Definition of Done comum ao incremento.
```

Marcar uma checklist de critérios não verifica automaticamente o comportamento: é preciso conferir o resultado. O objetivo da Sprint deve estar visível junto da seleção e do plano, por exemplo na descrição do Project ou em um documento vinculado.

### 7.7. Impedimentos e acompanhamento

Registrem um impedimento com **descrição, impacto no objetivo e próxima ação**. Por exemplo: “Sem acesso ao ambiente de testes; impede verificar o fluxo de pedidos; encaminhar solicitação à pessoa que administra o ambiente”. Combinem quem encaminha e quando voltarão a verificar.

Não é preciso esperar uma reunião para pedir ajuda. Se quiserem usar gráficos, um burndown mostra o trabalho restante ao longo do ciclo; ele ajuda a conversar sobre o andamento, mas não prova qualidade nem valor entregue. No começo, um quadro atualizado e conversas orientadas ao Sprint Goal podem ser suficientes.

## Dúvidas frequentes

**Usar um quadro já é Scrum?** Não. O framework envolve responsabilidades, eventos, artefatos, compromissos e seus propósitos.

**Podemos acompanhar só semanalmente?** Podem experimentar isso conforme a disponibilidade, mas registrem que a organização é inspirada em Scrum; não chamem acompanhamento semanal de Daily Scrum.

**Precisamos de histórias e estimativas em pontos?** Não são exigências do Scrum. Usem técnicas que ajudem a compreender e planejar o trabalho.

**Aprender Java pode ser Product Goal?** Pode ser objetivo pessoal de aprendizado. Para o produto do exemplo, formulem o benefício para seu público.

**Selecionar trabalho é prometer todas as tarefas?** É uma previsão informada por capacidade, experiência e qualidade. O Sprint Goal orienta ajustes e colaboração.

## Glossário de consulta

- **Backlog:** trabalho necessário, tornado visível e organizado.
- **Product Goal:** objetivo do produto.
- **Sprint Goal:** objetivo da Sprint.
- **Incremento:** resultado integrado e utilizável.
- **Definition of Done (DoD):** definição da qualidade necessária para o incremento estar pronto.
- **Stakeholders / interessados:** pessoas afetadas pelo produto ou interessadas em seu resultado.
- **Timebox:** limite de tempo para um evento.

Veja [fontes e continuidade](ESTUDOS.md) e pratique na [oficina](atividade.html).
