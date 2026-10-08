import type { HexItem, PageHeroContent, PageMeta } from './common';
import type { Locale } from './locales';

// Conteúdo provisório: estrutura no estilo v7, textos a rever. As fases do processo e o antes vs depois são propostas.

export type ProcessGroup = 'project' | 'subscription';
export type FeatureStatus = 'available' | 'development' | 'planned';

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
  /**
   * tag é uma etiqueta opcional no canto do cartão (por exemplo, a patente).
   * status é a fase da capacidade: available (verde), development (âmbar) ou planned (cinzento).
   */
  features: {
    title: string;
    description: string;
    statusLabels: Record<FeatureStatus, string>;
    items: (HexItem & { tag?: string; status: FeatureStatus })[];
  };
  beforeAfter: {
    title: string;
    description: string;
    /** Dois cartões lado a lado: o que se faz hoje (✕) e o que muda com a SymHive (✓). */
    before: { label: string; items: string[] };
    after: { label: string; items: string[] };
    note: string;
  };
  process: {
    title: string;
    description: string;
    groups: Record<ProcessGroup, string>;
    phases: { group: ProcessGroup; title: string; description: string }[];
    /** Caixa compacta de contacto no fim da página (título, frase curta e botão). */
    cta: { title: string; description: string; label: string; subject: string; pending: string };
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
    titleCyan: 'Dos dados à decisão.',
    lead: 'A SymHive liga os seus dados e sistemas, gera a simulação 3D automaticamente e devolve indicadores para comparar cada opção.',
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
      { label: 'Produtividade', value: '+27%' },
      { label: 'Utilização', value: '86%' },
      { label: 'Retorno', value: '14 meses' },
    ],
    caption: 'Versão 1.0 · Patente pendente · Validada em quatro ambientes industriais',
  },
  features: {
    title: 'Plataforma de apoio à decisão industrial.',
    description: 'Múltiplas capacidades que trabalham juntas, do primeiro dado ao último indicador. Algumas já estão em uso, outras estão a ser desenvolvidas com os primeiros projetos.',
    statusLabels: { available: 'Disponível', development: 'Em desenvolvimento', planned: 'Planeado' },
    items: [
      { title: 'Geração automática', description: 'O modelo de simulação é construído a partir dos dados, sem programação manual.', tag: 'Patente pendente', status: 'development' },
      { title: 'Biblioteca de componentes', description: 'Postos, filas, AGVs e armazéns configuráveis e reutilizáveis entre projetos.', status: 'available' },
      { title: 'Cenários comparáveis', description: 'Várias alternativas avaliadas com os mesmos critérios e os mesmos dados.', status: 'available' },
      { title: 'Otimização', description: 'Procura as configurações que melhor equilibram capacidade, custo e prazo.', status: 'development' },
      { title: 'Integração de dados', description: 'ERP, MES, CAD e folhas de cálculo convergem num modelo de dados comum.', status: 'development' },
      { title: 'Resultados estruturados', description: 'KPIs organizados para mostrar o impacto e o retorno de cada opção.', status: 'available' },
    ],
  },
  beforeAfter: {
    title: 'Antes e depois da SymHive.',
    description: 'A forma tradicional de decidir comparada com a decisão apoiada por simulação.',
    before: {
      label: 'Antes',
      items: [
        'Folhas de cálculo e intuição',
        'Modelos construídos à mão por especialistas',
        '15 a 40 semanas até decidir',
        '1 ou 2 alternativas avaliadas',
        'Refazer o estudo quando algo muda',
        'Implementação sem prova prévia',
      ],
    },
    after: {
      label: 'Com a SymHive',
      items: [
        'Modelo gerado a partir dos dados',
        'Simulação sem programação, low code',
        '6 a 12 semanas até decidir',
        'Várias alternativas de cenários comparadas',
        'O modelo é recalibrado quando a operação muda',
        'ROI claro e prova antes de investir',
      ],
    },
    note: 'Valores aproximados, a partir de estimativas de estudos anteriores e projetos-piloto.',
  },
  process: {
    title: 'Do projeto à subscrição.',
    description: 'Começamos por um problema concreto. Quando o modelo prova valor, a plataforma fica ao serviço da operação.',
    groups: { project: 'Projeto de simulação', subscription: 'Subscrição' },
    phases: [
      { group: 'project', title: 'Diagnóstico', description: 'Definimos a decisão a apoiar e avaliamos os dados disponíveis.' },
      { group: 'project', title: 'Modelação', description: 'Geramos o modelo para um caso concreto e comparamos os primeiros cenários.' },
      { group: 'project', title: 'Implementação', description: 'Ligamos a plataforma aos dados e sistemas da operação.' },
      { group: 'subscription', title: 'Subscrição', description: 'Acesso contínuo à plataforma, com modelos atualizados e acompanhamento dedicado.' },
    ],
    cta: { title: 'Pronto para o primeiro passo?', description: 'Tudo começa com um diagnóstico da decisão e dos dados que já tem.', label: 'Começar projeto', subject: 'Começar projeto — SymHive', pending: 'Canal de contacto em preparação' },
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
    lead: 'SymHive connects your data and systems, generates the 3D simulation automatically and returns the indicators to compare every option.',
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
    caption: 'Version 1.0 · Patent pending · Validated in four industrial environments',
  },
  features: {
    title: 'Industrial decision support platform.',
    description: 'Multiple capabilities working together, from the first data point to the last indicator. Some are already in use, others are being developed with our first projects.',
    statusLabels: { available: 'Available', development: 'In development', planned: 'Planned' },
    items: [
      { title: 'Automatic generation', description: 'The simulation model is built from the data, with no manual programming.', tag: 'Patent pending', status: 'development' },
      { title: 'Component library', description: 'Configurable stations, queues, AGVs and warehouses, reused across projects.', status: 'available' },
      { title: 'Comparable scenarios', description: 'Several alternatives assessed with the same criteria and the same data.', status: 'available' },
      { title: 'Optimization', description: 'Searches for the configurations that best balance capacity, cost and lead time.', status: 'development' },
      { title: 'Data integration', description: 'ERP, MES, CAD and spreadsheets converge into one common data model.', status: 'development' },
      { title: 'Structured outputs', description: 'KPIs organized to show the impact and return of each option.', status: 'available' },
    ],
  },
  beforeAfter: {
    title: 'Before and after SymHive.',
    description: 'The traditional way of deciding compared with simulation-backed decisions.',
    before: {
      label: 'Before',
      items: [
        'Spreadsheets and gut feeling',
        'Models built by hand by specialists',
        '15 to 40 weeks to decide',
        '1 or 2 alternatives assessed',
        'Redo the study when something changes',
        'Implementation without prior proof',
      ],
    },
    after: {
      label: 'With SymHive',
      items: [
        'Model generated from the data',
        'Simulation with no programming, low code',
        '6 to 12 weeks to decide',
        'Several alternative scenarios compared',
        'The model is recalibrated when operations change',
        'Clear ROI and proof before investing',
      ],
    },
    note: 'Approximate values, based on estimates from previous studies and pilot projects.',
  },
  process: {
    title: 'From project to subscription.',
    description: 'We start with a concrete problem. Once the model proves its value, the platform stays at the service of the operation.',
    groups: { project: 'Simulation project', subscription: 'Subscription' },
    phases: [
      { group: 'project', title: 'Assessment', description: 'We define the decision to support and assess the available data.' },
      { group: 'project', title: 'Modelling', description: 'We generate the model for a concrete case and compare the first scenarios.' },
      { group: 'project', title: 'Deployment', description: "We connect the platform to the operation's data and systems." },
      { group: 'subscription', title: 'Subscription', description: 'Ongoing access to the platform, with updated models and dedicated support.' },
    ],
    cta: { title: 'Ready for the first step?', description: 'It all starts with an assessment of the decision and the data you already have.', label: 'Start a project', subject: 'Start a project — SymHive', pending: 'Contact channel coming soon' },
  },
};

export const productContent: Record<Locale, ProductContent> = { pt, en };
