import type { Dictionary } from "../types";

export const ptBR: Dictionary = {
  meta: {
    title: "Lucas Morais, Product Designer Sênior",
    description:
      "Portfólio de Lucas Morais, Product Designer Sênior focado em design systems e growth para plataformas de restaurantes multimarca e e-commerce B2B.",
  },
  nav: {
    brand: "Lucas Morais",
    home: "Início",
    work: "Trabalhos",
    about: "Sobre",
    resume: "Currículo",
    contact: "Contato",
    commandHint: "Abrir paleta de comandos",
    toggleMenu: "Abrir/fechar menu",
    languageLabel: "Idioma",
  },
  common: {
    backToWork: "Voltar para trabalhos",
    downloadResume: "Baixar currículo",
    viewSelectedWork: "Ver trabalhos selecionados",
  },
  home: {
    openToWork: "Aberto a novas oportunidades",
    heroTitle: "Projeto sistemas para plataformas que cresceram além da própria estrutura.",
    heroSubtitle:
      "Oito anos liderando product design para restaurant tech e plataformas B2B, reduzindo centenas de componentes a poucas dezenas e transformando uma tela ruim em 33% mais conversão.",
    howIWorkTitle: "Como eu trabalho",
    pillars: [
      {
        title: "Sistemas antes de telas",
        body: "Prefiro entregar um componente com dez configurações a dez telas feitas na unha. Mais lento no primeiro dia, mais rápido nos próximos dois anos.",
      },
      {
        title: "Dado antes de opinião",
        body: "O melhor redesign que entreguei esse ano não começou com um palpite. Começou com um número de abandono no funil. Procuro esse número antes de abrir o Figma.",
      },
      {
        title: "Feito também para quem não é designer",
        body: "Metade de quem usa o que eu entrego não é designer: gerente de marca, marketing, time de operação. Se essa pessoa precisa de mim pra trocar um banner, a ferramenta falhou.",
      },
    ],
    featuredWorkTitle: "Trabalhos em destaque",
    viewAllProjects: "Ver todos os projetos",
    projects: {
      cms: {
        title: "Migração de CMS para uma Plataforma Multimarca de Restaurantes",
        blurb:
          "Migrei o CMS legado de 8 marcas de restaurante. Reduzi os componentes únicos em 60% e deixei o time de marketing atualizar conteúdo sem depender de design.",
      },
      ordering: {
        title: "Otimização da Experiência de Pedido para uma Plataforma de Restaurantes",
        blurb: "Tirei a seleção de localização do caminho crítico. A conversão geral foi de 6% para 8%.",
      },
    },
    aboutTitle: "Sobre",
    bioParagraphs: [
      "Passei a maior parte dos últimos cinco anos dentro de um único produto: uma plataforma de restaurantes que cresceu de uma marca para oito enquanto eu reconstruía os sistemas por baixo dela. Antes disso, consultoria em transformação digital e design conversacional para chatbots.",
      "Gosto das partes do trabalho de design que são um pouco menos glamorosas: o CMS que ninguém quer mexer, o caso extremo no sistema, a tela que todo mundo achava que estava ótima até o dado provar o contrário.",
    ],
    moreAboutMe: "Mais sobre minha trajetória",
  },
  work: {
    title: "Trabalhos selecionados",
    subtitle:
      "Dois estudos de caso, um tema recorrente: uma plataforma que cresceu além do que foi construída para suportar, primeiro o CMS, depois o fluxo de pedidos.",
    projects: {
      cms: {
        title: "Migração de CMS para uma Plataforma Multimarca de Restaurantes",
        description:
          "Migrei o CMS legado de 8 marcas de restaurante. Reduzi os componentes únicos de centenas para poucas dezenas e dei ao time sem perfil técnico controle sobre atualizações de rotina.",
        tags: ["Design de Sistemas", "B2B", "QSR"],
      },
      ordering: {
        title: "Otimização da Experiência de Pedido para uma Plataforma de Restaurantes",
        description:
          "Rastreei uma taxa de conversão travada em 6% até uma única tela: obrigar a escolha de localização antes do cardápio. Corrigir isso, e destacar o programa de fidelidade, levou a conversão a 8%.",
        tags: ["Growth", "E-commerce", "QSR"],
      },
    },
  },
  about: {
    title: "Sobre",
    bioParagraphs: [
      "Entrei no design meio de lado: uma graduação em Design Gráfico, outra em Gestão de Sistemas de Informação, e uma pós em Design de Interação espremida no meio. Essa mistura provavelmente explica por que eu gravito para as partes do trabalho de produto que são mais encanamento do que acabamento: sistemas de componentes, casos extremos, o CMS que ninguém quer mexer.",
      "A maior parte dos últimos cinco anos foi dentro de uma única plataforma de restaurantes, vendo ela crescer de uma marca para oito enquanto eu reconstruía os sistemas por baixo dela. Antes disso, passei dois anos desenhando fluxos conversacionais para a maior consultoria de chatbots do Brasil, com clientes que iam de hardware de computador a papel e celulose.",
    ],
    education: {
      heading: "Formação",
      items: [
        {
          degree: "Pós-graduação em Design de Interação",
          school: "Pontifícia Universidade Católica de Minas Gerais",
          years: "2019 - 2020",
        },
        {
          degree: "Bacharelado em Design Gráfico",
          school: "Universidade do Estado de Minas Gerais",
          years: "2014 - 2018",
        },
        {
          degree: "Bacharelado em Gestão de Sistemas de Informação",
          school: "Universidade Federal de Minas Gerais",
          years: "2011 - 2013",
        },
      ],
    },
    toolsSkills: {
      heading: "Ferramentas & Habilidades",
      whatIDoLabel: "O que eu faço",
      whatIDo:
        "Product design, UX/UI, design de interação, workshops de discovery, design conversacional, fluxos de trabalho assistidos por IA",
      toolsLabel: "Ferramentas",
      tools: "Figma, Figma Make, FigJam, Adobe Suite",
      languagesLabel: "Idiomas",
      languages:
        "Português (nativo), inglês (fluente), alemão (nível profissional intermediário), espanhol (nível básico)",
      certificationsLabel: "Certificações",
      certifications:
        "Qualitative UX Research, UX Weekend, Design Sprint, Facilitação em Design Thinking, B1",
    },
    awards: {
      heading: "Prêmios",
      title: "1º Lugar no Students to Business (S2B)",
      body: "Microsoft Innovation Center",
    },
    domains: {
      heading: "Áreas de atuação",
      items: [
        {
          title: "QSR & Restaurant Tech",
          body: "Plataformas multimarca, sistemas de pedido, programas de fidelidade, dashboards operacionais, integração com PDV",
        },
        {
          title: "E-commerce B2B",
          body: "Dashboards corporativos, plataformas SaaS, ferramentas de analytics, interfaces administrativas, sistemas de permissão",
        },
        {
          title: "Transformação Digital",
          body: "Migração de sistemas legados, digitalização de processos, gestão de mudança, treinamento e adoção",
        },
        {
          title: "Growth & Otimização",
          body: "Otimização de conversão, análise de funil, testes A/B, pesquisa com usuários, analytics comportamental",
        },
        {
          title: "Design Systems",
          body: "Bibliotecas de componentes, design tokens, documentação, governança, temas multimarca",
        },
        {
          title: "Fluxos com IA",
          body: "Uso de ferramentas de IA para acelerar trabalho de produção, incluindo colocar o código deste portfólio no ar com o Claude Code",
        },
      ],
    },
  },
  resume: {
    downloadPdf: "Baixar PDF",
    summaryHeading: "Resumo Profissional",
    summary:
      "Product designer com 8 anos de experiência entre restaurant tech, e-commerce B2B e interfaces conversacionais. Atualmente focado em design systems e growth para uma plataforma de restaurantes multimarca, o tipo de trabalho que é mais encanamento do que acabamento e que geralmente compensa depois.",
    experienceHeading: "Experiência Profissional",
    jobs: [
      {
        title: "Product Designer",
        company: "dti digital",
        location: "Belo Horizonte, Brasil",
        period: "Abril 2021 - Presente",
        intro:
          "Product Designer atuando de ponta a ponta na ideação e desenvolvimento de produtos digitais com squads ágeis.",
        items: [
          "Desde 2022, lidero o relacionamento com o cliente e a operação de design da conta, coordenando especialistas de UX Research, Visual Design e UX Writing",
          "Referência de UX design entre produtos de analytics de dados, plataformas de gestão interna, apps de comunidade mobile, plataformas de restaurante/QSR, e-commerce e produtos internacionais",
          "Facilito workshops de discovery e apoio discovery contínuo em projetos mais longos",
          "Mentoro novos designers no processo de design e na facilitação de workshops",
          "Escrevo mensalmente para a Guilda de Design interna sobre soft skills",
        ],
      },
      {
        title: "UX Designer",
        company: "Avenue Code",
        location: "Belo Horizonte, Brasil",
        period: "Novembro 2019 - Abril 2021",
        intro:
          "UX Designer responsável por entender necessidades de usuários e clientes, desenhar fluxos conversacionais e definir interações entre pessoas e chatbots.",
        items: [
          "Desenhei experiências conversacionais para WhatsApp, Facebook Messenger, Google Business Messenger e web",
          "Atuei como consultor para a maior empresa de chatbots do Brasil, contribuindo em projetos de empresas de diversos setores, de hardware de computador a papel e celulose",
          "Facilitei inceptions de discovery, alinhei melhorias de produto e apoiei brevemente a gerente de design como Buddy, ajudando a acompanhar necessidades do time e desenvolvimento de carreira",
        ],
      },
      {
        title: "UX/UI Designer",
        company: "Paiva Piovesan Softwares",
        location: "Belo Horizonte, Brasil",
        period: "Janeiro 2019 - Novembro 2019",
        items: [
          "Responsável pelo departamento de design, conduzi testes de usabilidade, entrevistas com usuários e análise de experiência enquanto desenhava interfaces para os produtos de software da empresa",
          "Forte defensor da introdução do Scrum no processo de desenvolvimento e atuei como Scrum Master adaptado às necessidades do time",
        ],
      },
      {
        title: "UX/UI Design Intern",
        company: "Paiva Piovesan Softwares",
        location: "Belo Horizonte, Brasil",
        period: "Junho 2018 - Dezembro 2018",
        items: [
          "Trabalhei no design de interface do produto financeiro nas versões web e mobile para Android e iPhone",
          "Criei materiais promocionais para o site e redes sociais da empresa, além de peças de comunicação interna",
        ],
      },
    ],
    educationHeading: "Formação",
    education: [
      {
        degree: "Pós-graduação em Design de Interação",
        school: "Pontifícia Universidade Católica de Minas Gerais",
        years: "2019 - 2020",
      },
      {
        degree: "Bacharelado em Design Gráfico",
        school: "Universidade do Estado de Minas Gerais",
        years: "2014 - 2018",
      },
      {
        degree: "Bacharelado em Gestão de Sistemas de Informação",
        school: "Universidade Federal de Minas Gerais",
        years: "2011 - 2013",
      },
    ],
    skillsHeading: "Habilidades & Competências",
    skills: [
      {
        label: "Competências Principais",
        body: "Product Design, UX/UI Design, Design de Interação, Design Thinking, Workshops de Discovery, Design Conversacional, Fluxos de Trabalho com IA",
      },
      { label: "Ferramentas", body: "Figma, Figma Make, FigJam, Adobe Suite" },
      {
        label: "Idiomas",
        body: "Português (Nativo), Inglês (Fluente), Alemão (Nível Profissional Intermediário), Espanhol (Nível Básico)",
      },
      {
        label: "Certificações",
        body: "Qualitative UX Research, UX Weekend, Design Sprint, Facilitação em Design Thinking, B1",
      },
      {
        label: "Áreas de Produto",
        body: "Analytics de Dados, Plataformas de Gestão Interna, Apps Mobile, Plataformas de Restaurante & QSR, E-commerce, Produtos Internacionais, Chatbots & Interfaces Conversacionais",
      },
      {
        label: "Prêmios",
        body: "1º Lugar no Students to Business (S2B), Microsoft Innovation Center",
      },
    ],
  },
  contact: {
    title: "Fale comigo",
    subtitle:
      "Aberto a novas oportunidades e colaborações interessantes, especialmente em growth, design de sistemas ou simplificar operações bagunçadas. E-mail é o mais rápido.",
    emailHeading: "E-mail",
    emailCaption: "Melhor para detalhes de projeto",
    linkedinHeading: "LinkedIn",
    linkedinCaption: "Bom para um oi rápido",
    locationHeading: "Localização",
    locationCity: "Belo Horizonte, Minas Gerais, Brasil",
    locationCaption: "Horário de Brasília (UTC-3) · aberto a trabalho remoto e viagens ocasionais",
    lookingForHeading: "O que eu procuro",
    lookingForBody:
      "Trabalho de growth e conversão em ambientes de produto complexos. Design systems para plataformas com mais de uma marca. Transformação digital onde design resolve um problema operacional, não decora um. Se é isso que você está construindo, vamos conversar. Costumo responder em um ou dois dias.",
  },
  notFound: {
    title: "404",
    subtitle: "Página não encontrada",
    body: "Essa página não existe, ou foi movida e ninguém atualizou o link.",
    backHome: "Voltar para o início",
  },
  commandPalette: {
    title: "Ir para",
    description: "Navegar pelo portfólio",
    placeholder: "Para onde?",
    empty: 'Nada encontrado. Tente "trabalhos" ou "contato".',
    groupPages: "Páginas",
    groupCaseStudies: "Estudos de caso",
    groupActions: "Ações",
    home: "Início",
    work: "Trabalhos selecionados",
    about: "Sobre",
    resume: "Currículo",
    contact: "Contato",
    cms: "Migração de CMS multimarca",
    ordering: "Otimização do fluxo de pedidos",
    emailAction: "Enviar e-mail para Lucas",
    linkedinAction: "Abrir LinkedIn",
    downloadAction: "Baixar currículo",
  },
  caseStudyCMS: {
    title: "Migração de CMS para uma Plataforma Multimarca de Restaurantes",
    subtitle:
      "Um CMS legado estava travando 8 marcas de restaurante. Usei a migração para repensar o design multimarca desde a base, em vez de só portar os componentes antigos pra uma tecnologia nova.",
    overview: {
      heading: "Visão geral",
      yearLabel: "Ano",
      year: "2022-2026",
      roleLabel: "Papel",
      role: "Lead Product Designer",
      domainLabel: "Domínio",
      domain: "QSR, B2B, Design de Sistemas",
      body: "Uma plataforma de restaurantes multimarca rodava em um CMS legado próximo do fim da vida útil, difícil de manter, limitado e travando o crescimento. A migração virou a chance de redesenhar a própria arquitetura de componentes, para que marcas com identidades distintas pudessem compartilhar um sistema em vez de cada uma duplicar o seu.",
    },
    problem: {
      heading: "Problema",
      paragraphs: [
        "O CMS legado era difícil de manter e estava próximo da descontinuação. Gerentes de marca, marketing e operação não tinham como atualizar conteúdo sem acionar um designer.",
        "Cada marca também rodava seus próprios componentes customizados: trabalho duplicado, lançamentos de marca mais lentos e um sistema que não acompanhava o crescimento da empresa.",
      ],
    },
    role: {
      heading: "Meu papel",
      intro: "Como Lead Product Designer:",
      items: [
        "Auditei o CMS existente para levantar requisitos de migração e pontos de dor",
        "Desenhei uma arquitetura de componentes capaz de suportar múltiplas marcas sobre fundações compartilhadas",
        "Trabalhei com engenharia para definir restrições técnicas e o plano de rollout",
        "Trabalhei com os times de marca e marketing para validar os novos fluxos de trabalho",
      ],
    },
    constraints: {
      heading: "Restrições",
      items: [
        "Zero downtime: os sites atendem milhões de clientes",
        "Suportar 8+ marcas com identidades visuais distintas",
        "Times sem perfil técnico precisam atualizar conteúdo de forma independente",
        "Tempo limitado de engenharia exigiu um rollout em fases",
      ],
    },
    approach: {
      heading: "Abordagem estratégica",
      intro:
        "Em vez de recriar os mesmos componentes em um CMS novo, tratei isso como uma chance de repensar o design multimarca em escala.",
      boxes: [
        {
          title: "Sistema de variantes de componentes",
          body: "Uma arquitetura flexível com variantes temáticas substituiu centenas de componentes únicos por poucas dezenas. E deixou o sistema mais flexível, não menos.",
        },
        {
          title: "Ferramentas de autoatendimento",
          body: "Fluxos de CMS simples o suficiente para que times de marca e marketing atualizassem conteúdo e escolhessem a variante certa sem precisar de revisão de design para mudanças de rotina.",
        },
      ],
    },
    decisions: {
      heading: "Principais decisões de design",
      items: [
        {
          title: "Fundações compartilhadas, superfícies flexíveis",
          body: "Um único grid de layout, sistema de espaçamento e conjunto de padrões de acessibilidade em todas as marcas. Cor, tipografia e imagens ficaram flexíveis o suficiente para manter cada marca distinta.",
        },
        {
          title: "Aprimoramento progressivo",
          body: "Os componentes funcionavam prontos para uso com configuração mínima, com opções avançadas por baixo para usuários avançados: menos fricção de onboarding, mais espaço para casos extremos.",
        },
        {
          title: "Pensado para migração",
          body: "Mapeei cada componente antigo para seu substituto, com caminhos de upgrade claros para o que foi descontinuado.",
        },
      ],
    },
    outcomes: {
      heading: "Resultados",
      stats: [
        { stat: "75%", label: "Menos pedidos de design para atualizações de conteúdo de rotina" },
        { stat: "60%", label: "Menos componentes únicos para manter em todas as marcas" },
        { stat: "100%", label: "Migração concluída sem downtime para o cliente final" },
        { stat: "3 semanas", label: "Tempo para lançar uma nova marca, antes eram meses" },
      ],
      closing:
        "O time de design parou de receber pedidos de atualização de rotina e passou a investir esse tempo em lançamentos de novas marcas.",
    },
    learnings: {
      heading: "Aprendizados",
      items: [
        "Uma migração técnica é uma chance de redesign estratégico, não só um lift-and-shift",
        "Ferramentas para quem não é designer precisam ser poderosas e tolerantes a erro, diferente de desenhar para o cliente final",
        "Envolva marca e engenharia desde o dia um, ou pague por isso em retrabalho depois",
        "Uma restrição dura (suportar 8+ marcas) forçou um sistema melhor e mais escalável do que um briefing mais fácil teria gerado",
      ],
    },
  },
  caseStudyOrdering: {
    title: "Otimização da Experiência de Pedido para uma Plataforma de Restaurantes",
    subtitle:
      "A conversão estava travada em 6%. Rastreei até uma tela (obrigar a escolha de localização antes do cardápio) e corrigir isso levou a conversão a 8%.",
    overview: {
      heading: "Visão geral",
      yearLabel: "Ano",
      year: "2022-2026",
      roleLabel: "Papel",
      role: "Senior Product Designer",
      domainLabel: "Domínio",
      domain: "QSR, E-commerce, Growth",
      body: "Depois de lançar sites dedicados para as principais marcas do grupo, o objetivo virou crescer conversão e receita online. Usuários logados convertiam muito melhor que visitantes anônimos, mas a conversão geral estava em apenas 6%. A solução envolvia simplificar o login e trazer as funcionalidades de usuário logado para dentro da jornada principal, em vez de escondê-las atrás dela.",
    },
    problem: {
      heading: "Problema",
      paragraphs: [
        "Usuários logados convertiam significativamente melhor que visitantes anônimos, mas eram uma fatia pequena do tráfego total.",
        "O problema maior era o próprio fluxo de pedido: o usuário precisava escolher uma localização de restaurante antes de sequer ver o cardápio. Esse único ponto de decisão, sem relação com o que a pessoa realmente queria pedir, estava custando conversões silenciosamente. A conversão geral estava em 6%, bem abaixo dos benchmarks do setor.",
        "O programa de fidelidade tinha valor real e baixa adoção, porque não era exposto em nenhum momento que importasse. Cadastro e login já vinham sendo criticados em heurísticas, e as funcionalidades de usuário logado estavam enterradas onde novos usuários nunca as encontrariam.",
      ],
    },
    role: {
      heading: "Meu papel",
      intro: "Como Senior Product Designer, liderei o redesign com produto, engenharia e analytics:",
      items: [
        "Analisei dados de comportamento para encontrar onde os usuários abandonavam",
        "Conduzi pesquisa para entender como as pessoas pensavam sobre localização e pedido",
        "Desenhei e testei fluxos que reduziam fricção sem perder funcionalidade",
        "Costurei pontos de contato com fidelidade no fluxo, em vez de uma página separada",
      ],
    },
    constraints: {
      heading: "Restrições",
      items: [
        "Retirada e entrega, cada uma com preço e disponibilidade específicos por localização",
        "Compatibilidade com sistemas de PDV em centenas de localidades",
        "Conformidade com ADA, com performance como requisito inegociável",
        "Não podia atrapalhar a experiência dos clientes fiéis já existentes",
      ],
    },
    approach: {
      heading: "Abordagem estratégica",
      intro:
        "Os dados mostravam que usuários logados convertiam melhor, então toda a iniciativa girou em torno de conseguir mais usuários logados e dar a eles um motivo pra isso. Dividimos o trabalho em frentes menores, ordenadas por dependência técnica e impacto esperado.",
      boxes: [
        {
          title: "Cadastro e login redesenhados",
          body: "Personalizei o cadastro por marca e adicionei um campo de aniversário que dava ao usuário um motivo imediato para se cadastrar, corrigindo ao mesmo tempo a fricção apontada em heurísticas anteriores.",
        },
        {
          title: "Funcionalidades de usuário logado movidas para o fluxo principal",
          body: "Repetir pedido, favoritos e benefícios de fidelidade saíram de páginas enterradas para dentro do fluxo principal de pedido, visíveis também para usuários anônimos, ao lado de um convite claro para criar conta.",
        },
        {
          title: "Fricção de localização contornada",
          body: "Deixei as pessoas navegarem pelo cardápio primeiro. A localização foi movida para o checkout, pré-preenchida por geolocalização ou histórico de pedidos.",
        },
        {
          title: "Valor tornado visível",
          body: "Adicionei momentos ao longo do fluxo que mostravam a economia real e a conveniência de estar logado, em vez de pedir uma conta com base na confiança.",
        },
      ],
    },
    decisions: {
      heading: "Principais decisões de design",
      items: [
        {
          title: "Porta falsa para funcionalidades de usuário logado",
          body: "Mostrei funcionalidades exclusivas de usuário logado para visitantes anônimos, ao lado de um convite claro para se cadastrar. As taxas de login e cadastro subiram de 10 a 20%.",
        },
        {
          title: "Posicionamento acima do design da funcionalidade",
          body: "Repetir pedido, favoritos e fidelidade saíram de páginas separadas para dentro da jornada principal. O uso dessas funcionalidades subiu de 30 a 60%.",
        },
        {
          title: "Cadastro personalizado por marca com incentivo",
          body: "Telas de cadastro personalizadas por marca, com um campo de aniversário que dava valor ao usuário em troca do dado.",
        },
        {
          title: "Benchmark, teste, depois lance",
          body: "Cada mudança teve um objetivo claro, um benchmark contra produtos comparáveis, uma rodada de teste de usabilidade e um teste A/B antes do rollout completo.",
        },
      ],
    },
    outcomes: {
      heading: "Resultados",
      stats: [
        { stat: "6% → 8%", label: "Conversão geral (aumento relativo de 33%)" },
        { stat: "10–20%", label: "Mais logins e cadastros a partir de pontos de contato estratégicos" },
        { stat: "30–60%", label: "Mais uso de repetir pedido, favoritos e funcionalidades de fidelidade" },
        { stat: "100%", label: "Conformidade com ADA, com suporte melhorado a leitores de tela" },
      ],
      closing: "Tornar os benefícios da conta visíveis gerou mais cadastros do que exigi-los jamais gerou.",
    },
    learnings: {
      heading: "Aprendizados",
      items: [
        "Uma métrica pode esconder uma estratégia à vista de todos: a maior conversão dos usuários logados virou o plano inteiro",
        "Mostrar valor antes de pedir compromisso aumentou os cadastros em 10–20%",
        "Posicionamento importa tanto quanto design: as mesmas funcionalidades tiveram 30–60% mais uso depois de sair de páginas enterradas",
        "Dividir uma grande iniciativa em frentes ordenadas por dependência e impacto significa entregar valor continuamente, em vez de esperar um grande lançamento único",
        "Benchmark, teste, depois lance: validar cada hipótese antes do rollout completo manteve o risco baixo",
      ],
    },
  },
};
