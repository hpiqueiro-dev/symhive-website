import type { HexItem, PageHeroContent, PageMeta } from './common';
import type { Locale } from './locales';

// Conteúdo provisório: estrutura no estilo v7, textos a rever. As fases do processo e o antes vs depois são propostas.

export type ProcessGroup = 'project' | 'subscription';

export interface ProductContent {
  meta: PageMeta;
  hero: PageHeroContent;
  preview: {
    /** Captura real da plataforma em public/ (ex.: 'images/platform.png'). Enquanto for null, mostra o mockup. */
    image: string | null;
    imageAlt: string;
    windowTitle: string;
    live: string;
    nav: string[];
    canvasTitle: string;
    nodes: string[];
    scenariosTitle: string;
    scenarios: { name: string; value: number; label: string; best?: boolean }[];
    kpis: { label: string; value: string }[];
    caption: string;
  };
  features: { title: string; description: string; items: HexItem[] };
  beforeAfter: {
    title: string;
    description: string;
    before: string;
    after: string;
    sliderLabel: string;
    rows: { label: string; before: string; after: string }[];
    note: string;
  };
  process: {
    title: string;
    description: string;
    groups: Record<ProcessGroup, string>;
    phases: { group: ProcessGroup; title: string; description: string }[];
    cta: { label: string; subject: string; pending: string };
  };
}

const pt: ProductContent = {
  meta: {
    title: 'Produto — SymHive',
    description: 'Como a SymHive transforma dados de produção em modelos de simulação, cenários e KPIs para decidir.',
  },
  hero: {
    badge: 'Produto',
    titleAmber: 'Uma plataforma.',
    titleCyan: 'Do dado à decisão.',
    lead: 'A SymHive liga os seus dados a um modelo de dados comum, gera a simulação automaticamente e devolve indicadores para comparar cada opção.',
  },
  preview: {
    image: null,
    imageAlt: 'Interface da plataforma SymHive',
    windowTitle: 'SymHive · Estúdio de cenários',
    live: 'Modelo sincronizado',
    nav: ['Modelos', 'Cenários', 'Resultados', 'Biblioteca', 'Dados'],
    canvasTitle: 'Linha 3 · Layout B',
    nodes: ['Origem', 'Fila', 'Processador', 'Embalagem'],
    scenariosTitle: 'Comparação de cenários',
    scenarios: [
      { name: 'Atual', value: 52, label: '320 unid./h' },
      { name: 'Layout B', value: 78, label: '405 unid./h', best: true },
      { name: '+2 AGVs', value: 66, label: '372 unid./h' },
    ],
    kpis: [
      { label: 'Débito', value: '+27%' },
      { label: 'Utilização', value: '86%' },
      { label: 'Retorno', value: '14 meses' },
    ],
    caption: 'Imagem ilustrativa da plataforma.',
  },
  features: {
    title: 'O que a plataforma faz.',
    description: 'Seis capacidades que trabalham juntas, do primeiro dado ao último indicador.',
    items: [
      { title: 'Geração automática', description: 'O modelo de simulação é construído a partir dos dados, sem programação manual.' },
      { title: 'Biblioteca de componentes', description: 'Postos, filas, AGVs e armazéns configuráveis e reutilizáveis entre projetos.' },
      { title: 'Cenários comparáveis', description: 'Várias alternativas avaliadas com os mesmos critérios e os mesmos dados.' },
      { title: 'Otimização', description: 'Procura as configurações que melhor equilibram capacidade, custo e prazo.' },
      { title: 'Integração de dados', description: 'ERP, MES, CAD e folhas de cálculo convergem num modelo de dados comum.' },
      { title: 'Resultados estruturados', description: 'KPIs organizados para mostrar o impacto e o retorno de cada opção.' },
    ],
  },
  beforeAfter: {
    title: 'Antes e depois da SymHive.',
    description: 'Arraste o divisor para comparar a forma tradicional de decidir com a decisão apoiada por simulação.',
    before: 'Sem SymHive',
    after: 'Com SymHive',
    sliderLabel: 'Comparar antes e depois',
    rows: [
      { label: 'Tempo até à decisão', before: '15–40 semanas', after: '4–8 semanas' },
      { label: 'Construção do modelo', before: 'Manual, por especialistas', after: 'Automática, a partir dos dados' },
      { label: 'Cenários avaliados', before: '1 ou 2 alternativas', after: 'Dezenas de alternativas' },
      { label: 'Quando a operação muda', before: 'Refazer o estudo', after: 'O modelo atualiza-se' },
      { label: 'Base da decisão', before: 'Folhas de cálculo e intuição', after: 'KPIs comparáveis' },
    ],
    note: 'Estimativas de estudos anteriores e projetos-piloto.',
  },
  process: {
    title: 'Do projeto à subscrição.',
    description: 'Começamos por um problema concreto. Quando o modelo prova valor, a plataforma fica ao serviço da operação.',
    groups: { project: 'Projeto', subscription: 'Subscrição' },
    phases: [
      { group: 'project', title: 'Diagnóstico', description: 'Definimos a decisão a apoiar e avaliamos os dados disponíveis.' },
      { group: 'project', title: 'Projeto-piloto', description: 'Geramos o modelo para um caso concreto e comparamos os primeiros cenários.' },
      { group: 'project', title: 'Implementação', description: 'Ligamos a plataforma aos dados e sistemas da operação e formamos a equipa.' },
      { group: 'subscription', title: 'Subscrição', description: 'Acesso contínuo à plataforma, com modelos atualizados e acompanhamento.' },
    ],
    cta: { label: 'Começar projeto', subject: 'Começar projeto — SymHive', pending: 'Canal de contacto em preparação' },
  },
};

const en: ProductContent = {
  meta: {
    title: 'Product — SymHive',
    description: 'How SymHive turns production data into simulation models, scenarios and KPIs for decision-making.',
  },
  hero: {
    badge: 'Product',
    titleAmber: 'One platform.',
    titleCyan: 'From data to decision.',
    lead: 'SymHive connects your data to a common data model, generates the simulation automatically and returns the indicators to compare every option.',
  },
  preview: {
    image: null,
    imageAlt: 'SymHive platform interface',
    windowTitle: 'SymHive · Scenario studio',
    live: 'Model in sync',
    nav: ['Models', 'Scenarios', 'Results', 'Library', 'Data'],
    canvasTitle: 'Line 3 · Layout B',
    nodes: ['Source', 'Queue', 'Processor', 'Packing'],
    scenariosTitle: 'Scenario comparison',
    scenarios: [
      { name: 'Current', value: 52, label: '320 units/h' },
      { name: 'Layout B', value: 78, label: '405 units/h', best: true },
      { name: '+2 AGVs', value: 66, label: '372 units/h' },
    ],
    kpis: [
      { label: 'Throughput', value: '+27%' },
      { label: 'Utilization', value: '86%' },
      { label: 'Payback', value: '14 months' },
    ],
    caption: 'Illustrative view of the platform.',
  },
  features: {
    title: 'What the platform does.',
    description: 'Six capabilities working together, from the first data point to the last indicator.',
    items: [
      { title: 'Automatic generation', description: 'The simulation model is built from the data, with no manual programming.' },
      { title: 'Component library', description: 'Configurable stations, queues, AGVs and warehouses, reused across projects.' },
      { title: 'Comparable scenarios', description: 'Several alternatives assessed with the same criteria and the same data.' },
      { title: 'Optimization', description: 'Searches for the configurations that best balance capacity, cost and lead time.' },
      { title: 'Data integration', description: 'ERP, MES, CAD and spreadsheets converge into one common data model.' },
      { title: 'Structured outputs', description: 'KPIs organized to show the impact and return of each option.' },
    ],
  },
  beforeAfter: {
    title: 'Before and after SymHive.',
    description: 'Drag the divider to compare the traditional way of deciding with simulation-backed decisions.',
    before: 'Without SymHive',
    after: 'With SymHive',
    sliderLabel: 'Compare before and after',
    rows: [
      { label: 'Time to decision', before: '15–40 weeks', after: '4–8 weeks' },
      { label: 'Model building', before: 'Manual, by specialists', after: 'Automatic, from the data' },
      { label: 'Scenarios assessed', before: '1 or 2 alternatives', after: 'Dozens of alternatives' },
      { label: 'When operations change', before: 'Redo the study', after: 'The model updates itself' },
      { label: 'Decision basis', before: 'Spreadsheets and intuition', after: 'Comparable KPIs' },
    ],
    note: 'Estimates from previous studies and pilot projects.',
  },
  process: {
    title: 'From project to subscription.',
    description: 'We start with a concrete problem. Once the model proves its value, the platform stays at the service of the operation.',
    groups: { project: 'Project', subscription: 'Subscription' },
    phases: [
      { group: 'project', title: 'Assessment', description: 'We define the decision to support and assess the available data.' },
      { group: 'project', title: 'Pilot project', description: 'We generate the model for a concrete case and compare the first scenarios.' },
      { group: 'project', title: 'Deployment', description: "We connect the platform to the operation's data and systems and train the team." },
      { group: 'subscription', title: 'Subscription', description: 'Ongoing access to the platform, with updated models and support.' },
    ],
    cta: { label: 'Start a project', subject: 'Start a project — SymHive', pending: 'Contact channel coming soon' },
  },
};

export const productContent: Record<Locale, ProductContent> = { pt, en };
