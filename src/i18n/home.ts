import type { Locale } from './locales';

// Conteúdo provisório, baseado no protótipo v7. Os números e os casos de uso ainda estão por confirmar.

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
    manual: { label: string; value: string };
    symhive: { label: string; value: string };
    weeks: string;
    source: string;
  };
  stats: { label: string; items: { value: string; label: string }[] };
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
    title: 'Deixe de esperar 40 semanas por uma decisão.',
    manual: { label: 'Processo manual', value: '15–40 semanas' },
    symhive: { label: 'Com a SymHive', value: '4–8 semanas' },
    weeks: 'semanas',
    source: 'Estimativas de estudos anteriores e projetos-piloto.',
  },
  stats: {
    label: 'Principais resultados',
    items: [
      { value: '−47% a −80%', label: 'no tempo de decisão e implementação' },
      { value: '~70%', label: 'menos custo de decisão' },
      { value: '+15–25%', label: 'de ganho de eficiência' },
      { value: '4', label: 'casos de uso industriais: Adira, Solzaima, CEI, Solancis' },
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
    title: 'Stop waiting 40 weeks for a decision.',
    manual: { label: 'Manual process', value: '15–40 weeks' },
    symhive: { label: 'With SymHive', value: '4–8 weeks' },
    weeks: 'weeks',
    source: 'Estimates from previous studies and pilot projects.',
  },
  stats: {
    label: 'Key results',
    items: [
      { value: '−47% to −80%', label: 'decision and implementation time' },
      { value: '~70%', label: 'lower decision cost' },
      { value: '+15–25%', label: 'efficiency gain' },
      { value: '4', label: 'industrial use cases: Adira, Solzaima, CEI, Solancis' },
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
