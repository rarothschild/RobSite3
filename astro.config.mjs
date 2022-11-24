import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://rarothschild.github.io',
  base: '/RobIndustires',
  integrations: [tailwind()]
});