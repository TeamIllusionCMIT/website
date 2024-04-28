// uno.config.ts
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
	presets: [presetUno()],
	rules: [
		// cursor
		[
			/^cursor-emoji-(\w+)$/,
			([, w]) => ({ cursor: `url('/emojis/${w}.webp') 64 64, auto` }),
		],
		[/^spacing-(\d)$/, ([, d]) => ({ "letter-spacing": `${d}px` })],
		["font-spacemono", { "font-family": "Space Mono" }],
	],
	shortcuts: {
		button:
			"no-underline text-current text-center hover:scale-105 duration-250 ease-out rounded-full bg-[#6000FF] text-white b-none py-2 px-5 md:px-10 mt-5 text-xl font-bold -spacing-1 flex items-center justify-center",
		"section-wrapper": "h-screen w-screen font-[Inter]",
		section:
			"mx-auto flex flex-col items-center justify-center text-white lg:max-w-screen-xl w-screen h-screen m-auto overflow-x-clip",
	},
});
