<script lang="ts">
	let isDark: boolean = false;

	function switchTheme() {
		isDark = !isDark;
		const themeAsString = isDark ? "light" : "dark";
		document.documentElement.classList.toggle("dark");
		document.cookie = `siteTheme=${themeAsString};max-age=31536000;path="/"`;
	}
</script>

<button on:click={switchTheme} class="bg-m-9 hover:bg-m-10 dark:bg-md-9 dark:hover:bg-md-10 p-3 rounded-2 border-none"
	>Theme switcher</button
>
