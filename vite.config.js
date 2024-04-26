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
			['font-spacemono', { 'font-family': 'Space Mono' }]
		],
		shortcuts: {
			'button': 'no-underline text-current text-center hover:scale-105 duration-250 ease-out rounded-full bg-purple-800 text-white b-none py-2 px-10 mt-5 text-xl font-bold -spacing-1 flex items-center justify-center'
		}
	})]
});
