import { defineConfig, presetWebFonts } from "unocss";
import { mint, mintA, mintDark, mintDarkA, sage, sageA, sageDark, sageDarkA } from "./theme/colors";

export default defineConfig({
	presets: [
		presetWebFonts({
			provider: "fontshare",
			fonts: {
				heading: "Cabinet Grotesk",
				body: "Satoshi",
				mono: "JetBrains Mono"
			}
		})
	],
	theme: {
		colors: {
			//main
			m: mint,
			md: mintDark,
			ma: mintA,
			mad: mintDarkA,

			// gray
			g: sage,
			gd: sageDark,
			ga: sageA,
			gad: sageDarkA
		}
	}
});
