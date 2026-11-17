# João Garcia, advogado: site

## Negócio
- Nicho e cidade: advocacia empresarial em Itajaí/SC (bairro São João), atendimento a distância para outras cidades
- Objetivo principal do site: conversa no WhatsApp
- Público: donos de micro, pequenas e médias empresas, quase sempre chegando com algo urgente (reclamação trabalhista, cobrança, bloqueio na conta, dívida, contrato)
- Diferencial: assessoria preventiva contínua; o João faz o primeiro atendimento em qualquer área e encaminha a parceiros de confiança quando precisa
- Conselho profissional: OAB, registro OAB/SC 71.983 (Provimento 205/2021: sem promessa de resultado, sem preço)

## Como trabalhar aqui
- Siga a skill **next-site** e o `DESIGN.md` deste projeto. O `DESIGN.md` manda no visual.
- Dados do negócio só em `lib/site.ts`. Textos em `lib/content.ts`, avaliações em `lib/reviews.ts`, fotos em `lib/images.ts`.
- Fotos: originais PNG em `../material-cliente/recebido/imagens/`; para gerar as do site, rode `python site/scripts/gerar-fotos.py` na pasta do cliente. Nunca recomprima: quem comprime é o `next/image` (q90).
- Marca: logo original em `../material-cliente/identidade/logo-original/`. O brasão v4 não é mais usado. Os arquivos em uso estão em `public/brand/`.
- Briefing e decisões anteriores: `../material-cliente/referencias/briefing-consolidado-institucional.md`.
- A frente de auxílio-acidente (LP nacional) é outro projeto: não misturar com este site.
- Antes de entregar: `npm run lint`, `npm run build`, olhar em 375/768/1440 px e rodar o checklist da next-site.

## Comandos
- `npm run dev`: http://localhost:3000
- `npm run build`
- `npm run start -- --port 3123`: serve o build de produção (use para o `inspect.mjs` da taste-skill)
- `npm run lint`

## Pendências do cliente
- TODO: pedir o vetor oficial da logo, se existir (as letras atuais foram redesenhadas com a Gelasio, sobre um JPEG de 591 px)
- TODO: domínio definitivo (hoje `site.url` aponta para joaogarciaadv.vercel.app, não conferido)
- TODO: dias de atendimento (o horário informado foi 07h às 22h, sem dias)
- TODO: data de conclusão da pós-graduação na PUC Minas
- TODO: autorização para exibir as avaliações do Google com nome (o carrossel já mostra nomes: resolver antes de publicar)
- TODO: confirmar a redação do título do hero (adaptada da mensagem do cliente) e os cinco pontos de "O que me diferencia"
- TODO: detalhar as modalidades de atendimento presencial
- TODO: confirmar as frases de abertura da Atuação e a lista "tenha em mãos" do contato
- TODO: decidir se a razão social (JOAO GARCIA SOCIEDADE INDIVIDUAL DE ADVOCACIA) aparece no rodapé
- TODO: vídeo curto para o site, se o cliente gravar
