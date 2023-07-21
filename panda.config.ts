import { defineConfig } from "@pandacss/dev";
import { tokens, semanticTokens } from "./panda-theme";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx,svelte}", "./pages/**/*.{js,jsx,ts,tsx,svelte}"],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			tokens
		},
		semanticTokens
	},

	// The output directory for your css system
	outdir: "styled-system"
});
