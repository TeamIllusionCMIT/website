import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from "unocss/vite";
import { presetUno } from '@unocss/preset-uno';

export default defineConfig({
	plugins: [sveltekit(), UnoCSS({
		presets: [presetUno()]
	})]
});
