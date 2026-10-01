import type { PageHeroContent, PageMeta } from './common';
import type { Locale } from './locales';

// Conteúdo provisório. Os casos são genéricos até haver informação confirmada sobre cada projeto.

export type IndustryKey = 'manufacturing' | 'warehouse' | 'logistics';

export interface CaseStudy {
  title: string;
  industry: IndustryKey;
  challenge: string;
  approach: string;
  result: string;
}

export interface Problem {
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
    labels: { challenge: string; approach: string; result: string; caseOne: string; caseMany: string };
    items: Problem[];
  };
  note: string;
}

/** Gera casos genéricos numerados em sequência ao longo de todos os problemas. */
function placeholders(
  groups: { industries: IndustryKey[] }[],
  text: { title: string; challenge: string; approach: string; result: string },
): CaseStudy[][] {
  let n = 0;
  return groups.map((group) =>
    group.industries.map((industry) => ({
      title: `${text.title} ${++n}`,
      industry,
      challenge: text.challenge,
      approach: text.approach,
      result: text.result,
    })),
  );
}

// Indústria de cada caso genérico, por problema (mesma ordem em PT e EN).
const caseGroups: { industries: IndustryKey[] }[] = [
  { industries: ['manufacturing', 'warehouse'] },
  { industries: ['manufacturing', 'logistics'] },
  { industries: ['logistics', 'warehouse'] },
  { industries: ['manufacturing'] },
];

const ptCases = placeholders(caseGroups, {
  title: 'Caso de estudo',
  challenge: 'Descrição do desafio operacional por preencher.',
  approach: 'Descrição do modelo e dos cenários testados por preencher.',
  result: 'Resultados e indicadores por preencher.',
});

const enCases = placeholders(caseGroups, {
  title: 'Case study',
  challenge: 'Operational challenge to be described.',
  approach: 'Model and tested scenarios to be described.',
  result: 'Results and indicators to be described.',
});

const pt: CasesContent = {
  meta: {
    title: 'Casos de estudo — SymHive',
    description: 'Indústrias, problemas e casos de estudo em que a SymHive gerou modelos de simulação para apoiar decisões.',
  },
  hero: {
    badge: 'Casos de estudo',
    titleAmber: 'Modelos reais.',
    titleCyan: 'Decisões reais.',
    lead: 'Atuamos onde a operação é complexa e cada mudança afeta o sistema inteiro: da produção ao armazém e à distribuição.',
  },
  industries: {
    title: 'Indústrias onde atuamos',
    items: {
      manufacturing: { title: 'Manufatura', description: 'Linhas de produção, postos de trabalho e fluxos de material.' },
      warehouse: { title: 'Armazéns', description: 'Armazenagem, picking, buffers e movimentação interna.' },
      logistics: { title: 'Logística', description: 'Frotas, AGVs, transporte e distribuição.' },
    },
  },
  problems: {
    title: 'Problemas que resolvemos',
    description: 'Escolha um problema para ver os casos de estudo associados.',
    labels: { challenge: 'Desafio', approach: 'Abordagem', result: 'Resultado', caseOne: 'caso', caseMany: 'casos' },
    items: [
      { title: 'Configuração de layout', description: 'Testar novas disposições de linhas, postos e armazéns antes de mudar o terreno.', cases: ptCases[0] },
      { title: 'Introdução de tecnologia', description: 'Avaliar o impacto de novos equipamentos, robôs ou AGVs antes de investir.', cases: ptCases[1] },
      { title: 'Planeamento de recursos', description: 'Dimensionar equipas, frotas e turnos perante procura variável.', cases: ptCases[2] },
      { title: 'Planeamento de produção', description: 'Comparar planos e sequências de produção com os mesmos critérios.', cases: ptCases[3] },
    ],
  },
  note: 'Os resultados de cada caso dependem dos dados e do contexto de cada operação.',
};

const en: CasesContent = {
  meta: {
    title: 'Case studies — SymHive',
    description: 'Industries, problems and case studies where SymHive generated simulation models to support decisions.',
  },
  hero: {
    badge: 'Case studies',
    titleAmber: 'Real models.',
    titleCyan: 'Real decisions.',
    lead: 'We work where operations are complex and every change affects the whole system: from production to the warehouse and distribution.',
  },
  industries: {
    title: 'Industries we work in',
    items: {
      manufacturing: { title: 'Manufacturing', description: 'Production lines, workstations and material flows.' },
      warehouse: { title: 'Warehousing', description: 'Storage, picking, buffers and internal handling.' },
      logistics: { title: 'Logistics', description: 'Fleets, AGVs, transport and distribution.' },
    },
  },
  problems: {
    title: 'Problems we solve',
    description: 'Choose a problem to see the related case studies.',
    labels: { challenge: 'Challenge', approach: 'Approach', result: 'Result', caseOne: 'case', caseMany: 'cases' },
    items: [
      { title: 'Layout configuration', description: 'Test new arrangements of lines, stations and warehouses before changing the shop floor.', cases: enCases[0] },
      { title: 'Introduction of technology', description: 'Assess the impact of new equipment, robots or AGVs before investing.', cases: enCases[1] },
      { title: 'Resource planning', description: 'Size teams, fleets and shifts against variable demand.', cases: enCases[2] },
      { title: 'Production planning', description: 'Compare production plans and sequences with the same criteria.', cases: enCases[3] },
    ],
  },
  note: 'The results of each case depend on the data and context of each operation.',
};

export const casesContent: Record<Locale, CasesContent> = { pt, en };
