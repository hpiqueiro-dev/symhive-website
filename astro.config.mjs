import { defineConfig } from 'astro/config';

const [repositoryOwner, repositoryName] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const isUserOrOrgPage = repositoryName?.endsWith('.github.io');
const base = !process.env.PUBLIC_SITE_URL && process.env.GITHUB_ACTIONS && repositoryName && !isUserOrOrgPage
  ? `/${repositoryName}/`
  : '/';
const site = process.env.PUBLIC_SITE_URL || (process.env.GITHUB_ACTIONS && repositoryOwner
  ? `https://${repositoryOwner}.github.io`
  : undefined);

export default defineConfig({
  output: 'static',
  base,
  ...(site ? { site } : {}),
});
