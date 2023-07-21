<script lang="ts">
	import Card from "$lib/components/Card.svelte";
	import Container from "$lib/components/Container.svelte";
	import ThemeSwitch from "$lib/components/ThemeSwitch.svelte";
	import { css } from "styled-system/css";
</script>

<svelte:head>
	<title>Banker - Login</title>
</svelte:head>

<main>
	<Container>
		<Card>
			<h1>Login</h1>
			<ThemeSwitch class={css({ maxW: "fit-content" })} />
		</Card>
	</Container>
</main>

<style>
</style>
