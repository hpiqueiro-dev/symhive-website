import type { PageHeroContent, PageMeta } from './common';
import type { Locale } from './locales';

// Enquanto as empresas não autorizam a publicação dos seus casos, cada problema mostra um caso típico
// (sem nome de cliente). Quando houver autorização, basta acrescentar casos ao array `cases` de cada problema.

export type IndustryKey = 'manufacturing' | 'warehouse' | 'logistics' | 'supplyChain';

export interface CaseStudy {
  title: string;
  industry: IndustryKey;
  challenge: string;
  approach: string;
  result: string;
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
    labels: { challenge: string; approach: string; result: string };
    items: Problem[];
  };
  note: string;
  /** Substitui o título e o texto da secção de contacto nesta página (versão compacta). */
  contact: { title: string; description: string };
}

const pt: CasesContent = {
  meta: {
    title: 'Casos de estudo — SymHive',
    description: 'Indústrias, problemas e casos de estudo em que a SymHive gerou modelos de simulação para apoiar decisões.',
  },
  hero: {
    badge: 'Casos de estudo',
    titleAmber: 'Construída para',
    titleCyan: 'desafios industriais reais.',
    lead: 'Atuamos onde a operação é complexa, onde cada mudança afeta o sistema inteiro e cada decisão tem impacto em toda a fábrica.',
    proof: { text: 'Mais de 100 conversas com a indústria no programa TechLaunch' },
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
    labels: { challenge: 'Desafio', approach: 'Abordagem', result: 'Resultado' },
    items: [
      {
        type: 'strategic',
        title: 'Configuração de layout',
        description: 'Testar novas disposições de linhas, postos e armazéns antes de mudar no terreno.',
        cases: [
          {
            title: 'Caso típico',
            industry: 'logistics',
            challenge: 'O novo layout resolve o gargalo ou apenas o muda de sítio? Numa expansão, como dispor as novas máquinas?',
            approach: 'Modelamos o layout atual e as alternativas a partir do CAD, com postos, filas e fluxos de material, e projetamos o crescimento previsto da empresa.',
            result: 'Produtividade, utilização, stock intermédio e gargalo de cada alternativa, hoje e no futuro, com a estratégia de contratação e compra de máquinas.',
          },
        ],
      },
      {
        type: 'strategic',
        title: 'Introdução de tecnologia',
        description: 'Avaliar o impacto de novos equipamentos, robôs ou AGVs antes de investir.',
        cases: [
          {
            title: 'Caso típico',
            industry: 'manufacturing',
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
            title: 'Caso típico',
            industry: 'warehouse',
            challenge: 'Quantos operadores alocar a cada tarefa para produzir mais, e como distribuí-los tendo em conta o tempo de ciclo de cada operação?',
            approach: 'Modelamos a procura histórica e prevista, as equipas, os turnos e a frota.',
            result: 'Dimensionamento por cenário de procura, com nível de serviço e custo.',
          },
        ],
      },
      {
        type: 'operational',
        title: 'Planeamento de produção',
        description: 'Comparar planos e sequências de produção com os mesmos critérios.',
        cases: [
          {
            title: 'Caso típico',
            industry: 'manufacturing',
            challenge: 'Que sequência de produção cumpre os prazos com menos trocas?',
            approach: 'Modelamos os tempos de setup e de produção com distribuições estatísticas, e os buffers. Testamos alterações à produção para medir a vantagem de cada uma.',
            result: 'Cumprimento de prazos, ocupação e stock intermédio de cada plano diário, semanal ou mensal.',
          },
        ],
      },
    ],
  },
  note: 'Casos típicos dos projetos que desenvolvemos. Os resultados dependem dos dados e do contexto de cada operação.',
  contact: {
    title: 'Quer juntar-se ao nosso portefólio?',
    description: 'Junte-se às empresas que já ganharam com a simulação. Entre em contacto e mostramos o que a SymHive pode fazer pela sua operação.',
  },
};

const en: CasesContent = {
  meta: {
    title: 'Case studies — SymHive',
    description: 'Industries, problems and case studies where SymHive generated simulation models to support decisions.',
  },
  hero: {
    badge: 'Case studies',
    titleAmber: 'Built for real',
    titleCyan: 'industrial challenges.',
    lead: 'We work where operations are complex, where every change affects the whole system and every decision impacts the factory.',
    proof: { text: 'More than 100 interviews with industry in the TechLaunch programme' },
  },
  industries: {
    title: 'Industries we work in',
    items: {
      manufacturing: { title: 'Manufacturing', description: 'Production lines, workstations and production planning.' },
      warehouse: { title: 'Warehousing', description: 'Layout, storage, picking and buffers.' },
      logistics: { title: 'Intralogistics', description: 'Fleets, AGVs, material flow and resource allocation.' },
      supplyChain: { title: 'Supply Chain', description: 'Network decisions, inventory and logistics.' },
    },
  },
  problems: {
    title: 'Problems we solve',
    description: 'From strategic decisions to daily planning, we explore alternatives before taking them to the shop floor. Every operation is different, but the challenges repeat.',
    decisions: {
      strategic: { title: 'Strategic', description: 'Change the structure of the operation in the medium and long term: new layouts, equipment investment and expansions.' },
      operational: { title: 'Operational', description: 'Fine-tune the operation day to day: production plans, teams, shifts and resource allocation.' },
    },
    labels: { challenge: 'Challenge', approach: 'Approach', result: 'Result' },
    items: [
      {
        type: 'strategic',
        title: 'Layout configuration',
        description: 'Test new arrangements of lines, stations and warehouses before changing the shop floor.',
        cases: [
          {
            title: 'Typical case',
            industry: 'logistics',
            challenge: 'Does the new layout fix the bottleneck, or just move it? In an expansion, how should the new machines be arranged?',
            approach: 'We model the current layout and the alternatives from CAD, with stations, queues and material flows, and project the company’s expected growth.',
            result: 'Productivity, utilization, work-in-progress and the bottleneck of each alternative, today and in the future, with the hiring and machine purchasing strategy.',
          },
        ],
      },
      {
        type: 'strategic',
        title: 'Introduction of technology',
        description: 'Assess the impact of new equipment, robots or AGVs before investing.',
        cases: [
          {
            title: 'Typical case',
            industry: 'manufacturing',
            challenge: 'How many AGVs are needed to replace the forklifts, what do they cost and how long until they pay off?',
            approach: 'We model the current fleet and the new technology, with routes, loads and charging times, and identify the layout changes needed to integrate it.',
            result: 'Fleet size, utilization, waiting times and payback estimate, for the current situation and for higher-demand scenarios.',
          },
        ],
      },
      {
        type: 'operational',
        title: 'Resource planning',
        description: 'Size teams, fleets and shifts against variable demand.',
        cases: [
          {
            title: 'Typical case',
            industry: 'warehouse',
            challenge: 'How many operators should be assigned to each task to produce more, and how should they be distributed given each operation’s cycle time?',
            approach: 'We model historical and forecast demand, teams, shifts and the fleet.',
            result: 'Sizing per demand scenario, with service level and cost.',
          },
        ],
      },
      {
        type: 'operational',
        title: 'Production planning',
        description: 'Compare production plans and sequences with the same criteria.',
        cases: [
          {
            title: 'Typical case',
            industry: 'manufacturing',
            challenge: 'Which production sequence meets deadlines with the fewest changeovers?',
            approach: 'We model setup and production times with statistical distributions, and the buffers. We test changes to production to measure the benefit of each one.',
            result: 'On-time delivery, utilization and work-in-progress for each daily, weekly or monthly plan.',
          },
        ],
      },
    ],
  },
  note: 'Typical cases from the projects we develop. Results depend on the data and context of each operation.',
  contact: {
    title: 'Want to join our portfolio?',
    description: 'Join the companies already winning with simulation. Get in touch and we will show you what SymHive can do for your operation.',
  },
};

export const casesContent: Record<Locale, CasesContent> = { pt, en };
