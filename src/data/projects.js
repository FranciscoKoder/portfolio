// Projetos em destaque. A ordem aqui é a ordem na página.
// Números em `metrics` vêm de medições reais documentadas nos repositórios.

export const projects = [
  {
    id: 'sca-ota',
    title: 'Controle de acesso RFID com atualização OTA',
    category: 'Embarcado + Web',
    year: '2026',
    summary:
      'Controladora de acesso em ESP32 que valida tags RFID por uma API REST e continua funcionando offline com cache em flash. Um painel web atualiza o firmware em campo, sem cabo e sem IDE.',
    highlights: [
      'Modo online/offline com troca automática e cache local de tags na memória flash',
      'Dois canais de OTA: ArduinoOTA para devs e endpoint HTTP com Basic Auth para o painel',
      'Tarefas FreeRTOS no core 0 cuidam de som e LED sem travar o loop principal',
      'Painel React que detecta a placa na rede e mostra o progresso real do upload',
    ],
    metrics: [
      { value: '3', label: 'camadas: firmware, API e web' },
      { value: '2', label: 'canais de OTA' },
    ],
    stack: ['C++', 'ESP32', 'FreeRTOS', 'PlatformIO', 'REST', 'React', 'MUI'],
    links: [
      { label: 'Firmware SCA', href: 'https://github.com/SGQ-NUTES/sca-sqg' },
      { label: 'Firmware OTA', href: 'https://github.com/FranciscoKoder/OTA-Server-AP' },
      { label: 'Painel OTA', href: 'https://github.com/FranciscoKoder/Admin-blink-OTA' },
    ],
  },
  {
    id: 'wagering',
    title: 'Distributed Wagering Processor',
    category: 'Backend distribuído',
    year: '2026',
    summary:
      'Serviço financeiro que processa apostas de vários provedores por HTTP e SQS e mantém o saldo correto mesmo com mensagens duplicadas, fora de ordem ou concorrentes entre instâncias.',
    highlights: [
      'Idempotência, transactional outbox e DLQ para reprocessar com segurança',
      'Concorrência resolvida com lock de linha no PostgreSQL',
      'Teste de carga com p50/p95/p99 e trade-offs documentados em ARCHITECTURE.md',
      'Docker Compose sobe PostgreSQL, LocalStack (SQS) e 3 réplicas da aplicação',
    ],
    metrics: [
      { value: '1.082', label: 'req/s no teste de carga' },
      { value: '0', label: 'erros 5xx' },
      { value: '0', label: 'saldos inconsistentes' },
    ],
    stack: ['TypeScript', 'NestJS', 'Bun', 'PostgreSQL', 'MikroORM', 'AWS SQS', 'Docker'],
    links: [{ label: 'Código', href: 'https://github.com/FranciscoKoder/backend-challenge' }],
  },
  {
    id: 'sgf',
    title: 'SGF — Sistema de Gestão de Fluxos',
    category: 'Full stack · em produção',
    year: '2026',
    summary:
      'Sistema do SGQ do NUTES/UEPB que digitaliza os procedimentos da qualidade: fluxos com raias por setor, checklists de formulários e controle de quem pode executar cada etapa.',
    highlights: [
      'Procedimentos exibidos como diagramas de atividades com raias por setor',
      'Permissões por papel e setor aplicadas no próprio banco com Row Level Security',
      'Roadmap em fases, com decisões técnicas registradas num cofre do Obsidian',
    ],
    metrics: [],
    stack: ['React', 'Vite', 'Supabase', 'PostgreSQL', 'RLS', 'Vercel'],
    links: [
      { label: 'Código', href: 'https://github.com/SGQ-NUTES/SGF-Sistema_de_Gest-o_de_Fluxos' },
    ],
  },
  {
    id: 'manualbot',
    title: 'ManualBot',
    category: 'IA aplicada · RAG',
    year: '2026',
    status: 'Em andamento',
    summary:
      'Busca em linguagem natural nos manuais técnicos do ESP32. As respostas trazem os trechos dos documentos originais, com fonte e página.',
    highlights: [
      'Ingestão de PDFs com detecção de páginas escaneadas, esquemáticos e tabelas',
      'Embeddings locais (MiniLM) e banco vetorial persistente com ChromaDB',
      'Interface em Streamlit para busca semântica e inspeção do banco',
    ],
    metrics: [],
    stack: ['Python', 'PyMuPDF', 'sentence-transformers', 'ChromaDB', 'Streamlit'],
    links: [{ label: 'Código', href: 'https://github.com/FranciscoKoder/ManualBot' }],
  },
]
