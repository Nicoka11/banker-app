<script lang="ts">
	import Card from "$lib/components/Card.svelte";
	import Container from "$lib/components/Container.svelte";
	import { css } from "styled-system/css";
	import { button, inputstyles } from "$lib/styles";
	import { vstack } from "styled-system/patterns";
</script>

<svelte:head>
	<title>Banker - Login</title>
</svelte:head>

<main>
	<Container class={css({ minH: "100vh", justifyContent: "center" })}>
		<Card class={css({ alignItems: "center" })}>
			<form class={vstack({ w: "full", gap: "3" })}>
				<h1>Login</h1>
				<input placeholder="email" type="email" class={css(inputstyles)} />
				<input placeholder="password" type="password" class={css(inputstyles)} />
				<input type="submit" value="login" class={css(button.primary)} />
			</form>
		</Card>
	</Container>
</main>

<style>
</style>
