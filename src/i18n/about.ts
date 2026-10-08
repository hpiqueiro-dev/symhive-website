import type { PageHeroContent, PageMeta } from './common';
import type { Locale } from './locales';

// Conteúdo provisório. Sem foto, cada founder mostra as iniciais.

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
  /** Em description, {acronym} é substituído pelas iniciais dos founders (HARPA), destacadas a âmbar. */
  team: { title: string; description: string; members: TeamMember[] };
  /** patent é a etiqueta mostrada ao lado da etiqueta do INESC TEC. */
  origins: { badge: string; patent: string; title: string; paragraphs: string[]; logoAlt: string };
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

// Founders pela ordem em que aparecem; as fotos estão em public/images/team/.
const founders: { name: string; photo?: string }[] = [
  { name: 'Henrique Piqueiro', photo: 'images/team/henrique-piqueiro.jpg' },
  { name: 'Ana Silva', photo: 'images/team/ana-silva.jpg' },
  { name: 'Romão Santos', photo: 'images/team/romao-santos.jpg' },
  { name: 'Pedro Senna', photo: 'images/team/pedro-senna.jpg' },
  { name: 'António Almeida', photo: 'images/team/antonio-almeida.jpg' },
];

/** Junta nome e foto de cada founder ao cargo e descrição de uma língua (mesma ordem). */
const withFounders = (texts: { role: string; bio: string }[]): TeamMember[] =>
  founders.map((founder, i) => ({ ...founder, ...texts[i] }));

const pt: AboutContent = {
  meta: {
    title: 'Sobre — SymHive',
    description: 'A SymHive é uma spin-off do INESC TEC dedicada à geração automática de modelos de simulação para a indústria.',
  },
  hero: {
    badge: 'Sobre a SymHive',
    titleAmber: 'Construída por pessoas que conhecem',
    titleCyan: 'a simulação e a operação.',
    lead: 'Somos uma spin-off dedicada à geração automática de modelos de simulação para sistemas industriais complexos.',
  },
  story: {
    title: 'Porque existimos.',
    mission: 'Testar uma ideia deve ser tão rápido como tê-la.',
    paragraphs: [
      'Passámos anos ao lado de equipas de produção e logística que tinham de decidir sem tempo para testar. Vimos estudos de simulação demorarem meses e chegarem quando a operação já tinha mudado. Durante o programa TechLaunch, falámos com mais de 100 parceiros industriais para chegar a esta solução.',
      'Criámos a SymHive para que cada decisão seja testada antes de chegar ao terreno, quando há pessoas, prazos e investimentos em jogo.',
    ],
    facts: [
      'Decidir com confiança, não por intuição',
      'Tecnologia ao serviço de quem opera',
      'Cada projeto torna o seguinte mais rápido',
    ],
  },
  team: {
    title: 'Quem constrói a SymHive.',
    description: 'A equipa {acronym}.',
    members: withFounders([
      { role: 'Estratégia e Engenharia', bio: 'Lidera a visão e a estratégia da empresa, ligando a simulação aos sistemas de negócio que movem as empresas industriais.' },
      { role: 'Engenharia de Soluções', bio: 'Lidera a modelação e a execução técnica das nossas soluções de simulação.' },
      { role: 'Arquitetura de Sistemas', bio: 'Responsável pela arquitetura tecnológica. Traduz os desafios de negócio em soluções técnicas e define como tudo se interliga numa só plataforma.' },
      { role: 'Financeiro e Administrativo', bio: 'Assegura a base administrativa, jurídica e financeira da equipa, transformando a estratégia em planos operacionais.' },
      { role: 'Crescimento e Estratégia', bio: 'Traz um conhecimento profundo de vendas industriais e maturidade digital, impulsionando o crescimento comercial e as relações estratégicas.' },
    ]),
  },
  origins: {
    badge: 'INESC TEC',
    patent: 'Patente pendente',
    title: 'Origem na investigação.',
    paragraphs: [
      'A SymHive é uma spin-off que nasce da investigação em simulação, otimização e gémeos digitais desenvolvida no INESC TEC e de anos de projetos com a indústria.',
      'Hoje levamos esse conhecimento do laboratório para o chão de fábrica, numa plataforma que fica mais inteligente a cada projeto e que permite a qualquer empresa industrial tomar decisões informadas dentro da fábrica.',
      'A tecnologia de geração automática de modelos tem um pedido de patente pendente.',
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
    description: 'SymHive is an INESC TEC spin-off dedicated to the automatic generation of simulation models for industry.',
  },
  hero: {
    badge: 'About SymHive',
    titleAmber: 'Built by people who know',
    titleCyan: 'simulation and operations.',
    lead: 'We are a spin-off dedicated to the automatic generation of simulation models for complex industrial systems.',
  },
  story: {
    title: 'Why we exist.',
    mission: 'Testing an idea should be as fast as having it.',
    paragraphs: [
      'We spent years alongside production and logistics teams who had to decide with no time to test. We saw simulation studies take months and arrive when the operation had already changed. During the TechLaunch programme, we spoke with more than 100 industrial partners to arrive at this solution.',
      'We created SymHive so that every decision is tested before it reaches the shop floor, when people, deadlines and investments are at stake.',
    ],
    facts: [
      'Deciding with confidence, not gut feeling',
      'Technology that serves the people who operate',
      'Every project makes the next one faster',
    ],
  },
  team: {
    title: 'The people building SymHive.',
    description: 'The {acronym} team.',
    members: withFounders([
      { role: 'Strategy & Engineering', bio: "Leads the company's vision and strategy, connecting simulation with the business systems that drive industrial companies." },
      { role: 'Solutions Engineering', bio: 'Leads the modelling and technical delivery of our simulation solutions.' },
      { role: 'Systems Architect', bio: 'Responsible for the technology architecture. Translates business challenges into technical solutions and defines how everything connects into a single platform.' },
      { role: 'Financial & Administrative', bio: 'Provides the administrative, legal and financial backbone of the team, turning strategy into operational plans.' },
      { role: 'Growth & Strategy', bio: 'Brings deep knowledge of industrial sales and digital maturity, driving commercial growth and strategic relationships.' },
    ]),
  },
  origins: {
    badge: 'INESC TEC',
    patent: 'Patent pending',
    title: 'Research origins.',
    paragraphs: [
      'SymHive is a spin-off born from research in simulation, optimization and digital twins at INESC TEC, and from years of projects with industry.',
      'Today we take that knowledge from the lab to the shop floor, in a platform that gets smarter with every project and lets any industrial company make informed decisions inside the factory.',
      'Our automatic model generation technology is patent pending.',
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
