import type { Locale, Page } from './locales';

// Textos partilhados por todas as páginas: navegação, contacto e rodapé.

export interface PageMeta {
  title: string;
  description: string;
}

/** Topo das páginas interiores: o título é dividido em partes âmbar, ciano e branca. */
export interface PageHeroContent {
  badge: string;
  titleAmber: string;
  titleCyan?: string;
  titleRest?: string;
  lead: string;
}

/** Item com hexágono, título e texto (passos, módulos, princípios). */
export interface HexItem {
  title: string;
  description: string;
}

export interface CommonContent {
  skipLink: string;
  nav: {
    label: string;
    menu: string;
    home: string;
    /** Secções da página principal mostradas no submenu «Início». */
    homeSections: { id: string; label: string }[];
    pages: Record<Page, string>;
    languageLabel: string;
    cta: string;
  };
  contact: {
    title: string;
    description: string;
    demo: { label: string; subject: string };
    pilot: { label: string; subject: string };
    pending: string;
  };
  footer: { label: string; poweredBy: string; organisation: string; copyright: string };
}

const pt: CommonContent = {
  skipLink: 'Saltar para o conteúdo',
  nav: {
    label: 'Navegação principal',
    menu: 'Menu',
    home: 'Início',
    homeSections: [
      { id: 'sim', label: 'Simulador' },
      { id: 'impact', label: 'Resultados' },
      { id: 'steps', label: 'Como funciona' },
    ],
    pages: { home: 'Página principal', product: 'Produto', cases: 'Casos de estudo', about: 'Sobre' },
    languageLabel: 'Mudar para inglês',
    cta: 'Pedir demonstração',
  },
  contact: {
    title: 'Veja a sua linha a funcionar em semanas, não em meses.',
    description:
      'Fale-nos de uma decisão de layout, frota ou planeamento. Mostramos como o modelo seria construído a partir dos seus dados.',
    demo: { label: 'Pedir demonstração', subject: 'Pedido de demonstração — SymHive' },
    pilot: { label: 'Iniciar um piloto', subject: 'Projeto-piloto — SymHive' },
    pending: 'Canal de contacto em preparação',
  },
  footer: { label: 'Rodapé', poweredBy: 'Com tecnologia', organisation: 'INESC TEC', copyright: '© SymHive' },
};

const en: CommonContent = {
  skipLink: 'Skip to content',
  nav: {
    label: 'Main',
    menu: 'Menu',
    home: 'Home',
    homeSections: [
      { id: 'sim', label: 'Simulator' },
      { id: 'impact', label: 'Results' },
      { id: 'steps', label: 'How it works' },
    ],
    pages: { home: 'Overview', product: 'Product', cases: 'Case studies', about: 'About' },
    languageLabel: 'Mudar para português',
    cta: 'Request a demo',
  },
  contact: {
    title: 'See your own line running in weeks, not months.',
    description: 'Tell us about a layout, fleet or planning decision. We will show you how the model would be built from your data.',
    demo: { label: 'Request a demo', subject: 'Demo request — SymHive' },
    pilot: { label: 'Start a pilot', subject: 'Pilot project — SymHive' },
    pending: 'Contact channel coming soon',
  },
  footer: { label: 'Footer', poweredBy: 'Powered by', organisation: 'INESC TEC', copyright: '© SymHive' },
};

export const commonContent: Record<Locale, CommonContent> = { pt, en };
