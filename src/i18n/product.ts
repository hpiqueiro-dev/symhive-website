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
  /** tag é uma etiqueta opcional no canto do cartão (por exemplo, a patente). */
  features: { title: string; description: string; items: (HexItem & { tag?: string })[] };
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
      { title: 'Geração automática', description: 'O modelo de simulação é construído a partir dos dados, sem programação manual.', tag: 'Patente pendente' },
      { title: 'Biblioteca de componentes', description: 'Postos, filas, AGVs e armazéns configuráveis e reutilizáveis entre projetos.' },
      { title: 'Cenários comparáveis', description: 'Várias alternativas avaliadas com os mesmos critérios e os mesmos dados.' },
      { title: 'Otimização', description: 'Procura as configurações que melhor equilibram capacidade, custo e prazo.' },
      { title: 'Integração de dados', description: 'ERP, MES, CAD e folhas de cálculo convergem num modelo de dados comum.' },
      { title: 'Resultados estruturados', description: 'KPIs organizados para mostrar o impacto e o retorno de cada opção.' },
    ],
  },
  beforeAfter: {
    title: 'Antes e depois da SymHive.',
    description: 'A forma tradicional de decidir comparada com a decisão apoiada por simulação.',
    before: {
      label: 'Antes',
      items: [
        'Folhas de cálculo e intuição',
        'Modelos construídos à mão',
        '30 semanas até decidir',
        '1 ou 2 alternativas avaliadas',
        'Refazer o estudo quando algo muda',
        'Implementação sem prova prévia',
      ],
    },
    after: {
      label: 'Com a SymHive',
      items: [
        'Modelo gerado a partir dos dados',
        'Simulação sem programação',
        '8 semanas até decidir',
        'Dezenas de cenários comparados',
        'O modelo acompanha a operação',
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
      { group: 'project', title: 'Implementação', description: 'Ligamos a plataforma aos dados e sistemas da operação e formamos a equipa.' },
      { group: 'subscription', title: 'Subscrição', description: 'Acesso contínuo à plataforma, com modelos atualizados e acompanhamento.' },
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
      { title: 'Automatic generation', description: 'The simulation model is built from the data, with no manual programming.', tag: 'Patent pending' },
      { title: 'Component library', description: 'Configurable stations, queues, AGVs and warehouses, reused across projects.' },
      { title: 'Comparable scenarios', description: 'Several alternatives assessed with the same criteria and the same data.' },
      { title: 'Optimization', description: 'Searches for the configurations that best balance capacity, cost and lead time.' },
      { title: 'Data integration', description: 'ERP, MES, CAD and spreadsheets converge into one common data model.' },
      { title: 'Structured outputs', description: 'KPIs organized to show the impact and return of each option.' },
    ],
  },
  beforeAfter: {
    title: 'Before and after SymHive.',
    description: 'The traditional way of deciding compared with simulation-backed decisions.',
    before: {
      label: 'Before',
      items: [
        'Spreadsheets and gut feeling',
        'Models built by hand',
        '30 weeks to decide',
        '1 or 2 alternatives assessed',
        'Redo the study when something changes',
        'Implementation without prior proof',
      ],
    },
    after: {
      label: 'With SymHive',
      items: [
        'Model generated from the data',
        'Simulation with no programming',
        '8 weeks to decide',
        'Dozens of scenarios compared',
        'The model keeps up with operations',
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
      { group: 'project', title: 'Deployment', description: "We connect the platform to the operation's data and systems and train the team." },
      { group: 'subscription', title: 'Subscription', description: 'Ongoing access to the platform, with updated models and support.' },
    ],
    cta: { title: 'Ready for the first step?', description: 'It all starts with an assessment of the decision and the data you already have.', label: 'Start a project', subject: 'Start a project — SymHive', pending: 'Contact channel coming soon' },
  },
};

export const productContent: Record<Locale, ProductContent> = { pt, en };
