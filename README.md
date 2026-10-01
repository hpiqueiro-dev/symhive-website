# SymHive Website

Landing page institucional da SymHive, criada com Astro, TypeScript e CSS. O HTML é gerado estaticamente em português (`/`) e inglês (`/en/`), com quatro páginas por língua: página principal, Produto (`/produto/`, `/en/product/`), Casos de estudo (`/casos-de-estudo/`, `/en/case-studies/`) e Sobre (`/sobre/`, `/en/about/`). O JavaScript serve apenas para animações, simulador e fecho dos menus; o conteúdo e a navegação funcionam sem ele.

## Desenvolvimento

Requer Node.js 22.12 ou superior.

```bash
npm install
npm run dev
```

Antes de publicar:

```bash
npm run check
npm run build
```

## Conteúdo e configuração

- `src/i18n/`: textos em PT e EN. `common.ts` tem navegação, contacto e rodapé; `home.ts`, `product.ts`, `cases.ts` e `about.ts` têm o conteúdo de cada página. O conteúdo atual é provisório. Em `cases.ts`, cada problema tem a sua lista de casos (`cases`); os casos atuais são genéricos.
- `src/i18n/locales.ts`: línguas, páginas e URL de cada página em cada língua (`pagePath`).
- `src/pages/`: uma rota por página e língua; cada rota apenas renderiza o componente correspondente em `src/components/pages/`.
- `src/layouts/SiteLayout.astro`: cabeçalho, fundo hexagonal, secção de contacto e rodapé comuns a todas as páginas.
- `src/components/home/`: secções da página principal (hero, simulador, impacto, passos).
- `src/components/`: cabeçalho com submenu e menu móvel, rodapé, fundo, topo das páginas interiores (`PageHero`), grelha de hexágonos (`HexGrid`) e contacto.
- `src/styles/global.css`: estilos e tokens da identidade visual.
- `src/config/site.ts`: endereço de contacto. Definir `contactEmail` para ativar os botões «Pedir demonstração» e «Iniciar um piloto».
- `src/assets/fonts/`: Inter, JetBrains Mono e Space Grotesk alojadas localmente (licença OFL). A DM Sans é usada apenas pelos protótipos.
- `public/images/`: logótipo extraído da apresentação SymHive e imagem para partilha.

## Protótipos de design

Abrir `/prototipos/` no servidor de desenvolvimento para comparar a primeira coleção de quatro propostas visuais, ou `/prototipos/novos/` para ver outras quatro direções com SVGs animados editáveis em `public/illustrations/`. Cada proposta tem uma página própria e um seletor fixo para alternar entre elas. A página principal atual permanece em `/`.

As duas propostas finais que combinam as direções escolhidas estão em `/prototipos/finais/`. O painel «Escolhe uma hipótese» é interativo nas duas páginas.

## GitHub Pages

O workflow `.github/workflows/deploy.yml` publica a partir de `main`. Em **Settings → Pages**, selecionar **GitHub Actions** como origem. O caminho base e a URL canónica são detetados a partir do nome do repositório durante o build. Para um domínio próprio, definir a variável de repositório `PUBLIC_SITE_URL` com o URL completo (por exemplo, `https://symhive.pt`); nesse caso, o caminho base passa a `/`. A imagem de partilha e o favicon usam o caminho base automaticamente.

O canal de contacto permanece por configurar até existir um endereço público confirmado.
