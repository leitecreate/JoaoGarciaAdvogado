# Design system: João Garcia, advogado

## A ideia
Site institucional que segue de perto as duas referências escolhidas pelo Leite, adaptadas à marca e ao briefing do João:
Laurence Possebon (`material-cliente/referencias/visuais-design/FireShot Capture 001`) e Danilo Max (`FireShot Capture 002`).
Decisão do Leite em 06/11/2026: **referências de perto**, Manrope, avaliações em carrossel com nomes, sem guardar a versão
anterior ("nome como monumento", de 05/11).

Da referência vêm a estrutura e a linguagem. Do João vêm cores, fotos, textos e dados. Nada de outro advogado foi copiado:
identidade, números de experiência, resultados e depoimentos das referências ficaram de fora.

A ação interativa do site vem do briefing: as empresas chegam por uma reclamação trabalhista, um bloqueio na conta, um
cliente que não paga. No contato, o visitante escolhe o assunto, o site diz o que separar para a primeira conversa e o
WhatsApp abre com a mensagem já escrita.

## Marca
A logo é a original do João (JG em dois quadrados girados, JOÃO GARCIA, ADVOGADO), vetorizada em
`material-cliente/identidade/logo-original/` (ver o `LEIA-ME.md` de lá). O brasão v4 saiu do site por pedido do Leite.
- Cabeçalho: `horizontal-clara.svg` · Rodapé: `logo-clara.svg` · Selo: `simbolo-forte-clara.svg`
- Abaixo de 100 px de altura, use a versão de traço forte: as linhas finas da logo completa somem

## Fotos
Originais PNG em `material-cliente/recebido/imagens/`. **Nada de recomprimir:** `scripts/gerar-fotos.py` só copia e recorta em
PNG, e a única compressão é a do `next/image` (q90, em `next.config.ts`).

## Cores (paleta da marca v4, mantida no site)
| Token | Valor | Uso |
|---|---|---|
| `ivory` (`background`) | #F3F2ED | fundo claro |
| `paper` (`card`) | #FBFAF7 | cards sobre o claro |
| `navy` (`foreground`) | #101728 | texto, fundo escuro |
| `navy-raised` | #18223A | cards e faixas sobre o escuro |
| `navy-line` | #2B3753 | borda de card e selo sobre o escuro |
| `navy-glow` | #1F3A66 | brilho azul do `bg-deep` |
| `navy-soft` (`muted-foreground`) | #4B5368 | texto secundário no claro |
| `mist` | #C9CEDB | texto secundário no escuro, listras do mapa |
| `tone` (`muted`) | #E6E4DB | selos e card de ação no claro |
| `gold` (`primary`) | #C4AC78 | a ação, última linha do hero, detalhes no escuro |
| `gold-deep` (`ring`) | #7D6234 | foco e estrelas sobre o claro |

Ouro como texto só sobre o marinho. Sobre o claro, o ouro escuro.

## Tipografia
- **Manrope** variável, local (`app/fonts/manrope-latin.woff2`, licença OFL ao lado). Local porque `next/font/google` já
  quebrou build de cliente na Vercel. O logo segue em romanas, como na marca v4.
- Seis tamanhos: `text-giant` só na palavra de fundo; `text-small` 14px · `text-body` 16–17px · `text-lead` 19–22px · `text-head` 28–44px · `text-hero` 30–60px

## Espaço, forma e movimento
- Moldura: utilitário `shell` (largura máxima `--container-page`, 76rem, com `px-gutter`)
- Ritmo: `py-section` (72–120px)
- Raio: fotos retas; blocos em `rounded-sm` (4px) com filete, sem sombra; cards de avaliação em `rounded-xl`, como na referência; `rounded-lg` em botões. Nada de canto muito arredondado (pedido do Leite)
- Fundo escuro: `bg-deep` (marinho com brilho azul) ou `bg-navy`/`bg-navy-raised` para dar um degrau entre seções vizinhas
- Botão: `WhatsAppCta` (dourado, com o ícone em círculo claro)
- Movimento (referência gmv.adv.br, tokens `--animate-*` no `globals.css`):
  - Hero: título sobe linha por linha, foto desce mais devagar que a página, selo OAB flutua, selo redondo gira
  - Rolagem: `RevealObserver` sobe textos e abre fotos de baixo para cima; palavra ATENDIMENTO anda de lado; pino do mapa pulsa e recebe raios dourados de vários pontos do Brasil, em ciclo (desenha, segura, o pino recolhe; `MapRays`)
  - Avaliações: troca a cada 6s só quando visível; espera com o mouse ou foco e para de vez no primeiro toque ou clique (sem botão de pausa, a pedido do Leite)
  - Botões: faixa de brilho a cada 5s e leve subida no hover
  - `prefers-reduced-motion`: tudo isso desliga, e o conteúdo nunca fica escondido sem script

## Composição
Pedido do Leite em 06/11/2026: **foco em conversão, cards só na Atuação, e nada da fórmula selo + título + duas colunas**. As seções mudam de forma entre si;
fotos encostam na borda da tela, de canto reto. São 4 fotos no site, uma delas só como fundo do contato.

| Seção | Forma |
|---|---|
| Cabeçalho | Modelo Gustavo Vicelli nas cores do João: logo, links e "Entre em contato" com o número |
| Hero | Retrato recortado à direita (fundo transparente, sobre o `bg-deep`) com luz de recorte atrás (`bg-halo`), a geometria da logo em traço fino que se desenha na entrada (`HeroFrame`, `--animate-draw`) e filetes diagonais de luz; título com a última linha em ouro, selo e recorte diagonal (Laurence) |
| Apresentação | Faixa baixa (`min-h-band`): foto na borda da tela com corte diagonal (`clip-band`) e filete dourado paralelo; no celular a diagonal fica na base (`clip-band-base`). Ao lado, a mensagem do cliente com o fim em ouro escuro e a assinatura com a OAB |
| Atuação | Pergunta e resposta, numa peça só. À esquerda, "Escolha o seu caso": 7 assuntos com filetes, e a faixa marinha com aba dourada desliza até o escolhido e se funde ao painel. À direita, "Como eu ajudo": nome do serviço, o que é feito e "O que entra", com o botão na base. O painel não repete o texto da lista. Os 7 painéis ficam empilhados na mesma célula, para a altura não saltar. No celular, o painel abre abaixo do item |
| Rodapé | Toda a largura do site: chamada, quatro colunas com o mesmo ritmo (título dourado em caixa alta, itens com ícone) e símbolo no vão da chamada, longe do texto. Barra final única: ©, Privacidade, botão das áreas atendidas e crédito. O bloco de SEO (`seoFooter`) abre abaixo da barra: nunca virar texto invisível |
| Avaliações | Modelo Laurence Possebon: selo com a nota e rostos, título central, fileira de cards de ponta a ponta com G do Google, setas e pontos. Sem o selo de verificado do widget deles, que afirmaria uma verificação que não existe |
| Como funciona | Toda a largura do site, sem foto: 6 etapas em linha do tempo horizontal (grade de 3 em telas menores) |
| Sobre | Texto à esquerda, foto emoldurada à direita com selo no canto e OAB, como na referência Gustavo Vicelli |
| O que me diferencia | 5 blocos com aba lateral, 3 + 2 centrados, como na referência Gustavo Vicelli |
| Outras áreas | 8 blocos com filete e aba lateral, e chamada para o WhatsApp |
| Atendimento | Mapa em listras + endereço (Danilo) |
| FAQ | Lista com divisórias |
| Contato | Centrado, sobre foto escurecida, com o seletor de assunto e o Instagram |
| Entalhe | Quebra da referência Laurence na entrada de Avaliações e Atendimento: cantos recortados nas bordas da tela e mergulho curvo no centro, com a setinha que desce para a seção |

## Componentes de terceiros
| Item | Registry | O que mudou |
|---|---|---|
| `button` | @shadcn | tamanho `cta`; `buttonVariants` passa sempre pelo `cn` |
| `sheet` (menu do celular) | @shadcn | sem desfoque nem sombra, fundo marinho |
| `toggle-group` + `toggle` | @shadcn | selos arredondados, pressionado em ouro |

Sem registry, de propósito: `@shadcn/carousel` puxa Embla para só 5 cards, então o trilho é scroll-snap com dois botões;
o FAQ usa `<details>` nativo. `lib/utils.ts` ensina o `tailwind-merge` sobre os tokens de tamanho.

## Valores fora dos tokens (casos únicos)
- `xl:h-[clamp(...)]`, `xl:aspect-[4/5]`, `xl:h-[112%]` e `xl:right-[6%]` no hero, `xl:top-[60%]`, `xl:left-[-3%]`, `top-[30%]`, `right-[-6%]` nos selos: geometria presa à foto
- `text-[0.72rem]` e `tracking-[0.2em]` no texto circular do selo
- `themeColor` (#101728) em `app/layout.tsx`: meta tag do navegador, não aceita variável CSS

## Proibido neste projeto
Prova social inventada, promessa de resultado (Provimento 205/2021 da OAB), preço, número de casos ou anos de experiência
sem dado do cliente, "o melhor advogado", "todo o Brasil", nomes de parceiros, pós-graduação como concluída.

## Regras da casa dispensadas de propósito (`inspect.mjs --allow`)
Pedido do Leite: seguir as referências de perto. Estas regras da taste-skill ficam suspensas neste projeto.
`headline-lines` (só o título do hero, 3 linhas como na referência) · `eyebrow` (nota do Google acima do título do hero) · `gradient` (`bg-deep`) · `hairline`
(linha sob o título do hero, divisórias das listas) · `shadow` (botão fixo do WhatsApp) · `icon-cards` (cards de avaliação com avatar e linhas da Atuação) · `outlined-box` (blocos das outras áreas e dos diferenciais, pedidos pelo Leite) · `edge-text` (cards do carrossel cortados na borda, como na referência Laurence) · `covered-text` (palavra decorativa ATENDIMENTO atrás do mapa, como na referência Gustavo Vicelli).

Avisos mantidos: `palette-cream` (cor da marca v4), `font-not-dealt` (a Manrope foi escolha do Leite), `side-scroll`
(carrossel, tem botões), `no-footage` (não há vídeo identificado do cliente; ele se ofereceu para gravar).

## Suposições do briefing
- Título do hero escrito pelo estúdio. A mensagem do cliente abre a seção seguinte. TODO: o João aprovar
- Foto do hero: retrato recortado enviado pelo Leite em 06/11/2026 (`12-joao-garcia-hero-transparente-3200px.png`)
- Selo "Nota 5,0" e avaliações como estavam no perfil em 31/10/2026. TODO: confirmar autorização com o João
- Mapa do Brasil com pino em Itajaí: o briefing diz "outras localidades" a distância, sem fixar abrangência. TODO: o João confirmar
- Pontos de "O que me diferencia", frases de abertura da Atuação e lista "tenha em mãos" escritos pelo estúdio. TODO: o João confirmar
- Horário não publicado: o cliente informou 07h às 22h sem os dias
- Blog das referências ficou de fora: não há conteúdo
