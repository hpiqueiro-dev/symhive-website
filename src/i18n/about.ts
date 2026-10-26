import type { PageHeroContent, PageMeta } from './common';
import type { Locale } from './locales';

// Conteúdo provisório. Sem foto, cada founder mostra as iniciais.

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  /** Caminho em public/, por exemplo 'images/team/henrique-piqueiro.jpg'. Sem foto, mostra as iniciais. */
  photo?: string;
  /** URL do perfil de LinkedIn. Sem URL, o ícone não aparece. */
  linkedin?: string;
}

export interface AboutContent {
  meta: PageMeta;
  hero: PageHeroContent;
  story: { title: string; mission: string; paragraphs: string[]; facts: string[] };
  /** linkedinLabel antecede o nome do founder no texto acessível do ícone de LinkedIn. */
  team: { title: string; linkedinLabel: string; members: TeamMember[] };
  /** patent é a etiqueta mostrada ao lado da etiqueta «Com o apoio do INESC TEC». */
  origins: { badge: string; patent: string; title: string; paragraphs: string[]; logoAlt: string };
  /**
   * Última secção: informação de contactos. value null mostra «pending».
   * O email e o telefone vêm de src/config/site.ts; os restantes valores ficam aqui.
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
// Em linkedin, o URL completo do perfil (por exemplo 'https://www.linkedin.com/in/nome/').
const founders: { name: string; photo?: string; linkedin?: string }[] = [
  { name: 'Henrique Piqueiro', photo: 'images/team/henrique-piqueiro.jpg', linkedin: 'https://www.linkedin.com/in/henrique-piqueiro-4a10b7136/' },
  { name: 'Ana Silva', photo: 'images/team/ana-silva.jpg', linkedin: 'https://www.linkedin.com/in/ana-carolina-silva-4ab200276/' },
  { name: 'Romão Santos', photo: 'images/team/romao-santos.jpg', linkedin: 'https://www.linkedin.com/in/romaosantos/' },
  { name: 'Pedro Senna', photo: 'images/team/pedro-senna.jpg', linkedin: 'https://www.linkedin.com/in/pedro-p-senna33/' },
  { name: 'António Almeida', photo: 'images/team/antonio-almeida.jpg', linkedin: 'https://www.linkedin.com/in/almeidan7/' },
];

/** Junta nome, foto e LinkedIn de cada founder ao cargo e descrição de uma língua (mesma ordem). */
const withFounders = (texts: { role: string; bio: string }[]): TeamMember[] =>
  founders.map((founder, i) => ({ ...founder, ...texts[i] }));

const pt: AboutContent = {
  meta: {
    title: 'Sobre — SymHive',
    description: 'Com o apoio do INESC TEC, a SymHive dedica-se à geração automática de modelos de simulação para a indústria.',
  },
  hero: {
    badge: 'Sobre a SymHive',
    titleAmber: 'Construída por pessoas que conhecem',
    titleCyan: 'a simulação e a operação',
    lead: 'Com o apoio do INESC TEC, dedicamo-nos à geração automática de modelos de simulação para sistemas industriais complexos.',
  },
  story: {
    title: 'Porque existimos',
    mission: 'Testar uma ideia deve ser tão rápido como tê-la.',
    paragraphs: [
      'Passámos anos ao lado de equipas de produção e logística que tinham de decidir sem tempo para testar. Vimos estudos de simulação demorarem meses e chegarem quando a operação já tinha mudado. A participação no programa TechLaunch foi decisiva para desenvolvermos a solução e conhecermos o mercado, lado a lado com quem toma decisões no terreno.',
      'Criámos a SymHive para que cada decisão seja testada antes de chegar ao terreno, quando há pessoas, prazos e investimentos em jogo.',
    ],
    facts: [
      '+100 conversas com a indústria no programa TechLaunch',
      'Mais de 10 projetos industriais no INESC TEC',
      'Experiência em simulação, otimização e engenharia industrial',
    ],
  },
  team: {
    title: 'Quem constrói a SymHive',
    linkedinLabel: 'LinkedIn de',
    members: withFounders([
      { role: 'Estratégia e Engenharia', bio: 'Lidera a visão e a estratégia da empresa, ligando a simulação aos sistemas de negócio que movem as empresas industriais.' },
      { role: 'Engenharia de Soluções', bio: 'Lidera a modelação e a execução técnica das nossas soluções de simulação.' },
      { role: 'Arquitetura de Sistemas', bio: 'Responsável pela arquitetura tecnológica. Traduz os desafios de negócio em soluções técnicas e define como tudo se interliga numa só plataforma.' },
      { role: 'Financeiro e Administrativo', bio: 'Assegura a base administrativa, jurídica e financeira da equipa, transformando a estratégia em planos operacionais.' },
      { role: 'Crescimento e Estratégia', bio: 'Traz um conhecimento profundo de vendas industriais e maturidade digital, impulsionando o crescimento comercial e as relações estratégicas.' },
    ]),
  },
  origins: {
    badge: 'Com o apoio do INESC TEC',
    patent: 'Patente pendente',
    title: 'Origem na investigação',
    paragraphs: [
      'Com o apoio do INESC TEC, a SymHive nasce da investigação em simulação, otimização e gémeos digitais e de anos de projetos com a indústria.',
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
    description: 'Backed by INESC TEC, SymHive is dedicated to the automatic generation of simulation models for industry.',
  },
  hero: {
    badge: 'About SymHive',
    titleAmber: 'Built by people who know',
    titleCyan: 'simulation and operations',
    lead: 'Backed by INESC TEC, we are dedicated to the automatic generation of simulation models for complex industrial systems.',
  },
  story: {
    title: 'Why we exist',
    mission: 'Testing an idea should be as fast as having it.',
    paragraphs: [
      'We spent years alongside production and logistics teams who had to decide with no time to test. We saw simulation studies take months and arrive when the operation had already changed. Taking part in the TechLaunch programme was decisive in developing the solution and getting to know the market, alongside the people who make decisions on the ground.',
      'We created SymHive so that every decision is tested before it reaches the shop floor, when people, deadlines and investments are at stake.',
    ],
    facts: [
      '100+ conversations with industry in the TechLaunch programme',
      '10+ industrial projects at INESC TEC',
      'Experience in simulation, optimization and industrial engineering',
    ],
  },
  team: {
    title: 'The people building SymHive',
    linkedinLabel: 'LinkedIn profile of',
    members: withFounders([
      { role: 'Strategy & Engineering', bio: "Leads the company's vision and strategy, connecting simulation with the business systems that drive industrial companies." },
      { role: 'Solutions Engineering', bio: 'Leads the modelling and technical delivery of our simulation solutions.' },
      { role: 'Systems Architect', bio: 'Responsible for the technology architecture. Translates business challenges into technical solutions and defines how everything connects into a single platform.' },
      { role: 'Financial & Administrative', bio: 'Provides the administrative, legal and financial backbone of the team, turning strategy into operational plans.' },
      { role: 'Growth & Strategy', bio: 'Brings deep knowledge of industrial sales and digital maturity, driving commercial growth and strategic relationships.' },
    ]),
  },
  origins: {
    badge: 'Backed by INESC TEC',
    patent: 'Patent pending',
    title: 'Research origins',
    paragraphs: [
      'Backed by INESC TEC, SymHive was born from research in simulation, optimization and digital twins, and from years of projects with industry.',
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
