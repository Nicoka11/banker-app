import type { SystemStyleObject } from "styled-system/types";

export const inputstyles: SystemStyleObject = {
	borderRadius: "md",
	padding: "3",
	bg: "transparent",
	borderWidth: "2px",
	borderColor: "main.7",
	w: "full"
};

const buttonDefault: SystemStyleObject = {
	borderRadius: "lg",
	p: "3",
	cursor: "pointer",
	color: "main.12"
};

export const button: { [key: string]: SystemStyleObject } = {
	primary: {
		...buttonDefault,
		bg: "main.9",
		color: "main.12",
		_hover: {
			bg: "main.10"
		}
	},
	secondary: {
		...buttonDefault,
		bg: "mainAlpha.9",
		color: "main.12",
		_hover: {
			bg: "mainAlpha.10"
		}
	},
	ghost: {
		...buttonDefault,
		bg: "transparent",
		color: "main.12",
		_hover: {
			bg: "mainAlpha.4"
		}
	}
};
