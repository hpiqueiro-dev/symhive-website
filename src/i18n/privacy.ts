import type { PageHeroContent, PageMeta } from './common';
import type { Locale } from './locales';

// RASCUNHO: texto preparado com base no que o site faz hoje (alojamento no GitHub Pages, sem cookies,
// sem analytics e contacto por email). Tem de ser validado juridicamente antes de ser publicado.
// Se o site passar a ter formulários, analytics ou cookies, esta política tem de ser revista.

export interface PrivacyContent {
  meta: PageMeta;
  hero: PageHeroContent;
  updated: { label: string; value: string | null };
  /** Identificação da empresa (DL 7/2004). value null mostra «pending». */
  company: { title: string; items: { label: string; value: string | null }[] };
  pending: string;
  sections: { title: string; paragraphs: string[]; list?: string[] }[];
}

const pt: PrivacyContent = {
  meta: {
    title: 'Política de privacidade — SymHive',
    description: 'Como a SymHive trata os dados pessoais de quem visita o site e entra em contacto connosco.',
  },
  hero: {
    badge: 'Legal',
    titleAmber: 'Política de',
    titleCyan: 'privacidade.',
    lead: 'Como tratamos os dados pessoais de quem visita este site ou entra em contacto connosco.',
  },
  updated: { label: 'Última atualização', value: null },
  company: {
    title: 'Responsável pelo tratamento',
    items: [
      { label: 'Denominação', value: null },
      { label: 'NIF', value: null },
      { label: 'Morada', value: null },
      { label: 'Email', value: null },
    ],
  },
  pending: 'Por preencher',
  sections: [
    {
      title: 'Que dados tratamos',
      paragraphs: ['Este site não tem formulários, não pede registo e não usa cookies nem ferramentas de análise. Tratamos apenas:'],
      list: [
        'Dados técnicos de acesso, como o endereço IP, o navegador e a data do pedido, registados automaticamente pelo serviço de alojamento.',
        'Os dados que nos envia quando entra em contacto por email, como o nome, o email, a empresa e o conteúdo da mensagem.',
      ],
    },
    {
      title: 'Para que usamos os dados',
      paragraphs: [
        'Os dados técnicos servem para disponibilizar o site e garantir a sua segurança, com base no nosso interesse legítimo.',
        'Os dados enviados por email servem para responder ao seu pedido e, se for o caso, preparar uma proposta, com base nas diligências pré-contratuais ou no nosso interesse legítimo em responder a quem nos contacta.',
      ],
    },
    {
      title: 'Com quem partilhamos',
      paragraphs: [
        'O site está alojado no GitHub Pages, da GitHub, Inc., que trata os dados técnicos de acesso como prestador de serviços. A GitHub pode tratar dados fora do Espaço Económico Europeu, com as garantias previstas no RGPD, como o EU-US Data Privacy Framework ou cláusulas contratuais-tipo.',
        'Não vendemos nem cedemos dados pessoais a terceiros para fins de marketing.',
      ],
    },
    {
      title: 'Durante quanto tempo',
      paragraphs: [
        'Os dados técnicos são conservados pelo prestador de alojamento durante o período definido por este. Os emails são conservados enquanto forem necessários para acompanhar o contacto e cumprir obrigações legais.',
      ],
    },
    {
      title: 'Cookies',
      paragraphs: ['Este site não usa cookies nem tecnologias semelhantes para acompanhar a sua navegação. As fontes e imagens são servidas pelo próprio site, sem recurso a serviços de terceiros.'],
    },
    {
      title: 'Os seus direitos',
      paragraphs: [
        'Pode pedir o acesso, a retificação, o apagamento, a limitação ou a portabilidade dos seus dados, e opor-se ao seu tratamento, através do email indicado acima.',
        'Tem também o direito de apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD), em www.cnpd.pt.',
      ],
    },
    {
      title: 'Alterações a esta política',
      paragraphs: ['Podemos atualizar esta política quando o site ou a forma como tratamos os dados mudar. A data da última atualização aparece no topo da página.'],
    },
  ],
};

const en: PrivacyContent = {
  meta: {
    title: 'Privacy policy — SymHive',
    description: 'How SymHive processes the personal data of people who visit the site and get in touch with us.',
  },
  hero: {
    badge: 'Legal',
    titleAmber: 'Privacy',
    titleCyan: 'policy.',
    lead: 'How we process the personal data of people who visit this site or get in touch with us.',
  },
  updated: { label: 'Last updated', value: null },
  company: {
    title: 'Data controller',
    items: [
      { label: 'Company name', value: null },
      { label: 'Tax number (NIF)', value: null },
      { label: 'Address', value: null },
      { label: 'Email', value: null },
    ],
  },
  pending: 'To be confirmed',
  sections: [
    {
      title: 'What data we process',
      paragraphs: ['This site has no forms, does not ask you to register and does not use cookies or analytics tools. We only process:'],
      list: [
        'Technical access data, such as IP address, browser and request date, logged automatically by the hosting service.',
        'The data you send us when you get in touch by email, such as your name, email, company and the content of your message.',
      ],
    },
    {
      title: 'What we use the data for',
      paragraphs: [
        'Technical data is used to deliver the site and keep it secure, based on our legitimate interest.',
        'Data sent by email is used to reply to your request and, where relevant, prepare a proposal, based on pre-contractual steps or our legitimate interest in replying to those who contact us.',
      ],
    },
    {
      title: 'Who we share it with',
      paragraphs: [
        'The site is hosted on GitHub Pages, by GitHub, Inc., which processes technical access data as a service provider. GitHub may process data outside the European Economic Area, with the safeguards provided for in the GDPR, such as the EU-US Data Privacy Framework or standard contractual clauses.',
        'We do not sell or share personal data with third parties for marketing purposes.',
      ],
    },
    {
      title: 'How long we keep it',
      paragraphs: [
        'Technical data is kept by the hosting provider for the period it defines. Emails are kept for as long as needed to follow up on the contact and meet legal obligations.',
      ],
    },
    {
      title: 'Cookies',
      paragraphs: ['This site does not use cookies or similar technologies to track your browsing. Fonts and images are served by the site itself, without third-party services.'],
    },
    {
      title: 'Your rights',
      paragraphs: [
        'You can request access to, rectification, erasure, restriction or portability of your data, and object to its processing, using the email above.',
        'You also have the right to lodge a complaint with the Portuguese data protection authority (CNPD), at www.cnpd.pt.',
      ],
    },
    {
      title: 'Changes to this policy',
      paragraphs: ['We may update this policy when the site or the way we process data changes. The date of the last update is shown at the top of the page.'],
    },
  ],
};

export const privacyContent: Record<Locale, PrivacyContent> = { pt, en };
