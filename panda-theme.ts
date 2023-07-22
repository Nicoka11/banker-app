import { defineSemanticTokens, defineTokens } from "@pandacss/dev";

export const tokens = defineTokens({
	colors: {
		cyan: {
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
		cyanAlpha: {
			1: { value: "hsla(195, 95.2%, 41.2%, 0.020)" },
			2: { value: "hsla(185, 99.9%, 42.3%, 0.051)" },
			3: { value: "hsla(186, 97.8%, 42.2%, 0.095)" },
			4: { value: "hsla(186, 99.9%, 38.5%, 0.153)" },
			5: { value: "hsla(187, 99.3%, 36.6%, 0.232)" },
			6: { value: "hsla(188, 99.4%, 35.4%, 0.334)" },
			7: { value: "hsla(189, 99.6%, 35.0%, 0.483)" },
			8: { value: "hsla(189, 99.9%, 37.6%, 0.761)" },
			9: { value: "hsla(190, 100%, 37.8%, 0.980)" },
			10: { value: "hsla(191, 99.9%, 34.6%, 0.969)" },
			11: { value: "hsla(192, 100%, 27.6%, 0.953)" },
			12: { value: "hsla(192, 100%, 11.0%, 0.980)" }
		},
		cyanDark: {
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
		},
		cyanAlphaDark: {
			1: { value: "hsla(0, 0%, 0%, 0)" },
			2: { value: "hsla(196, 100%, 50.0%, 0.031)" },
			3: { value: "hsla(192, 98.0%, 50.9%, 0.085)" },
			4: { value: "hsla(194, 99.6%, 51.3%, 0.133)" },
			5: { value: "hsla(192, 99.5%, 51.3%, 0.173)" },
			6: { value: "hsla(193, 99.7%, 50.4%, 0.226)" },
			7: { value: "hsla(192, 100%, 50.0%, 0.310)" },
			8: { value: "hsla(193, 100%, 50.0%, 0.425)" },
			9: { value: "hsla(190, 99.8%, 50.8%, 0.731)" },
			10: { value: "hsla(188, 100%, 50.0%, 0.775)" },
			11: { value: "hsla(186, 100%, 49.9%, 0.824)" },
			12: { value: "hsla(185, 99.8%, 95.1%, 0.978)" }
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
				value: { base: "{colors.cyan.1}", _dark: "{colors.cyanDark.1}" }
			},
			2: {
				value: { base: "{colors.cyan.2}", _dark: "{colors.cyanDark.2}" }
			},
			3: {
				value: { base: "{colors.cyan.3}", _dark: "{colors.cyanDark.3}" }
			},
			4: {
				value: { base: "{colors.cyan.4}", _dark: "{colors.cyanDark.4}" }
			},
			5: {
				value: { base: "{colors.cyan.5}", _dark: "{colors.cyanDark.5}" }
			},
			6: {
				value: { base: "{colors.cyan.6}", _dark: "{colors.cyanDark.6}" }
			},
			7: {
				value: { base: "{colors.cyan.7}", _dark: "{colors.cyanDark.7}" }
			},
			8: {
				value: { base: "{colors.cyan.8}", _dark: "{colors.cyanDark.8}" }
			},
			9: {
				value: { base: "{colors.cyan.9}", _dark: "{colors.cyanDark.9}" }
			},
			10: {
				value: { base: "{colors.cyan.10}", _dark: "{colors.cyanDark.10}" }
			},
			11: {
				value: { base: "{colors.cyan.11}", _dark: "{colors.cyanDark.11}" }
			},
			12: {
				value: { base: "{colors.cyan.12}", _dark: "{colors.cyanDark.12}" }
			}
		},
		mainAlpha: {
			1: {
				value: { base: "{colors.cyanAlpha.1}", _dark: "{colors.cyanAlphaDark.1}" }
			},
			2: {
				value: { base: "{colors.cyanAlpha.2}", _dark: "{colors.cyanAlphaDark.2}" }
			},
			3: {
				value: { base: "{colors.cyanAlpha.3}", _dark: "{colors.cyanAlphaDark.3}" }
			},
			4: {
				value: { base: "{colors.cyanAlpha.4}", _dark: "{colors.cyanAlphaDark.4}" }
			},
			5: {
				value: { base: "{colors.cyanAlpha.5}", _dark: "{colors.cyanAlphaDark.5}" }
			},
			6: {
				value: { base: "{colors.cyanAlpha.6}", _dark: "{colors.cyanAlphaDark.6}" }
			},
			7: {
				value: { base: "{colors.cyanAlpha.7}", _dark: "{colors.cyanAlphaDark.7}" }
			},
			8: {
				value: { base: "{colors.cyanAlpha.8}", _dark: "{colors.cyanAlphaDark.8}" }
			},
			9: {
				value: { base: "{colors.cyanAlpha.9}", _dark: "{colors.cyanAlphaDark.9}" }
			},
			10: {
				value: { base: "{colors.cyanAlpha.10}", _dark: "{colors.cyanAlphaDark.10}" }
			},
			11: {
				value: { base: "{colors.cyanAlpha.11}", _dark: "{colors.cyanAlphaDark.11}" }
			},
			12: {
				value: { base: "{colors.cyanAlpha.12}", _dark: "{colors.cyanAlphaDark.12}" }
			}
		}
	}
});
