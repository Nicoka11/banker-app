<script lang="ts">
	import { flex } from "styled-system/patterns/flex";
</script>

<div
	class={`${flex({
		p: "6",
		bg: "main.3",
		borderRadius: "md",
		direction: "column",
		width: "full"
	})} ${$$props.class || ""}`}
>
	<slot />
</div>
