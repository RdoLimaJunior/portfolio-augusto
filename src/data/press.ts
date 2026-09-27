/** site = matéria em portal/jornal/revista · video = reportagem ou reel · social = publicação em rede social */
export type PressType = "site" | "video" | "social"

export const pressTypeLabels: Record<PressType, string> = {
  site: "Sites e jornais",
  video: "Vídeos",
  social: "Redes sociais",
}

export type PressItem = {
  type: PressType
  outlet: string
  /** ano-mês, ex.: "2026-01" */
  date?: string
  title: string
  url: string
  /** imagem da matéria, baixada e guardada aqui em /img/imprensa/ (nunca link externo). Crédito automático: o veículo. */
  image?: string
}

// A ordem aqui não importa: o catálogo se ordena por data (mais recente primeiro; sem data, no fim).
const rawItems: PressItem[] = [
  {
    type: "site",
    outlet: "Portal 6",
    date: "2026-08",
    title: "Aluno de escola pública vai aos EUA e conquista 3º lugar em competição internacional",
    url: "https://portal6.com.br/2026/08/18/aos-8-anos-aluno-de-escola-publica-no-interior-do-brasil-vai-aos-eua-e-conquista-3o-lugar-em-competicao-internacional-com-jovens-superdotados-de-todo-o-mundo/",
    image: "/img/imprensa/01-portal-6-2026-08.jpg",
  },
  {
    type: "site",
    outlet: "Click Petróleo e Gás",
    date: "2026-08",
    title: "Estudante cearense enfrenta prova internacional de ciências nos EUA e conquista medalha de bronze",
    url: "https://clickpetroleoegas.com.br/aos-8-anos-e-ainda-sem-os-dentes-da-frente-menino-superdotado-de-escola-publica-rural-do-ceara-enfrenta-prova-internacional-de-quimica-fisica-biologia-e-astronomia-nos-eua-conquista-m-asaf04/",
    image: "/img/imprensa/02-click-petr-leo-e-g-s-2026-08.jpg",
  },
  {
    type: "site",
    outlet: "Casa do Ceará",
    date: "2026-08",
    title: "Augusto de Paula Bezerra leva o Ceará ao pódio em olimpíada internacional de Ciências",
    url: "https://casadoceara.org.br/aos-8-anos-augusto-de-paula-bezerra-leva-o-ceara-ao-podio-em-olimpiada-internacional-de-ciencias/",
  },
  {
    type: "site",
    outlet: "Revista Crescer",
    date: "2026-03",
    title: "Cearense conquista medalha em Olimpíada Internacional de Ciências, nos EUA",
    url: "https://revistacrescer.globo.com/maes-e-pais/historias/noticia/2026/03/aos-8-cearense-conquista-medalha-em-olimpiada-internacional-de-ciencias-nos-eua.ghtml",
    image: "/img/imprensa/04-revista-crescer-2026-03.jpg",
  },
  {
    type: "site",
    outlet: "NE9",
    date: "2026-02",
    title: "Nordestino conquista Olimpíada Internacional de Ciências nos EUA",
    url: "https://ne9.com.br/nordestino-de-8-anos-conquista-olimpiada-internacional-de-ciencias-nos-eua/",
    image: "/img/imprensa/05-ne9-2026-02.jpg",
  },
  {
    type: "site",
    outlet: "Correio Braziliense",
    date: "2026-01",
    title: "Cearense recebe medalha em olimpíada científica nos EUA",
    url: "https://www.correiobraziliense.com.br/euestudante/educacao-basica/2026/01/7344578-cearense-de-8-anos-recebe-medalha-em-olimpiada-cientifica-nos-eua.html",
    image: "/img/imprensa/06-correio-braziliense-2026-01.jpg",
  },
  {
    type: "site",
    outlet: "Diário do Nordeste",
    date: "2026-01",
    title: "Cearense conquista medalha em olimpíada internacional de ciências nos EUA",
    url: "https://diariodonordeste.verdesmares.com.br/ceara/crianca-superdotada-cearense-conquista-medalha-em-olimpiada-internacional-de-ciencias-nos-eua-1.3737673",
    image: "/img/imprensa/07-di-rio-do-nordeste-2026-01.jpg",
  },
  {
    type: "site",
    outlet: "Redenção News",
    date: "2026-01",
    title: "Aluno da rede pública de Baturité conquista medalha de bronze em olimpíada internacional de Ciências",
    url: "https://redencaonews.com.br/2026/01/aluno-da-rede-publica-de-baturite-conquista-medalha-de-bronze-em-olimpiada-internacional-de-ciencias-no-eua/",
    image: "/img/imprensa/08-reden-o-news-2026-01.jpg",
  },
  {
    type: "site",
    outlet: "César Macedo",
    date: "2026-01",
    title: "Cearense conquista medalha em olimpíada internacional de ciências nos EUA",
    url: "https://cesarmacedo.com/crianca-superdotada-cearense-conquista-medalha-em-olimpiada-internacional-de-ciencias-nos-eua/",
  },
  {
    type: "site",
    outlet: "Portal Tri",
    date: "2026-01",
    title: "Brasileiro conquista medalha em olimpíada internacional de ciência nos Estados Unidos",
    url: "https://www.portaltri.com.br/noticias/42870/brasileiro-de-8-anos-conquista-medalha-em-olimpiada-internacional-de-ciencia-nos-estados-unidos",
  },
  {
    type: "site",
    outlet: "NE9",
    date: "2025-12",
    title: "Cearense conquista medalha internacional de Ciências e se classifica para competição nos EUA",
    url: "https://ne9.com.br/cearense-de-8-anos-conquista-medalha-internacional-de-ciencias-e-se-classifica-para-competicao-nos-eua/",
    image: "/img/imprensa/11-ne9-2025-12.jpg",
  },
  {
    type: "site",
    outlet: "Diário do Nordeste",
    date: "2025-11",
    title: "Estudante se classifica em olimpíada nos EUA e família faz vaquinha para a viagem",
    url: "https://diariodonordeste.verdesmares.com.br/ceara/crianca-superdotada-do-ce-se-classifica-em-olimpiada-nos-eua-e-familia-faz-vaquinha-para-viagem-1.3714210",
    image: "/img/imprensa/12-di-rio-do-nordeste-2025-11.jpg",
  },
  {
    type: "site",
    outlet: "Diário do Nordeste",
    date: "2022-10",
    title: "Reportagem sobre a busca por inclusão escolar e educação adequada",
    url: "https://diariodonordeste.verdesmares.com.br/ceara/superdotados-e-solitarios-criancas-com-altas-habilidades-enfrentam-ardua-busca-por-inclusao-escolar-1.3290690",
  },
  {
    type: "site",
    outlet: "O Povo",
    date: "2026-01",
    title: "Cearense é premiado em olimpíada internacional",
    url: "https://www.opovo.com.br/noticias/ceara/2026/01/31/aos-8-anos-cearense-superdotado-e-premiado-em-olimpiada-internacional.html",
  },
  {
    type: "site",
    outlet: "Só Notícia Boa",
    date: "2026-01",
    title: "Menino brasileiro conquista medalha em olimpíada internacional de ciência",
    url: "https://www.sonoticiaboa.com.br/2026/01/30/menino-brasileiro-superdotado-conquista-medalha-em-olimpiada-internacional-de-ciencia",
  },
  {
    type: "video",
    outlet: "Diário do Nordeste (YouTube)",
    date: "2026-01",
    title: "Vídeo sobre a medalha em olimpíada internacional de ciências nos EUA",
    url: "https://www.youtube.com/shorts/bdvtKy8Zi_A",
  },
  {
    type: "site",
    outlet: "Diário do Nordeste",
    date: "2025-12",
    title: "Governo do Ceará e Prefeitura vão custear a viagem do estudante à olimpíada nos EUA",
    url: "https://diariodonordeste.verdesmares.com.br/ceara/crianca-superdotada-tera-viagem-a-olimpiada-nos-eua-paga-pelo-governo-do-ce-e-prefeitura-de-baturite-1.3714751",
    image: "/img/imprensa/17-di-rio-do-nordeste-2025-12.jpg",
  },
  {
    type: "video",
    outlet: "Jornal Jangadeiro",
    title: "Reportagem em vídeo (Facebook)",
    url: "https://www.facebook.com/jornaljangadeiro/videos/840600248753377/",
  },
  {
    type: "social",
    outlet: "Razões para Acreditar",
    title: "Publicação sobre a conquista (Facebook)",
    url: "https://www.facebook.com/RazoesParaAcreditar/posts/o-pequeno-augusto-de-paula-bezerra-de-apenas-8-anos-encantou-o-mundo-ao-conquist/1233722912193503/",
  },
  {
    type: "social",
    outlet: "Instagram",
    title: "Publicação 1",
    url: "https://www.instagram.com/p/DUD6bb2CnEy/",
  },
  {
    type: "social",
    outlet: "Instagram",
    title: "Publicação 2",
    url: "https://www.instagram.com/p/DRvUSSKjfMC/",
  },
  {
    type: "video",
    outlet: "Instagram",
    title: "Reel",
    url: "https://www.instagram.com/reels/DWomw-0jjej/",
  },
]

/** Normaliza a URL para detectar repetidos: sem www, sem utm_*, sem hash e sem barra final. */
export function normalizeUrl(raw: string) {
  try {
    const u = new URL(raw)
    for (const k of [...u.searchParams.keys()]) if (k.startsWith("utm_")) u.searchParams.delete(k)
    u.hash = ""
    const path = u.pathname.replace(/\/+$/, "")
    return `${u.hostname.replace(/^www\./, "")}${path}${u.search}`.toLowerCase()
  } catch {
    return raw.trim().toLowerCase()
  }
}

const items = [...rawItems].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))

// Itens repetidos (mesma URL) são descartados; vale o primeiro da lista.
const seen = new Set<string>()
export const press: PressItem[] = items.filter((i) => {
  const key = normalizeUrl(i.url)
  if (seen.has(key)) return false
  seen.add(key)
  return true
})
