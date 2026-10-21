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

Quadros, histórias de usuário, critérios de aceitação, story points e gráficos podem ajudar; Scrum não exige essas técnicas. Um quadro sugerido é A fazer → Em andamento → Em revisão → Concluído. Movimentar cartões deve refletir a realidade, não substituí-la.

Registre impedimentos com descrição, impacto no objetivo e próxima ação. Não é preciso esperar uma reunião para pedir ajuda. A equipe decide como colaborar, respeitando as responsabilidades.

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
