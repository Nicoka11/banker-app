<script lang="ts">
	import { css } from "styled-system/css";

	let isDark: boolean = false;

	function switchTheme() {
		isDark = !isDark;
		const themeAsString = isDark ? "light" : "dark";
		document.documentElement.classList.toggle("dark");
		document.cookie = `siteTheme=${themeAsString};max-age=31536000;path="/"`;
	}

	const style = css({
		bg: "main.9",
		borderRadius: "lg",
		p: "3",
		cursor: "pointer",
		color: "main.12",
		_hover: {
			bg: "main.10"
		}
	});
</script>

<button on:click={switchTheme} class={`${style} ${$$props.class || ""}`}>Theme switcher</button>
