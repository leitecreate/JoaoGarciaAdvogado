# João Garcia, advogado

Site institucional de João Garcia (advocacia empresarial, Itajaí/SC). Next.js 16 (App Router), React 19,
TypeScript, Tailwind CSS v4, shadcn/ui (Base UI) e Motion. Deploy previsto na Vercel.

```sh
npm ci
npm run dev        # http://localhost:3000
npm run lint
npm run build
npm run start      # serve o build
```

- Instruções de trabalho: `CLAUDE.md`
- Direção visual, tokens e decisões: `DESIGN.md`
- Dados do negócio: `lib/site.ts` · textos: `lib/content.ts` · fotos: `lib/images.ts`
- Material do cliente (fotos originais, marca, briefing): `../material-cliente/`

O commit `165775b` guarda a versão anterior completa (Astro e a primeira migração para Next), as identidades v2 a v4
e os materiais preservados, caso algo precise ser recuperado.
