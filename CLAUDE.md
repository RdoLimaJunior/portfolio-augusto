# Portfólio do Augusto

Site de portfólio de Augusto de Paula Bezerra (menor de idade — o pai/mãe é quem conduz o projeto).

## Objetivo do site
Conseguir patrocínio privado para as olimpíadas científicas do Augusto, atraindo empresas que apoiam a educação. Todo o texto deve servir a isso: credibilidade (medalha, mídia), confiança (transparência) e um convite claro para apoiar. Ele participa de olimpíadas — não faz "projetos"; não usar essa palavra.

## Stack
- Front: React 19 + TypeScript + Vite, Tailwind v4, shadcn/ui com preset `b6Ggajhyq` e base React Aria (`npx shadcn@latest init --preset b6Ggajhyq --base aria`), componentes em `src/components/ui/`. Botão de link = `LinkButton` (sem `asChild`).
- Back (próxima etapa): funções serverless do Vercel em `api/` + Neon Postgres (integração do Vercel, plano free) via `@neondatabase/serverless`
- Deploy: Vercel (repo no GitHub → deploy automático). `vercel.json` já faz o rewrite SPA.

## Comandos
- `npm run dev` — desenvolvimento
- `npm run build` — checa tipos e gera `dist/`

## Convenções
- Todo o conteúdo editável (textos, projetos, links) fica em `src/data/site.ts`. Os textos atuais são PROVISÓRIOS.
- Alias `@/` aponta para `src/`.
- Novos componentes shadcn: `npx shadcn@latest add <componente>` (já existe `components.json`).
- Site em português (pt-BR).

## Privacidade (importante)
- Não inventar fatos sobre o Augusto nem publicar dados pessoais (endereço, escola, telefone, data de nascimento completa) sem o responsável aprovar.
- Instagram: https://www.instagram.com/augustodpb/

## Estado
- [x] Home: hero, sobre, olimpíadas, na mídia, apoie (patrocínio), contato
- [ ] E-mail/WhatsApp de contato em `site.email` (hoje só Instagram)
- [ ] Revisar textos de benefícios/uso do apoio em `site.sponsorship`
- [ ] Conteúdo real (bio, interesses, projetos, fotos)
- [ ] Back-end: galeria de projetos e formulário de contato no Neon
- [ ] Repo no GitHub + deploy no Vercel
