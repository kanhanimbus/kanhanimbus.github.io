// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import markdoc from '@astrojs/markdoc';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  markdown: {
      smartypants: false,
  },

  integrations: [mdx(), markdoc(), icon()],
  site: 'https://kanhanimbus.github.io/',
  base: ''
})