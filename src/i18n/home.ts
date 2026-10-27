import type { Locale } from './locales';

// Conteúdo provisório, baseado no protótipo v7. Os números e os casos de uso ainda estão por confirmar.
// `simulator` e `steps` já não aparecem na página principal; são usados pela página Produto.

export interface HomeContent {
  meta: { title: string; description: string };
  hero: {
    titleAmber: string;
    titleCyan: string;
    titleRest: string;
    lead: string;
    illustrationLabel: string;
  };
  /** Faixa discreta logo abaixo do hero, com factos verificáveis. */
  credentials: { label: string; items: string[] };
  pain: {
    label: string;
    statement: [string, string];
    lead: string;
    questionsTitle: string;
    /** Cada pergunta traz a resposta que a SymHive dá. */
    questions: { question: string; answer: string }[];
    /** Etiqueta de cada pergunta na consola. */
    unanswered: string;
    /** Início, em destaque, de cada linha de resposta. */
    answerLabel: string;
    problemsTitle: string;
    problems: string[];
  };
  solution: {
    title: string;
    description: string;
    inputsLabel: string;
    inputs: string[];
    core: { title: string; caption: string };
    outputsLabel: string;
    outputs: { title: string; description: string }[];
    /** Opcional: primeira entrada, a âmbar (a decisão a tomar). Sem ela, o esquema começa só nos sistemas. */
    question?: { title: string; subtitle?: string };
    /** Opcional: quarta coluna com a decisão validada. Sem ela, o esquema termina nas saídas. */
    decision?: { label: string; title: string };
    /** Link discreto no fim da secção, para a página Produto. */
    more: string;
  };
  simulator: {
    /** Etiqueta por cima do título: indica que é um exemplo do que a simulação faz. */
    badge: string;
    title: string;
    description: string;
    windowTitle: string;
    live: string;
    canvasLabel: string;
    nodes: { source: [string, string]; queue: [string, string]; processor: string; packing: [string, string] };
    agvs: { label: string; aria: string };
    stations: { label: string; aria: string; one: string; many: string };
    kpis: { throughput: string; utilization: string; bottleneck: string };
    unitsPerHour: string;
    vsToday: string;
    bottlenecks: { stations: string; fleet: string };
    note: string;
  };
  impact: {
    title: string;
    /** Semanas de cada processo: a barra da SymHive anima do valor manual até ao seu. */
    manual: { label: string; weeks: number };
    symhive: { label: string; weeks: number };
    weeks: string;
    source: string;
    /** Link discreto no fim da secção, para os casos de uso. */
    more: string;
  };
  stats: {
    label: string;
    /**
     * value é o ganho em % face à situação atual, mostrado como prefix + value + '%'.
     * title é o benefício e label a frase curta por baixo.
     */
    items: { prefix: string; value: number; title: string; label: string }[];
  };
  steps: { title: string; items: { title: string; description: string }[] };
}

const pt: HomeContent = {
  meta: {
    title: 'SymHive — Simule o futuro da sua fábrica',
    description:
      'A SymHive cria modelos de simulação automaticamente a partir dos dados de produção para testar cenários e apoiar decisões em produção e logística.',
  },
  hero: {
    titleAmber: 'Simule o futuro da sua',
    titleCyan: 'fábrica no digital.',
    titleRest: 'Implemente a decisão no terreno.',
    lead: 'A SymHive torna a simulação mais rápida e fácil de escalar, gerando automaticamente modelos de sistemas industriais complexos a partir dos seus dados de produção e devolvendo KPIs que pode defender.',
    illustrationLabel: 'Esquema de uma fábrica com braço robótico, tapete transportador, armazém e AGV',
  },
  credentials: {
    label: 'Credenciais',
    items: [
      'Validada em 4 ambientes industriais de produção de máquinas',
      'Patente pendente na geração automática de modelos',
      'Com o apoio do INESC TEC',
    ],
  },
  pain: {
    label: 'O problema',
    statement: ['Mudar a operação custa caro.', 'Descobrir que foi a decisão errada custa muito mais.'],
    lead: 'Cada mudança na operação começa com uma pergunta, e a simulação pode responder-lhe. O problema é que um modelo feito à mão demora meses, por isso as decisões continuam a ser tomadas com folhas de cálculo e intuição. A SymHive muda isso.',
    questionsTitle: 'Perguntas que hoje ficam sem resposta',
    questions: [
      { question: 'E se a procura aumentar 20% no próximo trimestre?', answer: 'capacidade, gargalos e recursos necessários para cada cenário de procura.' },
      { question: 'Precisamos de mais um AGV ou de mais um posto de trabalho?', answer: 'débito e utilização de cada opção, comparados lado a lado.' },
      { question: 'O novo layout resolve mesmo o gargalo?', answer: 'gargalo, filas e stock intermédio, antes e depois da mudança.' },
      { question: 'Em quanto tempo se paga este investimento?', answer: 'estimativa de retorno de cada alternativa, antes de investir.' },
    ],
    unanswered: 'Hoje: sem resposta',
    answerLabel: 'Com a SymHive:',
    problemsTitle: 'Problemas típicos',
    problems: [
      'Estudos de simulação que demoram meses',
      'Investimentos aprovados sem prova prévia',
      'Gargalos que só se descobrem no terreno',
      'Modelos que ficam desatualizados após um projeto',
    ],
  },
  solution: {
    title: 'Os seus dados entram. Decisões fundamentadas saem.',
    description: 'A SymHive liga os dados que a sua empresa já tem e devolve cenários comparáveis.',
    inputsLabel: 'Entrada',
    question: { title: 'Decisão a tomar' },
    inputs: ['ERP / MES', 'Máquinas e sensores', 'Layouts CAD', 'Folhas de cálculo'],
    core: { title: 'SymHive', caption: 'Geração automática de modelos' },
    outputsLabel: 'Saída',
    outputs: [
      { title: 'Dados estruturados', description: 'Um modelo de dados comum.' },
      { title: 'Simulação gerada', description: 'Construída automaticamente, em low code.' },
      { title: 'Cenários comparados', description: 'Alternativas avaliadas com os mesmos critérios.' },
      { title: 'KPIs estruturados', description: 'Indicadores para defender cada decisão.' },
      { title: 'Interoperabilidade', description: 'Resultados exportáveis para os seus sistemas.' },
    ],
    more: 'Conhecer o produto',
  },
  simulator: {
    badge: 'Exemplo do que a simulação faz',
    title: 'Experimente: acrescente um AGV e veja o que acontece à linha',
    description:
      'Acrescente AGVs ou postos de trabalho e veja a produtividade, a utilização da frota e o gargalo atualizarem-se no momento.',
    windowTitle: 'Linha 3 · Cenário B',
    live: 'Simulação ao vivo',
    canvasLabel: 'Linha de produção simulada com AGVs',
    nodes: { source: ['Origem', 'cnc_03'], queue: ['Fila', 'cap. 12'], processor: 'Processador', packing: ['Embalagem', 'fim de linha'] },
    agvs: { label: 'AGVs', aria: 'Número de AGVs' },
    stations: { label: 'Postos de trabalho', aria: 'Número de postos de trabalho', one: 'posto', many: 'postos' },
    kpis: { throughput: 'Produtividade', utilization: 'Utilização da frota', bottleneck: 'Gargalo' },
    unitsPerHour: 'unid./h',
    vsToday: 'face a hoje',
    bottlenecks: { stations: 'Postos de trabalho', fleet: 'Frota de AGVs' },
    note: 'Dados ilustrativos. O modelo real é gerado a partir dos seus dados de produção.',
  },
  impact: {
    title: 'Deixe de esperar 30 semanas por uma decisão',
    manual: { label: 'Processo manual', weeks: 30 },
    symhive: { label: 'Com a SymHive', weeks: 8 },
    weeks: 'semanas',
    more: 'Ver casos de uso',
    source: 'Estimativas com base em estudos de simulação anteriores e projetos-piloto da equipa no INESC TEC. Os valores variam consoante a complexidade do projeto.',
  },
  stats: {
    label: 'Principais resultados',
    items: [
      { prefix: '−', value: 50, title: 'Pelo menos metade do tempo', label: 'do estudo à implementação' },
      { prefix: '−', value: 70, title: 'Decisões mais baratas', label: 'sem estudos manuais longos' },
      { prefix: '+', value: 20, title: 'Operação mais eficiente', label: 'com o mesmo sistema real' },
    ],
  },
  steps: {
    title: 'Dos seus dados a uma decisão, em quatro passos',
    items: [
      { title: 'Ligar', description: 'Descreva o seu sistema, ligue os seus dados e defina a decisão que precisa de tomar.' },
      { title: 'Gerar', description: 'A simulação é gerada automaticamente a partir de uma biblioteca de componentes em crescimento.' },
      { title: 'Testar', description: 'Corra experiências e explore cenários alternativos com os mesmos critérios.' },
      { title: 'Decidir', description: 'Compare resultados e transforme a simulação em conclusões acionáveis.' },
    ],
  },
};

const en: HomeContent = {
  meta: {
    title: 'SymHive — Simulate your factory’s future',
    description:
      'SymHive builds simulation models automatically from production data to test scenarios and support decisions in manufacturing and logistics.',
  },
  hero: {
    titleAmber: 'Simulate your',
    titleCyan: 'factory’s future digitally.',
    titleRest: 'Implement the decision on the shop floor.',
    lead: 'SymHive makes simulation faster and easier to scale, automatically generating models of complex industrial systems from your production data and returning KPIs you can defend.',
    illustrationLabel: 'Wireframe of a factory with a robot arm, conveyor belt, warehouse and AGV',
  },
  credentials: {
    label: 'Credentials',
    items: [
      'Validated in 4 industrial environments in machine manufacturing',
      'Patent pending on automatic model generation',
      'Backed by INESC TEC',
    ],
  },
  pain: {
    label: 'The problem',
    statement: ['Changing the operation is expensive.', 'Finding out it was the wrong call costs far more.'],
    lead: 'Every change to the operation starts with a question, and simulation can answer it. The problem is that a model built by hand takes months, so decisions are still made with spreadsheets and gut feeling. SymHive changes that.',
    questionsTitle: 'Questions left unanswered today',
    questions: [
      { question: 'What if demand grows 20% next quarter?', answer: 'capacity, bottlenecks and resources needed for each demand scenario.' },
      { question: 'Do we need one more AGV or one more workstation?', answer: 'throughput and utilisation of each option, side by side.' },
      { question: 'Will the new layout really fix the bottleneck?', answer: 'bottleneck, queues and work-in-progress, before and after the change.' },
      { question: 'How long until this investment pays off?', answer: 'estimated payback for each alternative, before you invest.' },
    ],
    unanswered: 'Today: unanswered',
    answerLabel: 'With SymHive:',
    problemsTitle: 'Typical problems',
    problems: [
      'Simulation studies that take months',
      'Investments approved without prior proof',
      'Bottlenecks only discovered on the shop floor',
      'Models that go stale after a single project',
    ],
  },
  solution: {
    title: 'Your data goes in. Evidence-based decisions come out.',
    description: 'SymHive connects the data your company already has and returns comparable scenarios.',
    inputsLabel: 'Input',
    question: { title: 'Decision to make' },
    inputs: ['ERP / MES', 'Machines and sensors', 'CAD layouts', 'Spreadsheets'],
    core: { title: 'SymHive', caption: 'Automatic model generation' },
    outputsLabel: 'Output',
    outputs: [
      { title: 'Structured data', description: 'One common data model.' },
      { title: 'Generated simulation', description: 'Built automatically, with low code.' },
      { title: 'Compared scenarios', description: 'Alternatives assessed with the same criteria.' },
      { title: 'Structured KPIs', description: 'Indicators to defend every decision.' },
      { title: 'Interoperability', description: 'Results you can export to your systems.' },
    ],
    more: 'Explore the product',
  },
  simulator: {
    badge: 'An example of what simulation does',
    title: 'Try it: add an AGV and see what happens to the line',
    description: 'Add AGVs or processing stations and see throughput, fleet utilization and the bottleneck update instantly.',
    windowTitle: 'Line 3 · Scenario B',
    live: 'Live simulation',
    canvasLabel: 'Simulated production line with AGVs',
    nodes: { source: ['Source', 'cnc_03'], queue: ['Queue', 'cap. 12'], processor: 'Processor', packing: ['Packing', 'line end'] },
    agvs: { label: 'AGVs', aria: 'Number of AGVs' },
    stations: { label: 'Processing stations', aria: 'Number of processing stations', one: 'station', many: 'stations' },
    kpis: { throughput: 'Throughput', utilization: 'Fleet utilization', bottleneck: 'Bottleneck' },
    unitsPerHour: 'units/h',
    vsToday: 'vs today',
    bottlenecks: { stations: 'Processing stations', fleet: 'AGV fleet' },
    note: 'Illustrative data. The real model is generated from your own production data.',
  },
  impact: {
    title: 'Stop waiting 30 weeks for a decision',
    manual: { label: 'Manual process', weeks: 30 },
    symhive: { label: 'With SymHive', weeks: 8 },
    weeks: 'weeks',
    more: 'See use cases',
    source: 'Estimates based on previous simulation studies and pilot projects by the team at INESC TEC. Values vary depending on project complexity.',
  },
  stats: {
    label: 'Key results',
    items: [
      { prefix: '−', value: 50, title: 'At least half the time', label: 'from study to implementation' },
      { prefix: '−', value: 70, title: 'Cheaper decisions', label: 'without long manual studies' },
      { prefix: '+', value: 20, title: 'A more efficient operation', label: 'with the same real system' },
    ],
  },
  steps: {
    title: 'From your data to a decision, in four steps',
    items: [
      { title: 'Connect', description: 'Describe your system, connect your data and define the decision you need to make.' },
      { title: 'Generate', description: 'The simulation is generated automatically from a growing component library.' },
      { title: 'Test', description: 'Run experiments and explore alternative scenarios with the same criteria.' },
      { title: 'Decide', description: 'Compare outcomes and turn simulation results into actionable insights.' },
    ],
  },
};

export const homeContent: Record<Locale, HomeContent> = { pt, en };
