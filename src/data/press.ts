export type PressItem = {
  outlet: string
  /** ano-mês, ex.: "2026-01" */
  date?: string
  title: string
  url: string
  /** miniatura oficial da própria matéria (opcional) */
  image?: string
}

// Da mais recente para a mais antiga.
export const press: PressItem[] = [
  {
    outlet: "Portal 6",
    date: "2026-08",
    title: "Aluno de escola pública vai aos EUA e conquista 3º lugar em competição internacional",
    url: "https://portal6.com.br/2026/08/18/aos-8-anos-aluno-de-escola-publica-no-interior-do-brasil-vai-aos-eua-e-conquista-3o-lugar-em-competicao-internacional-com-jovens-superdotados-de-todo-o-mundo/",
    image: "https://portal6.com.br/wp-content/uploads/2026/08/821816-20260818-000916-0a2694.jpg",
  },
  {
    outlet: "Casa do Ceará",
    date: "2026-08",
    title: "Augusto de Paula Bezerra leva o Ceará ao pódio em olimpíada internacional de Ciências",
    url: "https://casadoceara.org.br/aos-8-anos-augusto-de-paula-bezerra-leva-o-ceara-ao-podio-em-olimpiada-internacional-de-ciencias/",
  },
  {
    outlet: "Revista Crescer",
    date: "2026-03",
    title: "Cearense conquista medalha em Olimpíada Internacional de Ciências, nos EUA",
    url: "https://revistacrescer.globo.com/maes-e-pais/historias/noticia/2026/03/aos-8-cearense-conquista-medalha-em-olimpiada-internacional-de-ciencias-nos-eua.ghtml",
    image: "https://s2-crescer.glbimg.com/D-l1387gp4gX34QJziN57Td8-OM=/735x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_19863d4200d245c3a2ff5b383f548bb6/internal_photos/bs/2026/L/x/tSefTCSqmAK7FrBOmGVQ/captura-de-tela-2026-03-06-164432.png",
  },
  {
    outlet: "O Povo",
    date: "2026-02",
    title: "Cearense é premiado em olimpíada internacional",
    url: "https://mais.opovo.com.br/jornal/cidades/2026/02/02/aos-8-anos-cearense-superdotado-e-premiado-em-olimpiada-internacional.html",
  },
  {
    outlet: "Só Notícia Boa",
    date: "2026-02",
    title: "Brasileiro conquista medalha em olimpíada internacional de ciência",
    url: "https://www.sonoticiaboa.com.br/2026/02/01/brasileiro-superdotado-de-8-anos-conquista-medalha-em-olimpiada-internacional-de-ciencia",
    image: "https://d281e75zdqqlon.cloudfront.net/wp-content/uploads/2026/01/elke-2026-01-30T071029.898.jpg",
  },
  {
    outlet: "NE9",
    date: "2026-02",
    title: "Nordestino conquista Olimpíada Internacional de Ciências nos EUA",
    url: "https://ne9.com.br/nordestino-de-8-anos-conquista-olimpiada-internacional-de-ciencias-nos-eua/",
    image: "https://ne9.com.br/wp-content/uploads/2026/02/Foto-arquivo-pessoal.webp",
  },
  {
    outlet: "Correio Braziliense",
    date: "2026-01",
    title: "Cearense recebe medalha em olimpíada científica nos EUA",
    url: "https://www.correiobraziliense.com.br/euestudante/educacao-basica/2026/01/7344578-cearense-de-8-anos-recebe-medalha-em-olimpiada-cientifica-nos-eua.html",
    image: "https://midias.correiobraziliense.com.br/_midias/png/2026/01/30/675x450/1_img-2853-63810241.png",
  },
  {
    outlet: "Diário do Nordeste",
    date: "2026-01",
    title: "Cearense conquista medalha em olimpíada internacional de ciências nos EUA",
    url: "https://diariodonordeste.verdesmares.com.br/ceara/crianca-superdotada-cearense-conquista-medalha-em-olimpiada-internacional-de-ciencias-nos-eua-1.3737673",
    image: "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3737677:1769615799/WhatsApp%20Image%202026-01-28%20at%2010.37.11.webp?f=16x9&h=720&w=1280",
  },
  {
    outlet: "Redenção News",
    date: "2026-01",
    title: "Aluno da rede pública de Baturité conquista medalha de bronze em olimpíada internacional de Ciências",
    url: "https://redencaonews.com.br/2026/01/aluno-da-rede-publica-de-baturite-conquista-medalha-de-bronze-em-olimpiada-internacional-de-ciencias-no-eua/",
    image: "https://redencaonews.com.br/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-29-at-09.27.27.jpeg",
  },
  {
    outlet: "César Macedo",
    date: "2026-01",
    title: "Cearense conquista medalha em olimpíada internacional de ciências nos EUA",
    url: "https://cesarmacedo.com/crianca-superdotada-cearense-conquista-medalha-em-olimpiada-internacional-de-ciencias-nos-eua/",
    image: "https://cesarmacedo.com/wp-content/uploads/2026/01/8ba8489d-eb4b-4db8-b412-41fbbd4bc963.jpg",
  },
  {
    outlet: "Portal Tri",
    date: "2026-01",
    title: "Brasileiro conquista medalha em olimpíada internacional de ciência nos Estados Unidos",
    url: "https://www.portaltri.com.br/noticias/42870/brasileiro-de-8-anos-conquista-medalha-em-olimpiada-internacional-de-ciencia-nos-estados-unidos",
  },
  {
    outlet: "NE9",
    date: "2025-12",
    title: "Cearense conquista medalha internacional de Ciências e se classifica para competição nos EUA",
    url: "https://ne9.com.br/cearense-de-8-anos-conquista-medalha-internacional-de-ciencias-e-se-classifica-para-competicao-nos-eua/",
    image: "https://ne9.com.br/wp-content/uploads/2025/12/Crianca-Nordestina-superdotada-fot-rproducao.webp",
  },
  {
    outlet: "URB News",
    date: "2025-12",
    title: "Governo do Ceará e Prefeitura de Baturité vão custear viagem de estudante para olimpíada nos EUA",
    url: "https://urbnews.com.br/2025/12/01/governo-do-ceara-e-prefeitura-de-baturite-vao-custear-viagem-de-estudante-superdotado-para-olimpiada-nos-eua/",
    image: "https://urbnews.com.br/wp-content/uploads/2025/12/20251201-AUGUSTO-DE-PAULA-site.jpeg",
  },
  {
    outlet: "Diário do Nordeste",
    date: "2025-11",
    title: "Estudante se classifica em olimpíada nos EUA e família faz vaquinha para a viagem",
    url: "https://diariodonordeste.verdesmares.com.br/ceara/crianca-superdotada-do-ce-se-classifica-em-olimpiada-nos-eua-e-familia-faz-vaquinha-para-viagem-1.3714210",
    image: "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3714224:1764371728/SaveClip.App_558861412_17845935132578203_6300784350797984360_n.webp?f=16x9&h=720&w=1280",
  },
  {
    outlet: "Jornal Jangadeiro",
    title: "Reportagem em vídeo (Facebook)",
    url: "https://www.facebook.com/jornaljangadeiro/videos/840600248753377/",
  },
  {
    outlet: "Razões para Acreditar",
    title: "Publicação sobre a conquista (Facebook)",
    url: "https://www.facebook.com/RazoesParaAcreditar/posts/o-pequeno-augusto-de-paula-bezerra-de-apenas-8-anos-encantou-o-mundo-ao-conquist/1233722912193503/",
  },
]
