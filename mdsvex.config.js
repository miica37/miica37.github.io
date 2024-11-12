import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkGfm from 'remark-gfm';

const config = defineConfig({
  extensions: ['.md', '.svx'],
  remarkPlugins: [[remarkGfm, { underscore: false }]],
});

export default config;