<script lang="ts">
	import Card from "$lib/components/Card.svelte";
	import Container from "$lib/components/Container.svelte";
</script>

<svelte:head>
	<title>Banker - Login</title>
</svelte:head>

<main>
	<Container >
		<Card >
			<form >
				<h1>Login</h1>
				<input placeholder="email" type="email"  />
				<input placeholder="password" type="password"  />
				<input type="submit" value="login" />
			</form>
		</Card>
	</Container>
</main>

<style>
</style>
