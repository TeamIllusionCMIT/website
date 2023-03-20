import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess(), mdsvex({
		extension: ".mdx"
	})],
	kit: {
		adapter: adapter({
			precompress: true,
		})
	},
	extensions: [".svelte", ".mdx"],
};

export default config;
