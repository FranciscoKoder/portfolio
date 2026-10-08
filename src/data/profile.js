// Dados pessoais e textos do portfólio. Edite aqui — os componentes só leem.

export const profile = {
  name: 'Vitor Francisco',
  fullName: 'Vitor Francisco F. Souza',
  initials: 'VF',
  role: 'Desenvolvedor Full Stack',
  focus: 'Sistemas embarcados & APIs REST',
  location: 'Paraíba, Brasil',
  availability: 'Aberto a oportunidades',
  email: 'vitorfariasdev@gmail.com',
  links: {
    github: 'https://github.com/FranciscoKoder',
    linkedin: 'https://www.linkedin.com/in/vitor-fariasprogram/',
  },

  headline: 'Do firmware à interface.',
  subheadline:
    'Desenvolvo o caminho inteiro: o código que roda no ESP32, a API que conversa com ele e o painel que alguém usa no dia a dia.',

  // Bloco "datasheet" do hero
  spec: [
    { label: 'Foco', value: 'Embarcados + APIs REST' },
    { label: 'Stack', value: 'C++ · TypeScript · React' },
    { label: 'Atual', value: 'NUTES/UEPB, desde 2023' },
    { label: 'Estudando', value: 'DevOps · CI/CD' },
  ],

  about: [
    'Sou bacharelando em Ciência da Computação na UEPB e desenvolvedor no NUTES, onde trabalho com dispositivos e software para a área da saúde.',
    'Meu terreno favorito é a fronteira entre hardware e software. Gosto de projetos em que uma placa precisa falar com uma API, a API precisa ser confiável e, no fim, uma pessoa sem conhecimento técnico precisa operar tudo por uma interface clara.',
    'Uso IA como ferramenta de engenharia no dia a dia: agentes revisores, documentação viva e decisões registradas. Ela acelera; entender cada parte continua sendo trabalho meu.',
    'Hoje estou me aprofundando em DevOps: containers, pipelines de CI/CD e deploy, para levar meus projetos do repositório até a produção com o mesmo cuidado.',
  ],

  experience: [
    {
      org: 'NUTES — UEPB',
      role: 'Desenvolvedor (estágio)',
      period: '2023 — atual',
      description:
        'Desenvolvimento de dispositivos e software para a saúde, integrando sistemas embarcados e interfaces web. Responsável pelo SGF, sistema de gestão de fluxos do Sistema de Gestão da Qualidade.',
    },
  ],

  education: [
    {
      org: 'Universidade Estadual da Paraíba',
      role: 'Bacharelado em Ciência da Computação',
      period: '2021 — atual',
      description: 'TCC em andamento: modelos analíticos e preditivos para gêmeos digitais.',
    },
    {
      org: 'ECIT Bráulio Maia Júnior',
      role: 'Ensino Médio Técnico',
      period: 'Concluído em 2021',
    },
  ],
}

export const skills = [
  {
    group: 'Embarcados',
    items: ['C / C++', 'ESP32', 'FreeRTOS', 'PlatformIO', 'RFID', 'OTA'],
  },
  {
    group: 'Backend & APIs',
    items: ['TypeScript', 'NestJS', 'Node.js / Bun', 'PHP', 'REST', 'PostgreSQL', 'Supabase'],
  },
  {
    group: 'Frontend',
    items: ['React', 'Vite', 'Vue / Quasar', 'Material UI', 'Tailwind'],
  },
  {
    group: 'DevOps & Infra',
    note: 'em estudo',
    items: ['Docker', 'Docker Compose', 'AWS SQS (LocalStack)', 'GitHub Actions', 'Vercel', 'Linux'],
  },
  {
    group: 'IA & Dados',
    items: ['Python', 'RAG', 'Embeddings', 'ChromaDB', 'Streamlit'],
  },
]
