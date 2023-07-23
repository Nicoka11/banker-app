import { defineConfig } from "unocss";
import { mint, mintA, mintDark, mintDarkA, sage, sageA, sageDark, sageDarkA } from "./theme/colors";

export default defineConfig({
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
