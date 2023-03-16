import { defineConfig } from 'astro/config';
import autolinkHeadings from 'remark-autolink-headings';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [[autolinkHeadings, { behavior: 'prepend' }]],
    // syntaxHighlight: 'prism'
  }
});