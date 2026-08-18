// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  markdown: {
      smartypants: false,
  },

  integrations: [mdx(), markdoc()],
  site: 'https://kanhanimbus.github.io/website',
  base: ''
})