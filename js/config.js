window.PORTFOLIO = {
  name: "Bernardo Kim",
  title: "Software Engineer",
  tagline: "Transformando ideias em soluções digitais eficientes, elegantes e escaláveis.",

  heroDescription:
    "Estudante de Engenharia de Software na FIAP, construindo base sólida em programação e levando para a tecnologia a disciplina, o cuidado com qualidade e o trabalho em equipe da minha experiência anterior.",

  typingPhrases: [
    "Estudante de Engenharia de Software | FIAP",
    "Lógica, Python, JavaScript e Git.",
    "Português · Coreano · Inglês"
  ],

  photo: {
    src: "assets/images/bernardo-profile.jpg",
    alt: "Foto profissional de Bernardo Kim"
  },

  resume: {
    path: "documents/curriculo-bernardo-suk-ju-kim.pdf",
    downloadName: "Bernardo_Suk_Ju_Kim_CV.pdf",
    label: "Baixar meu currículo (PDF)"
  },

  about: {
    intro:
      "Um pouco sobre quem eu sou, de onde venho e para onde quero ir na tecnologia.",
    blocks: [
      {
        icon: "user",
        title: "Apresentação",
        text: "Cursando Bacharelado em Engenharia de Software na FIAP, com previsão de conclusão em 2029. Bilíngue nativo em português e coreano, com inglês intermediário."
      },
      {
        icon: "route",
        title: "Trajetória",
        text: "Atuei na Coreia como técnico instalador de papel de parede (2023–2024) e técnico de pintura (2024), e depois como barista (2025). Os cursos técnicos de marcenaria, azulejos, impermeabilização e design de interiores também foram feitos na Coreia."
      },
      {
        icon: "cpu",
        title: "Interesses em tecnologia",
        text: "Estudando os fundamentos: lógica de programação, Python, HTML e CSS, JavaScript e Git/GitHub."
      },
      {
        icon: "layers",
        title: "Áreas de interesse",
        text: "Automação, inteligência artificial e desenvolvimento de software."
      },
      {
        icon: "target",
        title: "Objetivos profissionais",
        text: "Aprender bastante e crescer profissionalmente, ter uma boa remuneração e me sentir confortável no ambiente de trabalho."
      },
      {
        icon: "puzzle",
        title: "Como resolvo problemas",
        text: "Levo da experiência prática o cuidado com qualidade, o trabalho em equipe e a organização. Criatividade e adaptabilidade fazem parte da rotina."
      }
    ]
  },

  experience: [
    {
      role: "Barista",
      period: "2025",
      bullets: [
        "Atendimento ao cliente, preparo de bebidas e operação de máquinas de café expresso.",
        "Organização do balcão, controle de estoque de insumos e manutenção da limpeza do ambiente.",
        "Trabalho em ritmo acelerado, principalmente em horários de pico, mantendo qualidade e agilidade."
      ]
    },
    {
      role: "Técnico de Pintura",
      period: "2024",
      bullets: [
        "Atuação em reparos, acabamento e alisamento de paredes.",
        "Cumprimento de normas de segurança e qualidade.",
        "Trabalho em equipe e apoio operacional."
      ]
    },
    {
      role: "Técnico Instalador de Papel de Parede",
      period: "2023 – 2024",
      bullets: [
        "Treinamento especializado para execução de serviços com alto padrão de qualidade.",
        "Aplicação de técnicas modernas para aumento da produtividade.",
        "Orientação e treinamento de novos colaboradores."
      ]
    }
  ],

  education: [
    {
      school: "FIAP",
      title: "Bacharelado em Engenharia de Software",
      period: "2026 – 2029",
      note: "Cursando. Previsão de conclusão: 2029."
    },
    {
      school: "서기술교육원 중부캠퍼스",
      title: "Formação em Design de Interiores",
      period: "2023",
      note: "Conhecimentos em AutoCAD, SketchUp e técnicas de pintura."
    },
    {
      school: "신진직업교육원",
      title: "Cursos técnicos",
      period: "2023 – 2025",
      note: "Técnica em Marcenaria (2023), Instalação de Papel de Parede (2023), Assentamento de Azulejos (2024) e Impermeabilização (2025)."
    }
  ],

  /* ---------- PROJETOS ---------- */
  // Um objeto por projeto. Para adicionar outro, copie um bloco.
  // - demoUrl / githubUrl vazios ("") => o botão NÃO é exibido.
  // - demoUrl pode ser um link https:// ou um caminho da própria pasta do site.
  // - image vazio ("") => aparece um preview gráfico no lugar.
  // - placeholder: true => mostra o selo "EXEMPLO" (use só em modelos).
  projects: [
    {
      title: "NovaCore — Responsividade",
      description:
        "Página institucional de uma empresa de tecnologia fictícia, feita para praticar layout responsivo com HTML e CSS puro (Grid, Flexbox e media queries).",
      technologies: ["HTML", "CSS", "Grid", "Flexbox", "Responsivo"],
      image: "assets/images/projects/novacore.jpg",
      demoUrl: "projects/novacore/index.html",
      githubUrl: "",
      details:
        "Exercício com 4 arquivos (index.html, style.css, page.css e footer.css). A página tem cabeçalho, serviços, sobre, depoimentos, contato e rodapé, e adapta as colunas para telas de tablet e celular. A marca NovaCore é fictícia."
    },
    {
      title: "Fio & Prensa — Bootstrap 5",
      description:
        "Site de um ateliê de encadernação fictício, feito com Bootstrap 5 para praticar grid, navbar responsiva e utilitários.",
      technologies: ["HTML", "Bootstrap 5", "Grid", "Navbar"],
      image: "assets/images/projects/fio-e-prensa.jpg",
      demoUrl: "projects/fio-e-prensa/index.html",
      githubUrl: "",
      details:
        "Exercício em um único arquivo HTML usando o Bootstrap 5.3 via CDN, com paleta personalizada por variáveis. Inclui navbar com menu recolhível, seção de etapas em grade, galeria de peças, depoimento e rodapé. A marca Fio & Prensa é fictícia. Precisa de internet para carregar o Bootstrap."
    },
    {
      title: "Grão Nobre — Tailwind CSS",
      description:
        "Página de uma marca de café fictícia, feita com Tailwind CSS, com carrossel de depoimentos, FAQ em acordeão e modal, tudo sem JavaScript.",
      technologies: ["HTML", "Tailwind CSS 4", "Boxicons"],
      image: "assets/images/projects/grao-nobre.jpg",
      demoUrl: "projects/grao-nobre/index.html",
      githubUrl: "",
      details:
        "Exercício em um único arquivo HTML usando Tailwind CSS 4 via CDN. O carrossel usa inputs de rádio, o FAQ usa o elemento details e o modal usa o atributo popover. A marca Grão Nobre é fictícia. Precisa de internet para carregar o Tailwind e os ícones."
    },
    {
      title: "Kim's Coffee — Site de cafeteria",
      description:
        "Site completo de uma cafeteria fictícia, com cardápio em abas, seções de história e avaliações, mapa de localização e menu responsivo.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "assets/images/projects/kims-coffee.jpg",
      demoUrl: "projects/kims-coffee/index.html",
      githubUrl: "",
      details:
        "Projeto em HTML, CSS e JavaScript puro (index.html, style.css e script.js). Tem animação de entrada ao rolar, cabeçalho que muda ao rolar, menu hambúrguer no celular, cardápio com abas por categoria e mapa incorporado. A marca Kim's Coffee é fictícia. As fontes e o mapa carregam da internet."
    }
    // Modelo para um novo projeto (copie, tire o // das linhas e coloque uma vírgula no projeto anterior):
    // {
    //   title: "Nome do projeto",
    //   description: "O que é e o que resolve.",
    //   technologies: ["Tecnologia A", "Tecnologia B"],
    //   image: "assets/images/projects/nome.jpg",
    //   demoUrl: "https://...",
    //   githubUrl: "https://github.com/...",
    //   details: "Detalhes extras mostrados ao clicar no card."
    // }
  ],

  /* ---------- EQUIPE ---------- */
  // Seção "Projetos em equipe". Edite aqui o nome, os membros e os projetos.
  // - Cada membro: name (obrigatório); role, github, linkedin são opcionais (vazio = não aparece).
  // - projects usa o mesmo formato da lista de projetos acima. Com a lista vazia,
  //   o site mostra um aviso "em breve". Para adicionar, copie um bloco de projeto.
  team: {
    name: "Asia Dev",
    description: "Equipe de quatro membros que desenvolve projetos de software em conjunto.",
    members: [
      { name: "Bernardo Suk Ju Kim", role: "", github: "", linkedin: "https://www.linkedin.com/in/bernardo-kim-a51093244" },
      { name: "Leonardo Daniel", role: "", github: "", linkedin: "" },
      { name: "Matheus Tamataya", role: "", github: "", linkedin: "" },
      { name: "Vinycius Lu", role: "", github: "", linkedin: "" }
    ],
    projects: [
      {
        title: "Asia Foods — Site de restaurante",
        description:
          "Site de um restaurante de comida asiática (japonesa, coreana e chinesa) com toque brasileiro, com cardápio, avaliações, contato e formulário de reserva de mesas.",
        technologies: ["HTML5", "CSS3", "Google Fonts", "Boxicons"],
        image: "assets/images/projects/asia-food.jpg",
        demoUrl: "https://leonardo-daniel-sc.github.io/projeto-asiafood/",
        githubUrl: "https://github.com/Leonardo-Daniel-SC/projeto-asiafood",
        details:
          "Projeto em equipe feito em HTML5 e CSS3 puros, com foco na experiência do usuário. Tem barra de navegação fixa, seções Home, Sobre, Reservas, Cardápio (com fotos dos pratos), Avaliações e Contato, e efeitos de hover. O formulário de reserva pede nome, e-mail, celular, data, horário, número de pessoas e tipo de ambiente. A marca Asia Foods é fictícia."
      },
      {
        title: "AstroLab — Fabricação em missões espaciais",
        description:
          "Site de um sistema de monitoramento para fabricação em missões espaciais, que propõe resolver a latência extrema da comunicação com a Terra com voz, IA, visão computacional e impressão 3D.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Boxicons", "GitHub Pages"],
        image: "assets/images/projects/astrolab.jpg",
        demoUrl: "https://asia-devv.github.io/AstroLab/",
        githubUrl: "https://github.com/asia-devv/AstroLab",
        details:
          "Projeto em equipe. O site apresenta o AstroLab, ideia de sistema que identifica o problema ou a peça e fabrica de forma autônoma no espaço, sem depender da Terra. Tem barra lateral fixa de navegação, relógio em tempo real, modo escuro/claro, slideshow interativo na seção \"AstroLab na Prática\", quiz com pontuação e feedback, e seções sobre problema, tecnologia, objetivos, público-alvo, benefícios e aplicações na Terra."
      }
      // Modelo para um novo projeto (copie, tire o // das linhas e coloque uma vírgula no projeto anterior):
      // {
      //   title: "Nome do projeto",
      //   description: "O que é e o que resolve.",
      //   technologies: ["Tecnologia A", "Tecnologia B"],
      //   image: "assets/images/projects/nome.jpg",
      //   demoUrl: "https://...",
      //   githubUrl: "https://github.com/...",
      //   details: "Detalhes extras mostrados ao clicar no card."
      // }
    ]
  },

  skills: [
    { category: "Linguagens de programação", items: ["Python", "JavaScript"] },
    { category: "Front-end", items: ["HTML e CSS", "JavaScript"] },
    { category: "Versionamento e colaboração", items: ["Git e GitHub"] },
    { category: "Outras tecnologias", items: ["Lógica de Programação", "AutoCAD", "SketchUp"] },
    { category: "Competências", items: ["Resolução de problemas", "Criatividade", "Inovação", "Trabalho em equipe", "Liderança", "Organização", "Adaptabilidade"] },
    { category: "Idiomas", items: ["Português (Nativo)", "Coreano (Nativo)", "Inglês (Intermediário)"] }
  ],

  contact: {
    email: "bernardokim04@gmail.com",
    phone: "(11) 93041-4205",
    phoneLink: "5511930414205",
    linkedin: "https://www.linkedin.com/in/bernardo-kim-a51093244",
    instagram: "https://www.instagram.com/sukju04",
    github: "https://github.com/SukJoo04",
    others: [
    ]
  },

  effects: {
    typing: true,
    scrollReveal: true,
    gridBackground: true,
    networkCanvas: true
  }
};
