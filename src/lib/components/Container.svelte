<script>
	import { flex } from "styled-system/patterns";
</script>

<div
	class={`${flex({
		maxW: "container.md",
		w: "full",
		mx: "auto",
		px: "3",
		align: "center",
		direction: "column"
	})} ${$$props.class || ""}`}
>
	<slot />
</div>
