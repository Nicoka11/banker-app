import { defineSemanticTokens, defineTokens } from "@pandacss/dev";

export const tokens = defineTokens({
	colors: {
		sky: {
			1: { value: "#fafdfe" },
			2: { value: "#f2fcfd" },
			3: { value: "#e7f9fb" },
			4: { value: "#d8f3f6" },
			5: { value: "#c4eaef" },
			6: { value: "#aadee6" },
			7: { value: "#84cdda" },
			8: { value: "#3db9cf" },
			9: { value: "#05a2c2" },
			10: { value: "#0894b3" },
			11: { value: "#0c7792" },
			12: { value: "#04313c" }
		},
		skyDark: {
			1: { value: "#07191d" },
			2: { value: "#061e24" },
			3: { value: "#072830" },
			4: { value: "#07303b" },
			5: { value: "#073844" },
			6: { value: "#064150" },
			7: { value: "#045063" },
			8: { value: "#00647d" },
			9: { value: "#05a2c2" },
			10: { value: "#00b1cc" },
			11: { value: "#00c2d7" },
			12: { value: "#e1f8fa" }
		}
	},
	sizes: {
		container: {
			sm: { value: "640px" },
			md: { value: "768px" },
			lg: { value: "1024px" },
			xl: { value: "1280px" },
			"2xl": { value: "1536px" }
		}
	}
});

export const semanticTokens = defineSemanticTokens({
	colors: {
		main: {
			1: {
				value: { base: "{colors.sky.1}", _dark: "{colors.skyDark.1}" }
			},
			2: {
				value: { base: "{colors.sky.2}", _dark: "{colors.skyDark.2}" }
			},
			3: {
				value: { base: "{colors.sky.3}", _dark: "{colors.skyDark.3}" }
			},
			4: {
				value: { base: "{colors.sky.4}", _dark: "{colors.skyDark.4}" }
			},
			5: {
				value: { base: "{colors.sky.5}", _dark: "{colors.skyDark.5}" }
			},
			6: {
				value: { base: "{colors.sky.6}", _dark: "{colors.skyDark.6}" }
			},
			7: {
				value: { base: "{colors.sky.7}", _dark: "{colors.skyDark.7}" }
			},
			8: {
				value: { base: "{colors.sky.8}", _dark: "{colors.skyDark.8}" }
			},
			9: {
				value: { base: "{colors.sky.9}", _dark: "{colors.skyDark.9}" }
			},
			10: {
				value: { base: "{colors.sky.10}", _dark: "{colors.skyDark.10}" }
			},
			11: {
				value: { base: "{colors.sky.11}", _dark: "{colors.skyDark.11}" }
			},
			12: {
				value: { base: "{colors.sky.12}", _dark: "{colors.skyDark.12}" }
			}
		}
	}
});
