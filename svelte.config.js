// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// import remarkToc from 'remark-toc';
import { processObsidian } from './src/lib/processObsidian.js';


/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	remarkPlugins: [
		// [ remarkToc, { heading: 'Table of contents', tight: false, maxDepth: 3 } ],
	],
	rehypePlugins: [
		rehypeSlug,
		// [rehypeAutolinkHeadings,{ behavior: 'prepend', properties: { className: 'anchor' }}],
	],
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), processObsidian(), mdsvex(mdsvexOptions)],

	extensions: ['.svelte', '.md'],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		// adapter: adapter({
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: undefined,
		// 	precompress: false,
		// 	strict: false,
		// 	logLevel: 'debug'
		// }),
		alias: {
			'$pages': './src/pages',
		},
		paths: {
			// base: process.env.NODE_ENV === 'production' ? 'https://miica2.github.io/' : ''
		},
		prerender: {
      // handleMissingId: 'ignore', // This will ignore routes that cannot be found during prerendering.
      // handleMissingId(id) {
			// 	console.warn(`Warning: Could not prerender route: ${id}`);
			// 	return 'ignore' // Still ignore, but logs a warning with more info
			// },
			// use relative URLs similar to an anchor tag <a href="/test/1"></a>
			// do not include group layout folders in the path such as /(group)/test/1
			handleHttpError: 'warn',
			entries: [
				'/docs/unreal-characters/animations-retargeting',
				// '/docs/rinrename',
			]
		},
	}
};

export default config;
