import adapter from "@sveltejs/adapter-netlify";
import {sveltePreprocess} from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [sveltePreprocess()],
	kit: {
		adapter: adapter({
			precompress: true,
		}),
	},
	extensions: [".svelte"],
};

export default config;
