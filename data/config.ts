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
  main: "A sua aprovação começa\ncom uma redação nota 1000.",
  subtitle: "Treino, correção (C1–C5) e acompanhamento.",
} as const;

export const SCHEDULES = [
  {
    id: "terca-1",
    dia: "Terça-feira",
    horario: "18h–19h30",
    duracao: "1h30",
    turma: "Turma 1",
  },
  {
    id: "terca-2",
    dia: "Terça-feira",
    horario: "19h30–21h",
    duracao: "1h30",
    turma: "Turma 2",
  },
  {
    id: "sabado",
    dia: "Sábado",
    horario: "11h–12h30",
    duracao: "1h30",
    turma: "Turma 3",
  },
] as const;

export const PRICING = [
  {
    id: "redacao",
    nome: "Redação",
    valor: 150,
    modulo: "módulo",
    parcelamento: "até 10x",
  },
  {
    id: "gramatica",
    nome: "Gramática",
    valor: 120,
    modulo: "módulo",
    parcelamento: "até 10x",
  },
  {
    id: "matematica",
    nome: "Matemática",
    valor: 130,
    modulo: "módulo",
    parcelamento: "até 10x",
  },
  {
    id: "exatas",
    nome: "Exatas",
    valor: 140,
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
    label: "Fale com a gente",
    description: "Matrícula e informações no WhatsApp",
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
    description: "Escolha o melhor horário",
    icon: "Calendar",
    badge: null,
    highlight: false,
    href: null,
    sectionAnchor: "#horarios",
    enabled: true,
    type: "anchor" as const,
  },
  {
    id: "valores",
    label: "Planos e Valores",
    description: "Módulos por turma • até 10x",
    icon: "CreditCard",
    badge: null,
    highlight: false,
    href: null,
    sectionAnchor: "#valores",
    enabled: true,
    type: "anchor" as const,
  },
  {
    id: "site",
    label: "Conhecer o site",
    description: "Saiba mais sobre nosso método",
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
    "Correção detalhada e comentada (C1–C5)",
    "Feedback por trecho",
    "Plano de melhoria personalizado",
  ],
  geral: [
    "Correção detalhada e comentada",
    "Acompanhamento contínuo",
    "Método prático e direto ao ponto",
  ],
} as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Matrícula",
    description: "Entre em contato e escolha sua turma",
  },
  {
    step: 2,
    title: "Aulas",
    description: "Aulas presenciais com metodologia comprovada",
  },
  {
    step: 3,
    title: "Treinos",
    description: "Pratique com temas reais do ENEM",
  },
  {
    step: 4,
    title: "Correção",
    description: "Correção detalhada seguindo critérios C1–C5",
  },
  {
    step: 5,
    title: "Evolução",
    description: "Acompanhe seu progresso até a nota máxima",
  },
] as const;

export const COMPETENCIAS = [
  {
    id: "c1",
    titulo: "C1: Domínio da Escrita Formal",
    descricao: "Avalia o seu domínio da norma culta da língua portuguesa, incluindo aspectos gramaticais, ortográficos e de pontuação.",
    icon: "PenTool",
  },
  {
    id: "c2",
    titulo: "C2: Compreensão e Conhecimento",
    descricao: "Avalia sua capacidade de compreender o tema e demonstrar conhecimento sobre ele.",
    icon: "BookOpen",
  },
  {
    id: "c3",
    titulo: "C3: Organização e Interpretação",
    descricao: "Avalia a organização das ideias e a interpretação dos textos de apoio.",
    icon: "Workflow",
  },
  {
    id: "c4",
    titulo: "C4: Coesão e Coerência",
    descricao: "Avalia a coesão textual e a coerência argumentativa.",
    icon: "Link",
  },
  {
    id: "c5",
    titulo: "C5: Proposta de Intervenção",
    descricao: "Avalia a proposta de solução para o problema apresentado.",
    icon: "Lightbulb",
  },
] as const;

export const TESTIMONIALS = [
  {
    id: "1",
    nome: "Maria Silva",
    texto: "Consegui nota 960 na redação do ENEM! O método é incrível.",
    nota: 960,
  },
  {
    id: "2",
    nome: "João Santos",
    texto: "A correção detalhada me ajudou a identificar exatamente onde melhorar.",
    nota: 940,
  },
  {
    id: "3",
    nome: "Ana Costa",
    texto: "Professores excelentes e acompanhamento personalizado. Recomendo!",
    nota: 980,
  },
] as const;

export const MATERIALS = [
  {
    id: "1",
    titulo: "Material gratuito",
    descricao: "Apostilas e exercícios",
    href: "#",
    enabled: true,
  },
  {
    id: "2",
    titulo: "Avaliação rápida",
    descricao: "Teste seu nível de escrita",
    href: "#",
    enabled: true,
  },
] as const;

export const FAQ = [
  {
    id: "1",
    pergunta: "Como funciona a correção?",
    resposta: "Nossa correção segue os critérios oficiais do ENEM (C1–C5), com feedback detalhado por trecho e plano de melhoria personalizado.",
  },
  {
    id: "2",
    pergunta: "Preciso ter experiência prévia?",
    resposta: "Não! Nosso método é adaptado para todos os níveis, desde iniciantes até quem quer aprimorar a nota.",
  },
  {
    id: "3",
    pergunta: "Como são as aulas?",
    resposta: "Aulas presenciais em Goiânia, com turmas pequenas para acompanhamento individualizado.",
  },
  {
    id: "4",
    pergunta: "Qual a duração do curso?",
    resposta: "Oferecemos módulos flexíveis. Você pode escolher o plano que melhor se adapta à sua necessidade.",
  },
  {
    id: "5",
    pergunta: "Posso parcelar?",
    resposta: "Sim! Oferecemos parcelamento em até 10x sem juros (consulte condições).",
  },
  {
    id: "6",
    pergunta: "Onde fica o curso?",
    resposta: "Rua F QD 159 LT 1, Sala 1, Parque Tremendão, Goiânia - GO. CEP: 74.475-060",
  },
] as const;

export const PROMO = {
  active: false,
  text: "Promoção especial!",
  countdownTo: null,
} as const;
