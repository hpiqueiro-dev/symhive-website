export const site = {
  name: 'SymHive',
  // Substituir pelo endereço público quando estiver definido. Ativa os botões de contacto.
  contactEmail: null as string | null,
};

export function contactHref(subject: string): string | null {
  return site.contactEmail ? `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}` : null;
}
