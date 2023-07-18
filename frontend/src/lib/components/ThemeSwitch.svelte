<script lang="ts">
	import { css } from "styled-system/css";

	let isDark = false;

	function switchTheme() {
		isDark = !isDark;

		const themeAsString = isDark ? "dark" : "light";
		document.documentElement.dataset.theme = themeAsString;
		document.cookie = `siteTheme=${themeAsString};max-age=31536000;path="/"`;
	}

	const style = css({
		bg: "main.3",
		borderRadius: "lg",
		p: "3",
		_hover: {
			bg: "main.4"
		}
	});
</script>

<button on:click={switchTheme} class={style}>Theme switcher</button>
