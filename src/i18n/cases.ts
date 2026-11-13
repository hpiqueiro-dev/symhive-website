import type { PageHeroContent, PageMeta } from './common';
import type { Locale } from './locales';

// Cada problema mostra um caso típico (sem nome de cliente) ou, quando a empresa autoriza, um caso real
// (`real: true`, com os resultados medidos em `results`). Para acrescentar casos, basta usar o array `cases`.

export type IndustryKey = 'manufacturing' | 'warehouse' | 'logistics' | 'supplyChain';

/** Gráfico ilustrativo que acompanha o resultado de um caso. */
export type CaseChartKind = 'layout' | 'fleet' | 'staffing' | 'sequence' | 'distance' | 'largeItems';

export interface CaseStudy {
  title: string;
  industry: IndustryKey;
  /** Caso real de uma empresa (mostra a etiqueta "Caso real"). */
  real?: boolean;
  /** Um ou mais gráficos; os casos reais só usam valores medidos. */
  charts: CaseChartKind[];
  challenge: string;
  approach: string;
  /** Resultado em texto (casos típicos) ou lista de indicadores (casos reais). */
  result?: string;
  results?: { value: string; text: string }[];
}

export type DecisionType = 'strategic' | 'operational';

export interface Problem {
  /** Coluna onde o problema aparece (estratégica ou operacional). */
  type: DecisionType;
  title: string;
  description: string;
  cases: CaseStudy[];
}

export interface CasesContent {
  meta: PageMeta;
  hero: PageHeroContent;
  industries: { title: string; items: Record<IndustryKey, { title: string; description: string }> };
  problems: {
    title: string;
    description: string;
    /** Cabeçalho de cada coluna: os dois tipos de decisão. */
    decisions: Record<DecisionType, { title: string; description: string }>;
    labels: { challenge: string; approach: string; result: string; realCase: string };
    items: Problem[];
  };
  /** Título e etiquetas de cada gráfico (valores ilustrativos). */
  charts: Record<CaseChartKind, { title: string; labels: string[] }>;
  note: string;
  /** Substitui o título e o texto da secção de contacto nesta página (versão compacta). */
  contact: { title: string; description: string };
}

const pt: CasesContent = {
  meta: {
    title: 'Casos de uso — SymHive',
    description: 'Indústrias e problemas em que a SymHive gera modelos de simulação para apoiar decisões.',
  },
  hero: {
    badge: 'Casos de uso',
    titleAmber: 'Construída para',
    titleCyan: 'desafios industriais reais',
    lead: 'Atuamos em operações complexas, onde cada mudança se propaga por todo o sistema e cada decisão impacta a fábrica.',
    proof: { text: 'Mais de 10 projetos de simulação desenvolvidos pela equipa no INESC TEC' },
  },
  industries: {
    title: 'Indústrias onde atuamos',
    items: {
      manufacturing: { title: 'Manufatura', description: 'Linhas de produção, postos de trabalho e planeamento da produção.' },
      warehouse: { title: 'Armazéns', description: 'Layout, armazenagem, picking e buffers.' },
      logistics: { title: 'Intralogística', description: 'Frotas, AGVs, fluxo de materiais e alocação de recursos.' },
      supplyChain: { title: 'Cadeia de abastecimento', description: 'Decisões de rede, inventário e logística.' },
    },
  },
  problems: {
    title: 'Problemas que resolvemos',
    description: 'Das decisões estratégicas ao planeamento diário, exploramos alternativas antes de as levar para o terreno. Cada operação é diferente, mas os desafios repetem-se.',
    decisions: {
      strategic: { title: 'Estratégicas', description: 'Mudam a estrutura da operação a médio e longo prazo: novos layouts, investimento em equipamentos e expansões.' },
      operational: { title: 'Operacionais', description: 'Afinam a operação no dia a dia: planos de produção, equipas, turnos e alocação de recursos.' },
    },
    labels: { challenge: 'Desafio', approach: 'Abordagem', result: 'Resultado', realCase: 'Caso real' },
    items: [
      {
        type: 'strategic',
        title: 'Configuração de layout',
        description: 'Testar novas disposições de linhas, postos e armazéns antes de mudar no terreno.',
        cases: [
          {
            title: 'Novo layout numa expansão',
            industry: 'manufacturing',
            charts: ['layout'],
            challenge: 'O novo layout resolve o gargalo ou apenas o muda de sítio? Numa expansão, como dispor as novas máquinas?',
            approach: 'Modelamos o layout atual e as alternativas a partir do CAD, com postos, filas e fluxos de material, e projetamos o crescimento previsto da empresa.',
            result: 'Produção por hora, utilização, stock intermédio e gargalo de cada alternativa, e a estratégia de contratação e de compra de máquinas que daí resulta.',
          },
          {
            title: 'Triplicar a área de uma fábrica de carpintaria',
            industry: 'manufacturing',
            real: true,
            charts: ['distance', 'largeItems'],
            challenge: 'Um fabricante de produtos de carpintaria quer triplicar a sua área fabril. Precisava de definir o layout, os investimentos e a equipa, sem pôr em risco a produção atual.',
            approach: 'Construímos um modelo de simulação 3D de eventos discretos validado com um ano de dados reais. Comparámos três cenários de expansão com três níveis de procura e múltiplas replicações, e projetámos o crescimento previsto da empresa.',
            results: [
              { value: '+11%', text: 'de produção anual com novos postos de trabalho' },
              { value: '2×', text: 'potencial para duplicar a produção semanal' },
            ],
          },
        ],
      },
      {
        type: 'strategic',
        title: 'Introdução de tecnologia',
        description: 'Avaliar o impacto de novos equipamentos, robôs ou AGVs antes de investir.',
        cases: [
          {
            title: 'Substituir empilhadores por AGVs',
            industry: 'logistics',
            charts: ['fleet'],
            challenge: 'Quantos AGVs são precisos para substituir os empilhadores, quanto custam e em quanto tempo se pagam?',
            approach: 'Modelamos a frota atual e a nova tecnologia, com rotas, cargas e tempos de carregamento, e identificamos as alterações ao layout necessárias para a integrar.',
            result: 'Dimensão da frota, utilização, tempos de espera e estimativa de retorno, para a situação atual e para cenários de maior procura.',
          },
        ],
      },
      {
        type: 'operational',
        title: 'Planeamento de recursos',
        description: 'Dimensionar equipas, frotas e turnos perante procura variável.',
        cases: [
          {
            title: 'Alocação de operadores por tarefa',
            industry: 'manufacturing',
            charts: ['staffing'],
            challenge: 'Quantos operadores alocar a cada tarefa para produzir mais, e como distribuí-los tendo em conta o tempo de ciclo de cada operação?',
            approach: 'Modelamos a procura histórica e prevista, as tarefas, os tempos de ciclo e os turnos.',
            result: 'Número de operadores por tarefa e por turno, para cada cenário de procura, com nível de serviço e custo.',
          },
        ],
      },
      {
        type: 'operational',
        title: 'Planeamento de produção',
        description: 'Comparar planos e sequências de produção com os mesmos critérios.',
        cases: [
          {
            title: 'Sequência de produção com menos trocas',
            industry: 'manufacturing',
            charts: ['sequence'],
            challenge: 'Que sequência de produção cumpre os prazos com menos trocas?',
            approach: 'Modelamos a capacidade dos buffers e os tempos de setup e de produção, com distribuições estatísticas. Testamos alterações ao plano para medir o ganho de cada uma.',
            result: 'Cumprimento de prazos, ocupação e stock intermédio de cada plano diário, semanal ou mensal.',
          },
        ],
      },
    ],
  },
  charts: {
    layout: { title: 'Produção por hora de cada alternativa (unid./h)', labels: ['Atual', 'Layout A', 'Layout B'] },
    fleet: { title: 'Tempo médio de espera por dimensão da frota', labels: ['N.º de AGVs', 'Espera (min)', '5 AGVs: ponto ótimo'] },
    staffing: { title: 'Operadores por turno', labels: ['Atual', 'Proposto', 'Turno 1', 'Turno 2', 'Turno 3'] },
    sequence: { title: 'Sequência de produção numa semana', labels: ['Plano atual', 'Plano proposto', '9 trocas', '3 trocas'] },
    distance: { title: 'Distância por produto (atual = 100)', labels: ['Atual', 'Novo layout', '−18%'] },
    largeItems: { title: 'Produtos de grandes dimensões', labels: ['Atual', '+1 posto'] },
  },
  note: 'Os casos sem a etiqueta "Caso real" são casos típicos dos projetos que desenvolvemos. Os resultados dependem dos dados e do contexto de cada operação.',
  contact: {
    title: 'Tem um desafio parecido?',
    description: 'Fale connosco e mostramos o que a SymHive pode fazer pela sua operação.',
  },
};

const en: CasesContent = {
  meta: {
    title: 'Use cases — SymHive',
    description: 'Industries and problems where SymHive generates simulation models to support decisions.',
  },
  hero: {
    badge: 'Use cases',
    titleAmber: 'Built for real',
    titleCyan: 'industrial challenges',
    lead: 'We work in complex operations, where every change ripples through the whole system and every decision impacts the factory.',
    proof: { text: 'More than 10 simulation projects developed by the team at INESC TEC' },
  },
  industries: {
    title: 'Industries we work in',
    items: {
      manufacturing: { title: 'Manufacturing', description: 'Production lines, workstations and production planning.' },
      warehouse: { title: 'Warehousing', description: 'Layout, storage, picking and buffers.' },
      logistics: { title: 'Intralogistics', description: 'Fleets, AGVs, material flow and resource allocation.' },
      supplyChain: { title: 'Supply chain', description: 'Network decisions, inventory and logistics.' },
    },
  },
  problems: {
    title: 'Problems we solve',
    description: 'From strategic decisions to daily planning, we explore alternatives before taking them to the shop floor. Every operation is different, but the challenges repeat.',
    decisions: {
      strategic: { title: 'Strategic', description: 'Change the structure of the operation in the medium and long term: new layouts, equipment investment and expansions.' },
      operational: { title: 'Operational', description: 'Fine-tune the operation day to day: production plans, teams, shifts and resource allocation.' },
    },
    labels: { challenge: 'Challenge', approach: 'Approach', result: 'Result', realCase: 'Real case' },
    items: [
      {
        type: 'strategic',
        title: 'Layout configuration',
        description: 'Test new arrangements of lines, stations and warehouses before changing the shop floor.',
        cases: [
          {
            title: 'New layout for an expansion',
            industry: 'manufacturing',
            charts: ['layout'],
            challenge: 'Does the new layout fix the bottleneck, or just move it? In an expansion, how should the new machines be arranged?',
            approach: "We model the current layout and the alternatives from CAD, with stations, queues and material flows, and project the company's expected growth.",
            result: 'Throughput, utilisation, work-in-progress and the bottleneck of each alternative, and the resulting hiring and machine purchasing strategy.',
          },
          {
            title: 'Tripling the floor space of a carpentry plant',
            industry: 'manufacturing',
            real: true,
            charts: ['distance', 'largeItems'],
            challenge: 'A manufacturer of carpentry products wants to triple its factory floor space. It needed to define the layout, the investments and the team without putting current production at risk.',
            approach: "We built a 3D discrete-event simulation model validated with a year of real data. We compared three expansion scenarios across three demand levels with multiple replications, and projected the company's expected growth.",
            results: [
              { value: '+11%', text: 'annual output with new workstations' },
              { value: '2×', text: 'potential to double weekly output' },
            ],
          },
        ],
      },
      {
        type: 'strategic',
        title: 'Adopting new technology',
        description: 'Assess the impact of new equipment, robots or AGVs before investing.',
        cases: [
          {
            title: 'Replacing forklifts with AGVs',
            industry: 'logistics',
            charts: ['fleet'],
            challenge: 'How many AGVs are needed to replace the forklifts, what do they cost and how long until they pay off?',
            approach: 'We model the current fleet and the new technology, with routes, loads and charging times, and identify the layout changes needed to integrate it.',
            result: 'Fleet size, utilisation, waiting times and payback estimate, for the current situation and for higher-demand scenarios.',
          },
        ],
      },
      {
        type: 'operational',
        title: 'Resource planning',
        description: 'Size teams, fleets and shifts against variable demand.',
        cases: [
          {
            title: 'Assigning operators to tasks',
            industry: 'manufacturing',
            charts: ['staffing'],
            challenge: "How many operators should be assigned to each task to produce more, and how should they be distributed given each operation's cycle time?",
            approach: 'We model historical and forecast demand, tasks, cycle times and shifts.',
            result: 'Number of operators per task and per shift, for each demand scenario, with service level and cost.',
          },
        ],
      },
      {
        type: 'operational',
        title: 'Production planning',
        description: 'Compare production plans and sequences with the same criteria.',
        cases: [
          {
            title: 'Production sequence with fewer changeovers',
            industry: 'manufacturing',
            charts: ['sequence'],
            challenge: 'Which production sequence meets deadlines with the fewest changeovers?',
            approach: 'We model buffer capacity and setup and production times, with statistical distributions. We test changes to the plan to measure the gain from each one.',
            result: 'On-time delivery, utilisation and work-in-progress for each daily, weekly or monthly plan.',
          },
        ],
      },
    ],
  },
  charts: {
    layout: { title: 'Throughput of each alternative (units/h)', labels: ['Current', 'Layout A', 'Layout B'] },
    fleet: { title: 'Average waiting time by fleet size', labels: ['No. of AGVs', 'Wait (min)', '5 AGVs: optimum'] },
    staffing: { title: 'Operators per shift', labels: ['Current', 'Proposed', 'Shift 1', 'Shift 2', 'Shift 3'] },
    sequence: { title: 'Production sequence over one week', labels: ['Current plan', 'Proposed plan', '9 changeovers', '3 changeovers'] },
    distance: { title: 'Distance per product (current = 100)', labels: ['Current', 'New layout', '−18%'] },
    largeItems: { title: 'Large-format products', labels: ['Current', '+1 station'] },
  },
  note: 'Cases without the "Real case" label are typical cases from the projects we develop. Results depend on the data and context of each operation.',
  contact: {
    title: 'Facing a similar challenge?',
    description: "Get in touch and we'll show you what SymHive can do for your operation.",
  },
};

export const casesContent: Record<Locale, CasesContent> = { pt, en };
