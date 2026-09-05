import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Si es desplega a GitHub Pages en una subruta (ex: /port-barcelona/), es pot indicar a la variable GITHUB_REPOSITORY o directament a base
  base: process.env.BASE_PATH || '/',
});
