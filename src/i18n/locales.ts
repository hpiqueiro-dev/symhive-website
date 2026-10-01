export const locales = ['pt', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pt';

export const localeMeta: Record<Locale, { htmlLang: string; ogLocale: string; label: string; name: string }> = {
  pt: { htmlLang: 'pt-PT', ogLocale: 'pt_PT', label: 'PT', name: 'Português' },
  en: { htmlLang: 'en', ogLocale: 'en_GB', label: 'EN', name: 'English' },
};

export const pages = ['home', 'product', 'cases', 'about'] as const;
export type Page = (typeof pages)[number];

// Segmento do URL de cada página, por língua. Tem de coincidir com os ficheiros em src/pages/.
const slugs: Record<Page, Record<Locale, string>> = {
  home: { pt: '', en: '' },
  product: { pt: 'produto', en: 'product' },
  cases: { pt: 'casos-de-estudo', en: 'case-studies' },
  about: { pt: 'sobre', en: 'about' },
};

/** Caminho de uma página numa língua, já com o caminho base do site. */
export function pagePath(locale: Locale, page: Page = 'home'): string {
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  const root = locale === defaultLocale ? base : `${base}${locale}/`;
  return slugs[page][locale] ? `${root}${slugs[page][locale]}/` : root;
}
