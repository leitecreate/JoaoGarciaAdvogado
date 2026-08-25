# João Garcia Advogado

Landing page institucional e de conversão para a consultoria sobre Reforma Tributária de João Garcia.

## Desenvolvimento

```sh
npm install
npm run dev
```

Validação e build de produção:

```sh
npm run build
npm run preview
```

## Conteúdo e contatos

Os dados centrais, links de WhatsApp, Instagram, título e descrição ficam em `src/config/site.ts`. Para ativar URL canônica e imagens sociais absolutas, informe o domínio de produção em `siteConfig.siteUrl`.

## Publicação

O projeto usa Astro com saída estática e está preparado para deploy na Vercel. O diretório gerado é `dist/`.
