# SymHive Website

Landing page institucional da SymHive, criada com Astro, TypeScript e CSS. O HTML é gerado estaticamente e a página não precisa de JavaScript para navegar.

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

- `src/pages/index.astro`: conteúdo e secções da landing page.
- `src/components/`: cabeçalho, rodapé, título de secção e visualização de simulação.
- `src/styles/global.css`: estilos e tokens da identidade visual.
- `src/config/site.ts`: descrição e endereço de contacto. Definir `contactEmail` para ativar o botão de email.
- `public/images/`: logótipo extraído da apresentação SymHive e imagem para partilha.

## GitHub Pages

O workflow `.github/workflows/deploy.yml` publica a partir de `main`. Em **Settings → Pages**, selecionar **GitHub Actions** como origem. O caminho base e a URL canónica são detetados a partir do nome do repositório durante o build. Para um domínio próprio, definir a variável de repositório `PUBLIC_SITE_URL` com o URL completo (por exemplo, `https://symhive.pt`); nesse caso, o caminho base passa a `/`. A imagem de partilha e o favicon usam o caminho base automaticamente.

O canal de contacto permanece por configurar até existir um endereço público confirmado.
