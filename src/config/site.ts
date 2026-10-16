export const site = {
  name: 'SymHive',
  // Endereço usado por todos os botões de contacto (demonstração, piloto e projeto).
  contactEmail: 'geral@symhive.pt' as string | null,
  contactPhone: '+351 936 331 825' as string | null,
};

export function contactHref(subject: string): string | null {
  return site.contactEmail ? `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}` : null;
}
