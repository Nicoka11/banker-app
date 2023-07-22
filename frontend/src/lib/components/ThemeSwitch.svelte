<script lang="ts">

	let isDark: boolean = false;

	function switchTheme() {
		isDark = !isDark;
		const themeAsString = isDark ? "light" : "dark";
		document.documentElement.classList.toggle("dark");
		document.cookie = `siteTheme=${themeAsString};max-age=31536000;path="/"`;
	}
</script>

<button on:click={switchTheme}>Theme switcher</button>
