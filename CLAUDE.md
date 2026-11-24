# João Garcia, advogado: site institucional

Instruções técnicas deste código. Negócio, pendências e decisões: `../LEIA-ME.md`. Visual: `DESIGN.md` (manda no visual).
Padrão de trabalho: `00 - Clientes/CLAUDE.md`.

## Como trabalhar aqui
- Dados do negócio só em `lib/site.ts`. Textos em `lib/content.ts`, avaliações em `lib/reviews.ts`, fotos em `lib/images.ts`.
- Fotos: originais PNG em `../material-cliente/recebido/imagens/`; para gerar as do site, rode `python scripts/gerar-fotos.py`.
  Nunca recomprima: quem comprime é o `next/image` (q90).
- Marca: logo original em `../material-cliente/identidade/logo-original/`. O brasão v4 não é mais usado. Os arquivos em uso estão em `public/brand/`.
- A LP de auxílio-acidente é outro projeto (`../lp-auxilio-acidente/`): não misturar os códigos.
- Tokens de tamanho: `lib/utils.ts` ensina o `tailwind-merge` sobre eles; token novo entra lá também.
- Antes de entregar: `npm run lint`, `npm run build`, olhar em 375/768/1440 px e conferir a lista de qualidade de `00 - Clientes/CLAUDE.md`.
- Publicação: push na `main` publica na Vercel. Trabalho em andamento vai num ramo (gera só prévia).

## Comandos
- `npm run dev`: http://localhost:3000
- `npm run build`
- `npm run start -- --port 3123`: serve o build de produção (use para o `inspect.mjs` da taste-skill)
- `npm run lint`
