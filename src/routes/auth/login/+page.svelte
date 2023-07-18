<script lang="ts">
	import Card from "$lib/components/Card.svelte";
	import ThemeSwitch from "$lib/components/ThemeSwitch.svelte";
</script>

<svelte:head>
	<title>Banker - Login</title>
</svelte:head>

<main class:css={1 + 3 === 4}>
	<Card>
		<h1 class="h1">Login</h1>
		<ThemeSwitch />
	</Card>
</main>

<style>
</style>
