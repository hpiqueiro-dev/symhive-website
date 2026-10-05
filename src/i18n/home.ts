import type { Locale } from './locales';

// Conteúdo provisório, baseado no protótipo v7. Os números e os casos de uso ainda estão por confirmar.
// `simulator` e `steps` já não aparecem na página principal; são usados pela página Produto.

export interface HomeContent {
  meta: { title: string; description: string };
  hero: {
    badge: string;
    titleAmber: string;
    titleCyan: string;
    titleRest: string;
    lead: string;
    illustrationLabel: string;
  };
  pain: {
    label: string;
    statement: [string, string];
    lead: string;
    questionsTitle: string;
    questions: string[];
    /** Etiqueta de cada pergunta na consola. */
    unanswered: string;
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
    /** Link discreto no fim da secção, para a página Produto. */
    more: string;
  };
  simulator: {
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
    /** Link discreto no fim da secção, para os casos de estudo. */
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
    title: 'SymHive — Da fábrica real à fábrica digital',
    description:
      'A SymHive cria modelos de simulação automaticamente a partir dos dados de produção para testar cenários e apoiar decisões em produção e logística.',
  },
  hero: {
    badge: 'Com tecnologia INESC TEC',
    titleAmber: 'Da sua fábrica real',
    titleCyan: 'à fábrica digital.',
    titleRest: 'Uma só Hive.',
    lead: 'A SymHive constrói o modelo de simulação a partir dos seus dados de produção, testa os cenários e devolve KPIs que pode defender.',
    illustrationLabel: 'Esquema de uma fábrica com braço robótico, tapete transportador, armazém e AGV',
  },
  pain: {
    label: 'O problema',
    statement: ['Mudar uma linha custa caro.', 'Descobrir que foi a decisão errada custa muito mais.'],
    lead: 'Layouts, equipamentos e planos são decididos com folhas de cálculo e intuição, porque construir um modelo de simulação à mão demora meses.',
    questionsTitle: 'Perguntas que ficam sem resposta',
    questions: [
      'E se a procura aumentar 20% no próximo trimestre?',
      'Precisamos de mais um AGV ou de mais um posto de trabalho?',
      'O novo layout resolve mesmo o gargalo?',
      'Em quanto tempo se paga este investimento?',
    ],
    unanswered: 'sem resposta',
    problemsTitle: 'Problemas típicos',
    problems: [
      'Estudos de simulação que demoram meses',
      'Investimentos aprovados sem prova prévia',
      'Gargalos que só se descobrem no terreno',
      'Modelos que ficam desatualizados após um projeto',
    ],
  },
  solution: {
    title: 'Os seus dados entram. Decisões verificadas saem.',
    description: 'A SymHive liga as fontes que já existem na operação e devolve resultados prontos a usar.',
    inputsLabel: 'Entrada',
    inputs: ['ERP', 'MES', 'Máquinas e sensores', 'Layouts CAD', 'Folhas de cálculo'],
    core: { title: 'SymHive', caption: 'Geração automática de modelos' },
    outputsLabel: 'Saída',
    outputs: [
      { title: 'Dados estruturados', description: 'Um modelo de dados comum e limpo.' },
      { title: 'Simulação gerada', description: 'Construída automaticamente, sem programação.' },
      { title: 'Cenários comparados', description: 'Alternativas avaliadas com os mesmos critérios.' },
      { title: 'KPIs e retorno', description: 'Indicadores para defender cada decisão.' },
      { title: 'Interoperabilidade', description: 'Resultados que voltam aos seus sistemas.' },
    ],
    more: 'Conhecer o produto',
  },
  simulator: {
    title: 'Mude a linha. Veja os KPIs a mudar.',
    description:
      'Acrescente AGVs ou postos de processamento e veja o débito, a utilização da frota e o gargalo atualizarem-se no momento.',
    windowTitle: 'Linha 3 · Cenário B',
    live: 'Simulação ao vivo',
    canvasLabel: 'Linha de produção simulada com AGVs',
    nodes: { source: ['Origem', 'cnc_03'], queue: ['Fila', 'cap. 12'], processor: 'Processador', packing: ['Embalagem', 'fim de linha'] },
    agvs: { label: 'AGVs', aria: 'Número de AGVs' },
    stations: { label: 'Postos de processamento', aria: 'Número de postos de processamento', one: 'posto', many: 'postos' },
    kpis: { throughput: 'Débito', utilization: 'Utilização da frota', bottleneck: 'Gargalo' },
    unitsPerHour: 'unid./h',
    vsToday: 'face a hoje',
    bottlenecks: { stations: 'Postos de processamento', fleet: 'Frota de AGVs' },
    note: 'Dados ilustrativos. O modelo real é gerado a partir dos seus dados de produção.',
  },
  impact: {
    title: 'Deixe de esperar 30 semanas por uma decisão.',
    manual: { label: 'Processo manual', weeks: 30 },
    symhive: { label: 'Com a SymHive', weeks: 8 },
    weeks: 'semanas',
    more: 'Ver casos de estudo',
    source: 'Valores aproximados, a partir de estimativas de estudos anteriores e projetos-piloto. Os valores podem mudar com base na complexidade do projeto.',
  },
  stats: {
    label: 'Principais resultados',
    items: [
      { prefix: '−', value: 50, title: 'Metade do tempo', label: 'para decidir e implementar' },
      { prefix: '−', value: 70, title: 'Decisões mais baratas', label: 'sem estudos manuais longos' },
      { prefix: '+', value: 20, title: 'Operação mais eficiente', label: 'com o mesmo sistema real' },
      { prefix: '', value: 100, title: 'Zero apostas no terreno', label: 'tudo testado antes de mudar' },
    ],
  },
  steps: {
    title: 'Dos seus dados a uma decisão, em quatro passos.',
    items: [
      { title: 'Ligue os seus dados', description: 'ERP, MES, layouts CAD e folhas de cálculo alimentam um modelo de dados comum.' },
      { title: 'O modelo constrói-se sozinho', description: 'A simulação é gerada automaticamente a partir de uma biblioteca de componentes em crescimento.' },
      { title: 'Simule e otimize', description: 'Teste cenários em layouts, frotas, buffers e planos de produção.' },
      { title: 'Decida com KPIs', description: 'Resultados estruturados mostram o retorno de cada opção.' },
    ],
  },
};

const en: HomeContent = {
  meta: {
    title: 'SymHive — From your real factory to a digital factory',
    description:
      'SymHive builds simulation models automatically from production data to test scenarios and support decisions in manufacturing and logistics.',
  },
  hero: {
    badge: 'Powered by INESC TEC',
    titleAmber: 'Your real factory',
    titleCyan: 'to a digital factory.',
    titleRest: 'One Hive.',
    lead: 'SymHive builds the simulation model from your production data, tests the scenarios and returns KPIs you can defend.',
    illustrationLabel: 'Wireframe of a factory with a robot arm, conveyor belt, warehouse and AGV',
  },
  pain: {
    label: 'The problem',
    statement: ['Changing a line is expensive.', 'Finding out it was the wrong call costs far more.'],
    lead: 'Layouts, equipment and plans are decided with spreadsheets and gut feeling, because building a simulation model by hand takes months.',
    questionsTitle: 'Questions left unanswered',
    questions: [
      'What if demand grows 20% next quarter?',
      'Do we need one more AGV or one more workstation?',
      'Will the new layout really fix the bottleneck?',
      'How long until this investment pays off?',
    ],
    unanswered: 'unanswered',
    problemsTitle: 'Typical problems',
    problems: [
      'Simulation studies that take months',
      'Investments approved without prior proof',
      'Bottlenecks only discovered on the shop floor',
      'Models that go stale after a single project',
    ],
  },
  solution: {
    title: 'Your data goes in. Verified decisions come out.',
    description: 'SymHive connects the sources your operation already has and returns ready-to-use results.',
    inputsLabel: 'Input',
    inputs: ['ERP', 'MES', 'Machines and sensors', 'CAD layouts', 'Spreadsheets'],
    core: { title: 'SymHive', caption: 'Automatic model generation' },
    outputsLabel: 'Output',
    outputs: [
      { title: 'Structured data', description: 'One clean, common data model.' },
      { title: 'Generated simulation', description: 'Built automatically, no programming.' },
      { title: 'Compared scenarios', description: 'Alternatives assessed with the same criteria.' },
      { title: 'KPIs and ROI', description: 'Indicators to defend every decision.' },
      { title: 'Interoperability', description: 'Results that flow back into your systems.' },
    ],
    more: 'Explore the product',
  },
  simulator: {
    title: 'Change the line. Watch the KPIs move.',
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
    title: 'Stop waiting 30 weeks for a decision.',
    manual: { label: 'Manual process', weeks: 30 },
    symhive: { label: 'With SymHive', weeks: 8 },
    weeks: 'weeks',
    more: 'See case studies',
    source: 'Approximate values, based on estimates from previous studies and pilot projects. Values may change depending on project complexity.',
  },
  stats: {
    label: 'Key results',
    items: [
      { prefix: '−', value: 50, title: 'Half the time', label: 'to decide and implement' },
      { prefix: '−', value: 70, title: 'Cheaper decisions', label: 'without long manual studies' },
      { prefix: '+', value: 20, title: 'A more efficient operation', label: 'with the same real system' },
      { prefix: '', value: 100, title: 'No bets on the shop floor', label: 'everything tested before it changes' },
    ],
  },
  steps: {
    title: 'From your data to a decision, in four steps.',
    items: [
      { title: 'Connect your data', description: 'ERP, MES, CAD layouts and spreadsheets feed one common data model.' },
      { title: 'The model builds itself', description: 'The simulation is generated automatically from a growing component library.' },
      { title: 'Simulate and optimize', description: 'Run what-if scenarios on layouts, fleets, buffers and production plans.' },
      { title: 'Decide with KPIs', description: 'Structured outputs show the ROI behind each option.' },
    ],
  },
};

export const homeContent: Record<Locale, HomeContent> = { pt, en };
