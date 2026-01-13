// ═══════════════════════════════════════════════════════════════
// CONFIGURAÇÃO EDITÁVEL - CURSO REDAÇÃO NOTA 1000
// ═══════════════════════════════════════════════════════════════
// Edite este arquivo para atualizar conteúdo, links, horários, etc.

export const BRANDING = {
  name: "Curso Redação Nota 1000",
  tagline: "Correção comentada + método prático para nota máxima",
  location: "Presencial • Goiânia",
  instagram: "@redacao.mil.1000",
  instagramUrl: "https://instagram.com/redacao.mil.1000",
} as const;

export const CONTACT = {
  whatsapp: {
    matricula: {
      phone: "5562981899570",
      display: "(62) 98189-9570",
      message: "Olá! Quero fazer minha matrícula no Curso Redação Nota 1000. Pode me passar horários, valores e como funciona?",
    },
    urgencia: {
      phone: "5562995551544",
      display: "(62) 99555-1544",
      message: "Olá! Preciso de atendimento urgente sobre o Curso Redação Nota 1000.",
    },
  },
  endereco: {
    rua: "Rua F QD 159 LT 1, Sala 1",
    bairro: "Parque Tremendão",
    cidade: "Goiânia",
    uf: "GO",
    cep: "74.475-060",
    mapsUrl: "https://maps.google.com/?q=Rua+F+QD+159+LT+1,+Sala+1,+Parque+Tremendão,+Goiânia+-+GO",
  },
} as const;

export const HEADLINES = {
  main: "Sua aprovação começa\ncom uma redação nota 1000",
  subtitle: "Treino, correção detalhada (C1–C5) e acompanhamento personalizado.",
} as const;

export const SCHEDULES = [
  {
    id: "r1",
    codigo: "R1",
    dia: "Terça-feira",
    horario: "18:00 às 19:30",
    duracao: "1h30",
    materia: "Redação",
    turma: "R1 - Redação",
  },
  {
    id: "r2",
    codigo: "R2",
    dia: "Terça-feira",
    horario: "19:30 às 21:00",
    duracao: "1h30",
    materia: "Redação",
    turma: "R2 - Redação",
  },
  {
    id: "r3",
    codigo: "R3",
    dia: "Sábado",
    horario: "11:00 às 12:30",
    duracao: "1h30",
    materia: "Redação",
    turma: "R3 - Redação",
  },
  {
    id: "m1",
    codigo: "M1",
    dia: "Quarta-feira",
    horario: "18:40 às 20:10",
    duracao: "1h30",
    materia: "Matemática Específica",
    turma: "M1 - Matemática",
  },
  {
    id: "ex1",
    codigo: "Ex1",
    dia: "Segunda-feira",
    horario: "19:00 às 22:00",
    duracao: "3h",
    materia: "Química, Física e Matemática",
    turma: "Ex1 - Exatas",
  },
] as const;

export const PRICING = [
  {
    id: "redacao",
    nome: "Redação",
    valor: 300,
    modulo: "módulo",
    parcelamento: "até 10x",
  },
  {
    id: "matematica",
    nome: "Matemática",
    valor: 250,
    modulo: "módulo",
    parcelamento: "até 10x",
  },
  {
    id: "exatas",
    nome: "Exatas",
    valor: 350,
    modulo: "módulo",
    parcelamento: "até 10x",
  },
] as const;

export const CATEGORIES = [
  {
    id: "redacao",
    label: "Redação",
    anchor: "#redacao",
    icon: "PenTool",
    enabled: true,
  },
  {
    id: "gramatica",
    label: "Gramática",
    anchor: "#gramatica",
    icon: "BookOpen",
    enabled: true,
  },
  {
    id: "matematica",
    label: "Matemática",
    anchor: "#matematica",
    icon: "Calculator",
    enabled: true,
  },
  {
    id: "exatas",
    label: "Exatas",
    anchor: "#exatas",
    icon: "Atom",
    enabled: true,
  },
  {
    id: "resultados",
    label: "Resultados",
    anchor: "#resultados",
    icon: "Trophy",
    enabled: true,
  },
] as const;

export const LINKS_CONFIG = [
  {
    id: "whatsapp-matricula",
    label: "Fale conosco",
    description: "Tire suas dúvidas e faça sua matrícula agora mesmo",
    icon: "MessageCircle",
    badge: null,
    highlight: true,
    href: `https://wa.me/${CONTACT.whatsapp.matricula.phone}?text=${encodeURIComponent(CONTACT.whatsapp.matricula.message)}`,
    sectionAnchor: null,
    enabled: true,
    type: "whatsapp" as const,
  },
  {
    id: "horarios",
    label: "Horários e Turmas",
    description: "Escolha o melhor horário para você",
    icon: "Calendar",
    badge: null,
    highlight: false,
    href: "/horarios",
    sectionAnchor: null,
    enabled: true,
    type: "internal" as const,
  },
  {
    id: "valores",
    label: "Planos e Valores",
    description: "Módulos por turma • Parcelamento em até 10x",
    icon: "CreditCard",
    badge: null,
    highlight: false,
    href: "/valores",
    sectionAnchor: null,
    enabled: true,
    type: "internal" as const,
  },
  {
    id: "site",
    label: "Conheça nosso site",
    description: "Descubra nosso método completo, competências ENEM (C1-C5), depoimentos de alunos aprovados e muito mais",
    icon: "Globe",
    badge: null,
    highlight: false,
    href: "/site",
    sectionAnchor: null,
    enabled: true,
    type: "internal" as const,
  },
] as const;

export const BENEFITS = {
  redacao: [
    "Correção detalhada e comentada seguindo critérios C1–C5 do ENEM",
    "Feedback específico por trecho da redação",
    "Plano de melhoria personalizado para cada aluno",
  ],
  geral: [
    "Correção detalhada e comentada por professores especializados",
    "Acompanhamento contínuo do seu progresso",
    "Método prático e direto, focado em resultados",
  ],
} as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Matrícula",
    description: "Entre em contato via WhatsApp e escolha a turma ideal para você",
  },
  {
    step: 2,
    title: "Aulas Presenciais",
    description: "Participe de aulas presenciais em Goiânia com metodologia comprovada",
  },
  {
    step: 3,
    title: "Treinos Práticos",
    description: "Pratique com temas reais do ENEM e desenvolva sua escrita",
  },
  {
    step: 4,
    title: "Correção Detalhada",
    description: "Receba correção completa seguindo todos os critérios C1–C5 do ENEM",
  },
  {
    step: 5,
    title: "Evolução Contínua",
    description: "Acompanhe seu progresso e evolua até alcançar a nota máxima",
  },
] as const;

export const COMPETENCIAS = [
  {
    id: "c1",
    titulo: "C1: Domínio da Escrita Formal",
    descricao: "Avalia seu domínio da norma culta da língua portuguesa, incluindo aspectos gramaticais, ortográficos e de pontuação. Trabalhamos para eliminar erros e aprimorar sua escrita formal.",
    icon: "PenTool",
  },
  {
    id: "c2",
    titulo: "C2: Compreensão e Conhecimento",
    descricao: "Avalia sua capacidade de compreender o tema proposto e demonstrar conhecimento sobre ele, utilizando informações dos textos de apoio e seu repertório sociocultural.",
    icon: "BookOpen",
  },
  {
    id: "c3",
    titulo: "C3: Organização e Interpretação",
    descricao: "Avalia a organização das ideias em parágrafos bem estruturados e a interpretação adequada dos textos de apoio, garantindo uma argumentação clara e objetiva.",
    icon: "Workflow",
  },
  {
    id: "c4",
    titulo: "C4: Coesão e Coerência",
    descricao: "Avalia a coesão textual (uso adequado de conectivos) e a coerência argumentativa, garantindo que suas ideias estejam bem conectadas e façam sentido.",
    icon: "Link",
  },
  {
    id: "c5",
    titulo: "C5: Proposta de Intervenção",
    descricao: "Avalia sua proposta de solução para o problema apresentado, verificando se ela é detalhada, viável e respeita os direitos humanos.",
    icon: "Lightbulb",
  },
] as const;

export const TESTIMONIALS = [
  {
    id: "1",
    nome: "Maria Silva",
    texto: "Consegui nota 960 na redação do ENEM! O método é incrível e os professores são muito dedicados. A correção detalhada fez toda a diferença!",
    nota: 960,
  },
  {
    id: "2",
    nome: "João Santos",
    texto: "A correção detalhada me ajudou a identificar exatamente onde melhorar. Evolui muito durante o curso e recomendo para todos que querem uma nota alta.",
    nota: 940,
  },
  {
    id: "3",
    nome: "Ana Costa",
    texto: "Professores excelentes e acompanhamento personalizado. O curso superou minhas expectativas e me deu a confiança necessária para o ENEM. Recomendo!",
    nota: 980,
  },
] as const;

export const MATERIALS = [
  {
    id: "1",
    titulo: "Material Gratuito",
    descricao: "Apostilas, exercícios e conteúdos exclusivos para você começar seus estudos",
    href: "#",
    enabled: true,
  },
  {
    id: "2",
    titulo: "Avaliação Rápida",
    descricao: "Teste seu nível de escrita e descubra em quais competências você precisa focar",
    href: "#",
    enabled: true,
  },
] as const;

export const FAQ = [
  {
    id: "1",
    pergunta: "Como funciona a correção das redações?",
    resposta: "Nossa correção segue rigorosamente os critérios oficiais do ENEM (C1–C5). Cada redação recebe feedback detalhado por trecho, com comentários específicos sobre o que melhorar e um plano de melhoria personalizado para cada aluno.",
  },
  {
    id: "2",
    pergunta: "Preciso ter experiência prévia em redação?",
    resposta: "Não! Nosso método é adaptado para todos os níveis. Trabalhamos desde alunos iniciantes até aqueles que já têm uma boa base e querem aprimorar para alcançar a nota máxima.",
  },
  {
    id: "3",
    pergunta: "Como são as aulas?",
    resposta: "As aulas são 100% presenciais em Goiânia, com turmas pequenas para garantir acompanhamento individualizado. Nossos professores são especializados e utilizam uma metodologia comprovada para o sucesso no ENEM.",
  },
  {
    id: "4",
    pergunta: "Qual a duração do curso?",
    resposta: "Oferecemos módulos flexíveis que se adaptam à sua necessidade. Você pode escolher entre diferentes planos e turmas, permitindo que organize seus estudos da melhor forma.",
  },
  {
    id: "5",
    pergunta: "Posso parcelar o pagamento?",
    resposta: "Sim! Oferecemos parcelamento em até 10x sem juros. Entre em contato via WhatsApp para conhecer todas as condições e formas de pagamento disponíveis.",
  },
  {
    id: "6",
    pergunta: "Onde fica localizado o curso?",
    resposta: "Estamos localizados na Rua F QD 159 LT 1, Sala 1, no bairro Parque Tremendão, em Goiânia - GO. CEP: 74.475-060. Você pode abrir a localização no Google Maps clicando no botão disponível.",
  },
] as const;

export const PROMO = {
  active: false,
  text: "Promoção especial!",
  countdownTo: null,
} as const;
