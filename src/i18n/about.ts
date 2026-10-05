import type { PageHeroContent, PageMeta } from './common';
import type { Locale } from './locales';

// Conteúdo provisório. Cargos, descrições e fotos dos founders estão por preencher.

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  /** Caminho em public/, por exemplo 'images/team/henrique-piqueiro.jpg'. Sem foto, mostra as iniciais. */
  photo?: string;
}

export interface AboutContent {
  meta: PageMeta;
  hero: PageHeroContent;
  story: { title: string; mission: string; paragraphs: string[]; facts: string[] };
  team: { title: string; description: string; members: TeamMember[] };
  origins: { badge: string; title: string; paragraphs: string[]; logoAlt: string };
  /**
   * Última secção: informação de contactos. value null mostra «pending».
   * O email vem de site.contactEmail (src/config/site.ts); os restantes valores ficam aqui.
   */
  contacts: {
    title: string;
    description: string;
    pending: string;
    items: { type: ContactType; label: string; value: string | null; href?: string }[];
  };
}

export type ContactType = 'email' | 'phone' | 'address' | 'linkedin';

/** Logótipo do INESC TEC em public/ (por exemplo 'images/inesctec-logo.svg'). Enquanto for null, mostra o nome em texto. */
export const inescTecLogo: string | null = 'images/inesctec-logo.svg';

const founders = ['Henrique Piqueiro', 'Ana Silva', 'Romão Santos', 'Pedro Senna', 'António Almeida'];

const pt: AboutContent = {
  meta: {
    title: 'Sobre — SymHive',
    description: 'A SymHive é uma spin-off do INESC TEC dedicada à criação automática de modelos de simulação para a indústria.',
  },
  hero: {
    badge: 'Sobre a SymHive',
    titleAmber: 'Experiência em simulação.',
    titleCyan: 'Foco na operação.',
    lead: 'Somos uma spin-off dedicada à criação automática de modelos de simulação para sistemas industriais complexos.',
  },
  story: {
    title: 'Porque existimos.',
    mission: 'Pôr a simulação ao alcance de cada decisão operacional.',
    paragraphs: [
      'Construir e atualizar modelos de simulação à mão atrasa a análise de alternativas. Quando o modelo fica pronto, a operação já mudou.',
      'Transformamos experiência técnica em componentes reutilizáveis, para que o modelo acompanhe o contexto em vez de ficar preso a um único estudo.',
    ],
    facts: [
      'Spin-off nascida da investigação no INESC TEC',
      'MVP de geração automática validado em casos industriais',
      'Modelos que evoluem com a operação, projeto após projeto',
    ],
  },
  team: {
    title: 'Quem constrói a SymHive.',
    description: 'Cinco founders com percursos em simulação, otimização e operações industriais.',
    members: founders.map((name) => ({ name, role: 'Cargo por definir', bio: 'Descrição breve por preencher.' })),
  },
  origins: {
    badge: 'INESC TEC',
    title: 'Origem na investigação.',
    paragraphs: [
      'A SymHive é uma spin-off nascida da investigação desenvolvida no INESC TEC.',
      'Com base em anos de excelência em digitalização, levamos a simulação e a otimização avançadas do laboratório para operações industriais reais.',
    ],
    logoAlt: 'INESC TEC',
  },
  contacts: {
    title: 'Contactos',
    description: 'Fale diretamente com a equipa da SymHive.',
    pending: 'Por definir',
    items: [
      { type: 'email', label: 'Email', value: null },
      { type: 'phone', label: 'Telefone', value: null },
      { type: 'address', label: 'Morada', value: null },
      { type: 'linkedin', label: 'LinkedIn', value: null },
    ],
  },
};

const en: AboutContent = {
  meta: {
    title: 'About — SymHive',
    description: 'SymHive is an INESC TEC spin-off dedicated to the automatic creation of simulation models for industry.',
  },
  hero: {
    badge: 'About SymHive',
    titleAmber: 'Simulation expertise.',
    titleCyan: 'Operational focus.',
    lead: 'We are a spin-off dedicated to the automatic creation of simulation models for complex industrial systems.',
  },
  story: {
    title: 'Why we exist.',
    mission: 'To put simulation within reach of every operational decision.',
    paragraphs: [
      'Building and updating simulation models by hand slows down the analysis of alternatives. By the time the model is ready, the operation has already changed.',
      'We turn technical expertise into reusable components, so the model keeps up with its context instead of being locked into a single study.',
    ],
    facts: [
      'Spin-off born from research at INESC TEC',
      'Automatic generation MVP validated in industrial cases',
      'Models that evolve with the operation, project after project',
    ],
  },
  team: {
    title: 'The people building SymHive.',
    description: 'Five founders with backgrounds in simulation, optimization and industrial operations.',
    members: founders.map((name) => ({ name, role: 'Role to be defined', bio: 'Short description to be added.' })),
  },
  origins: {
    badge: 'INESC TEC',
    title: 'Research origins.',
    paragraphs: [
      'SymHive is a spin-off born from research conducted at INESC TEC.',
      'Built on years of digitalization excellence, we bring advanced simulation and optimization from the lab into real-world industrial operations.',
    ],
    logoAlt: 'INESC TEC',
  },
  contacts: {
    title: 'Contacts',
    description: 'Talk directly to the SymHive team.',
    pending: 'To be confirmed',
    items: [
      { type: 'email', label: 'Email', value: null },
      { type: 'phone', label: 'Phone', value: null },
      { type: 'address', label: 'Address', value: null },
      { type: 'linkedin', label: 'LinkedIn', value: null },
    ],
  },
};

export const aboutContent: Record<Locale, AboutContent> = { pt, en };
