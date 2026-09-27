# Portfólio do Augusto

Site de portfólio de Augusto de Paula Bezerra (menor de idade — o pai/mãe é quem conduz o projeto).

## Objetivo do site
Conseguir patrocínio privado para as olimpíadas científicas do Augusto, atraindo empresas que apoiam a educação. Todo o texto deve servir a isso: credibilidade (medalha, mídia), confiança (transparência) e um convite claro para apoiar. Ele participa de olimpíadas — não faz "projetos"; não usar essa palavra.

## Público e tom
- Quem decide é um empresário, geralmente no celular: **mobile-first** (testar em 375px; botões de 48px; sem rolagem horizontal).
- O site é um **convite humilde da família**, não uma página de vendas. Nada de funil, contadores, "o que sua empresa recebe", passos, FAQ comercial, botão fixo repetido ou contrapartidas de marca. Augusto fala em primeira pessoa (hero, sobre, olimpíadas); a família fala em "nós" (convite e contato).
- Campanha em andamento: o bloco "O próximo desafio" (`components/challenge.tsx`, fundo verde) vem logo depois da abertura e antes do "Sobre mim", com um único botão "Quero ajudar o Augusto" para o contato. Os dados estão em `site.challenge`.
- O desafio atual: Final Global do STEAM AHEAD 2026, Tashkent (Uzbequistão), 11 a 16/12/2026. Ele sonha em ir à etapa presencial. Nunca prometer valores, cotas, benefícios fiscais ou retorno para a empresa sem a família confirmar.

## Conformidade (LGPD, ECA e ECA Digital: Augusto é criança)
- Sem cookies, analytics, anúncios, pixels, fontes/CDN/imagens de terceiros, embeds ou formulários que coletem dados. Conferir sempre: nenhuma requisição externa (`performance.getEntriesByType('resource')`) e `document.cookie` vazio. Se algum dia entrar analytics ou formulário, atualizar o bloco "Sobre este site" (`site.privacy`) e ter base legal/consentimento dos responsáveis.
- Miniaturas das matérias: baixadas e guardadas em `public/img/imprensa/` (nunca hotlink), com crédito do veículo na tela. Antes de usar, REVISAR cada imagem: sem brasão/nome de escola ou cidade escrita (esmaecer), sem outras crianças/nomes de terceiros, sem arte gerada por IA, sem logo no lugar de foto, sem foto dentro de casa. Script: `scripts/fetch-press-thumbs.py` (baixa og:image) e depois esmaecer/descartar à mão.
- Não divulgar escola, endereço, cidade (só "Ceará"), data de nascimento, idade nem diagnósticos/altas habilidades. Títulos de matérias são reescritos em tom neutro. Foto sem brasão de escola visível.
- Fotos em `public/img/`: só do Augusto, sem brasão/nome de escola visível (borrar ou recortar), sem outras crianças identificáveis nem nomes de terceiros em telas/placas, sem metadados (EXIF), redimensionadas (~1000px). Fontes: `src/data/site.ts` (`photo` = capa larga 2:1 no topo, `gallery`, `family`).
- Não publicar chave Pix, e-mail pessoal nem dados de pagamento (a matéria do Diário de 30/11/2025 traz a chave Pix da família: não copiar). Nomes de escola, diretora e outras crianças também ficam de fora.
- Contato sempre com os responsáveis. Sem uso comercial da imagem da criança (sem marcas "patrocinadoras" no site, sem publicidade).
- "Lei da informática": interpretado como LGPD/ECA Digital. Se a família quiser incentivos fiscais (Lei de Informática 8.248/91 e similares), isso exige formalização própria; o site não deve prometer nada disso.

## Visual
Portfólio olímpico: vivo e colorido (verde e amarelo do Brasil, azul-céu, coral, azul-marinho `indigo-950`), medalhas, estrelas, faixa de assuntos correndo, seções em cores diferentes, animações leves (`animate-*` no `index.css`, `Reveal` ao rolar) que respeitam `prefers-reduced-motion`. Sem anéis olímpicos (marca do COI). Mapas: `components/world-map.tsx` (mapa gerado por `scripts/gen-world-map.mjs` a partir do Natural Earth; pins de emoji 🥇🥈🥉 em `site.mapPins`; o pin de casa fica em nível de estado, sem cidade). Mural de fotos em colunas: `components/photo-wall.tsx`.

## Stack
- Front: React 19 + TypeScript + Vite, Tailwind v4, shadcn/ui com preset `b6Ggajhyq` e base React Aria (`npx shadcn@latest init --preset b6Ggajhyq --base aria`), componentes em `src/components/ui/`. Botão de link = `LinkButton` (sem `asChild`).
- Back (próxima etapa): funções serverless do Vercel em `api/` + Neon Postgres (integração do Vercel, plano free) via `@neondatabase/serverless`
- Deploy: Vercel (repo no GitHub → deploy automático). `vercel.json` já faz o rewrite SPA.

## Comandos
- `npm run dev` — desenvolvimento
- `npm run build` — checa tipos e gera `dist/`

## Convenções
- Todo o conteúdo editável (textos, projetos, links) fica em `src/data/site.ts`. Os textos atuais são PROVISÓRIOS.
- Catálogo de imprensa em `src/data/press.ts` (mais recente primeiro). Cada item tem `type`: `site` | `video` | `social`, `outlet`, `title` (neutro: sem "superdotado"/idade), `url`, e opcionais `date` ("2026-01") e `image` (miniatura oficial da matéria; nunca imagem gerada por IA). URLs repetidas são descartadas automaticamente (`normalizeUrl` ignora www, utm_*, hash e barra final). Ao importar uma curadoria em .md: normalizar URL, checar se abre (HTTP 200), buscar og:title/og:image, classificar o tipo e só então adicionar.
- Guia para o responsável trazer novas matérias: `docs/curadoria-materias.md` (lista de links; o Claude faz dedupe, teste, data, tipo, título neutro e ordem). Datas: usar `article:published_time` da própria página, não o resumo de IA. Links vindos de resumos de IA já vieram quebrados/inventados: sempre testar.
- Alias `@/` aponta para `src/`.
- Novos componentes shadcn: `npx shadcn@latest add <componente>` (já existe `components.json`).
- Site em português (pt-BR).

## Privacidade (importante)
- Não inventar fatos sobre o Augusto nem publicar dados pessoais (endereço, escola, telefone, data de nascimento completa) sem o responsável aprovar.
- Instagram: https://www.instagram.com/augustodpb/

## Publicação
- Repositório (privado): https://github.com/RdoLimaJunior/portfolio-augusto
- Site no ar (Vercel, conta limajunior83-5590): **https://portfolio-augusto-tau.vercel.app**. Atenção: `portfolio-augusto.vercel.app` (sem `-tau`) é de OUTRA pessoa. O endereço com `-limajunior83-5590s-projects` exige login no Vercel.
- Cada `git push` na branch `main` publica sozinho (GitHub ligado ao Vercel). Publicar à mão: `vercel --prod --yes`.

## Pré-lançamento
- O site está com `noindex` (em `index.html`) e `public/robots.txt` com `Disallow: /`, para o Google não listar enquanto a família revisa. NA HORA DE LANÇAR: remover a meta `robots` e trocar o robots.txt por `Allow: /`.

## Estado
- [x] Home: hero, sobre, olimpíadas, na mídia, apoie (patrocínio), contato
- [ ] WhatsApp/e-mail em `site.whatsapp`/`site.email` (sem eles, o botão cai no Instagram DM)
- [ ] Publicações do Instagram: trocar "Publicação 1/2" e "Reel" em `press.ts` pelas legendas reais
- [ ] Conteúdo real (bio, interesses, projetos, fotos)
- [ ] Back-end: galeria de projetos e formulário de contato no Neon
- [ ] Repo no GitHub + deploy no Vercel
