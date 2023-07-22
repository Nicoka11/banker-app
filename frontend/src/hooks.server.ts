import type { Handle } from "@sveltejs/kit";

const handle = (async ({ event, resolve }) => {
	const theme = event.cookies.get("siteTheme");

	const response = await resolve(event, {
		transformPageChunk: ({ html }) =>
			html
				.replace("class", `class="${theme}"`)
				.replace("%unocss-svelte-scoped.global%", "unocss_svelte_scoped_global_styles")
	});
	return response;
}) satisfies Handle;

export { handle };
