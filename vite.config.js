import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from "unocss/vite";
import { presetUno } from '@unocss/preset-uno';

export default defineConfig({
	plugins: [sveltekit(), UnoCSS({
		presets: [presetUno()],
		rules: [
			// cursor
			[/^cursor-emoji-(\w+)$/, ([, w]) => ({ cursor: `url('/emojis/${w}.webp') 64 64, auto` })],
			[/^spacing-(\d)$/, ([, d]) => ({ 'letter-spacing': `${d}px` })],
			['font-spacemono', {'font-family': 'Space Mono'}]
		]
	})]
});
