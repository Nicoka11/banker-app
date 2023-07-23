import { isDark } from "$lib/stores/theme";
import type { Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
	const theme = event.cookies.get("siteTheme");
	console.log("Theme is", theme);
	if (theme === "dark") {
		console.log("IS DARK");
		isDark.set(true);
	}

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => {
			console.log(isDark, theme);
			return html
			.replace("%unocss-svelte-scoped.global%", "unocss_svelte_scoped_global_styles")
			.replace('class', `class="${isDark ? "dark" : ""}"`)
		}
	});
	return response;
}) satisfies Handle;
