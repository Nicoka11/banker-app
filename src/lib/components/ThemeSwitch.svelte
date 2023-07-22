<script lang="ts">
	import { button } from "$lib/styles";
	import { css } from "styled-system/css";

	let isDark: boolean = false;

	function switchTheme() {
		isDark = !isDark;
		const themeAsString = isDark ? "light" : "dark";
		document.documentElement.classList.toggle("dark");
		document.cookie = `siteTheme=${themeAsString};max-age=31536000;path="/"`;
	}
</script>

<button on:click={switchTheme} class={`${css(button.primary)} ${$$props.class || ""}`}
	>Theme switcher</button
>
