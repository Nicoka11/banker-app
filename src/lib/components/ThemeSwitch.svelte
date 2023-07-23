<script lang="ts">
	import { isDark } from "$lib/stores/theme";

	let dark: boolean = $isDark;
	function switchTheme() {
		dark = !dark;
		const themeAsString = dark ? "dark" : "light";
		document.documentElement.classList.toggle("dark");
		console.log(`siteTheme=${themeAsString};max-age=31536000;path="/"`);
		document.cookie = `siteTheme=${themeAsString};max-age=31536000;path="/"`;
	}
</script>

<button
	on:click={switchTheme}
	class="bg-m-9 hover:bg-m-10 dark:bg-mad-5 dark:hover:bg-mad-6 dark:c-md-12 p-3 rounded-2 border-none"
	>Theme switcher
</button>
