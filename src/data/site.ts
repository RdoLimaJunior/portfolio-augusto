// Conteúdo do site num só lugar. Edite aqui.
export const site = {
  name: "Augusto de Paula Bezerra",
  firstName: "Augusto",
  tagline:
    "Sou curioso, amo ciências e participo de olimpíadas. Este ano fui selecionado para representar o Brasil em uma final global, no Uzbequistão.",
  about: {
    intro:
      "Sou o Augusto e amo aprender. Aprendi a ler bem pequeno, com 2 anos, e desde então estudo por conta própria. Meus assuntos favoritos são astronomia, química, física e biologia, e também gosto muito de inglês e de música: estudo violino e canto em um coral bilíngue.",
  },
  interests: ["Astronomia", "Química", "Física", "Biologia", "Inglês", "Violino", "Olimpíadas"],
  // Veículos que já contaram a história (só os confirmados pelos links de press.ts).
  seenIn: ["Correio Braziliense", "Diário do Nordeste", "O Povo", "Revista Crescer"],
  instagram: "https://www.instagram.com/augustodpb/",
  instagramDm: "https://ig.me/m/augustodpb",

  // CONTATO: preencha assim que tiver (só números no WhatsApp, com DDI e DDD: "5585999999999").
  // A conversa é sempre com os responsáveis. Enquanto estiverem vazios, o site oferece o Instagram.
  whatsapp: "",
  email: "",

  // Foto principal (faixa larga no topo). Arquivos em public/img/.
  photo: "/img/augusto-capa.jpg",
  photoAlt: "Augusto deitado, sorrindo, rodeado de livros de ciências",

  // MAPAS. Os pins usam emoji (🥇 ouro, 🥈 prata, 🥉 bronze). Para adicionar um local, acrescente um item com lat/lon.
  // O pin de casa fica em nível de estado (Ceará), sem endereço.
  mapPins: {
    home: { id: "ceara", label: "Ceará, Brasil", detail: "De onde eu saio.", lat: -4.33, lon: -38.88, emoji: "🏠" },
    next: {
      id: "tashkent",
      label: "Tashkent, Uzbequistão",
      detail: "Final Global do STEAM AHEAD 2026, de 11 a 16 de dezembro.",
      lat: 41.3,
      lon: 69.24,
      emoji: "✈️",
      pulse: true,
    },
    // Onde já competi. Locais das etapas nacionais/online: me diga cidade e medalha de cada uma e eu coloco no mapa.
    competed: [
      { id: "houston", label: "Houston, EUA", detail: "Copernicus Global Round 2026, na Universidade Rice: medalha de bronze.", lat: 29.76, lon: -95.37, emoji: "🥉" },
      {
        id: "brasil",
        label: "Brasil (etapas nacionais e online)",
        detail: "Torneio Brasileiro de Ciências: bronze. Também OBA, OBLI, SMETA, Linguagens e Tecnologia, em 2025.",
        lat: -12,
        lon: -52,
        emoji: "🥉",
      },
    ],
  },

  // Momentos (fotos em public/img/). Sem metadados; sem brasão de escola; sem outras crianças identificáveis.
  gallery: [
    { src: "/img/augusto-prova.jpg", ratio: 1.78, alt: "Augusto concentrado, fazendo a prova da olimpíada em Houston", caption: "Durante a prova" },
    { src: "/img/augusto-bandeira.jpg", ratio: 1.33, alt: "Augusto com a bandeira do Ceará e a medalha, diante do painel da competição em Houston", caption: "Com a bandeira do Ceará" },
    { src: "/img/augusto-medalha.jpg", ratio: 1.0, alt: "Augusto sorrindo, segurando a medalha de bronze", caption: "Com a medalha de bronze" },
    { src: "/img/augusto-livros.jpg", ratio: 1.46, alt: "Augusto sorrindo, apoiado em uma pilha de livros de ciências", caption: "Com os meus livros de ciências" },
  ],
  family: { src: "/img/familia.jpg", ratio: 0.75, alt: "Augusto e os pais, sorrindo", caption: "A nossa família" },

  // Próximo desafio (o motivo do convite)
  challenge: {
    kicker: "O próximo desafio",
    headline: "Fui selecionado para representar o Brasil!",
    title: "Final Global do STEAM AHEAD 2026",
    place: "Tashkent, Uzbequistão",
    date: "11 a 16 de dezembro de 2026",
    startsOn: "2026-12-11",
    text: "O STEAM AHEAD é uma das competições acadêmicas internacionais mais respeitadas e reúne cinco grandes olimpíadas globais, com provas de matemática, ciências, cibersegurança, informática e artes. Participar da etapa presencial parece algo distante, mas sigo sonhando em estar lá.",
    stats: [
      { value: "30+", label: "países participantes" },
      { value: "5", label: "olimpíadas globais reunidas" },
      { value: "Brasil", label: "é quem vou representar" },
    ],
    cta: "Quero ajudar o Augusto",
  },

  // O que já aconteceu
  highlight: {
    title: "Medalha de bronze na Copernicus Global Round 2026",
    place: "Houston, Texas (EUA) · Universidade Rice",
    text: "Na etapa internacional da Copernicus Olympiad, em Ciências Naturais, fui premiado com a medalha de bronze e subi ao palco com a bandeira do Ceará.",
  },
  olympiadsTitle: "Em 2025, meu primeiro ano competindo",
  olympiads: [
    { title: "Copernicus Natural Science (etapa online)", description: "Medalha de bronze e classificação para a etapa internacional, em Houston.", tag: "2025", medal: true },
    { title: "Torneio Brasileiro de Ciências", description: "Participei e ganhei medalha de bronze.", tag: "2025", medal: true },
    { title: "OBA", description: "Olimpíada Brasileira de Astronomia e Astronáutica.", tag: "2025" },
    { title: "OBLI", description: "Olimpíada Brasileira de Língua Inglesa.", tag: "2025" },
    { title: "SMETA Olympiads of English", description: "Olimpíada de língua inglesa.", tag: "2025" },
    { title: "Olimpíada de Linguagens (Apis)", description: "Destaque em linguagens.", tag: "2025" },
    { title: "Olimpíada de Tecnologia", description: "Destaque em tecnologia.", tag: "2025" },
  ],

  invite: {
    title: "Um convite",
    paragraphs: [
      "Antes de Houston, a nossa família se mobilizou e contou a história do Augusto. Com a repercussão na imprensa, o Governo do Ceará e a prefeitura do município decidiram custear aquela viagem, e somos muito gratos.",
      "Participar da final presencial parece algo distante, mas o Augusto segue sonhando em estar lá.",
      "Uma viagem internacional tem custos, como inscrição, passagens e hospedagem. Se a sua empresa acredita na educação e quer ajudar um estudante brasileiro a viver essa experiência, ficaremos muito felizes em conversar.",
      "Toda forma de ajuda é bem-vinda: recursos, passagens, hospedagem ou materiais de estudo. Depois, contaremos aqui como foi essa jornada.",
    ],
  },

  // Sobre este site (privacidade). Só mantenha estas frases enquanto forem verdadeiras.
  privacy: [
    "Este site é mantido pela família do Augusto, que responde pelo conteúdo e pela imagem dele.",
    "Não usamos cookies, anúncios nem rastreadores, e não coletamos dados de quem visita.",
    "Por segurança, não divulgamos escola, endereço ou outros dados pessoais.",
    "Quem quiser conversar fala diretamente com os responsáveis.",
    "As matérias pertencem aos veículos de imprensa e abrem nos sites deles.",
  ],
}
