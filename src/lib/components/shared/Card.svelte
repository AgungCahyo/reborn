<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { RoleTheme } from '$lib/theme';

	let {
		theme,
		tilt = 0,
		tag,
		class: className = '',
		children
	}: {
		theme: RoleTheme;
		tilt?: number;
		tag?: string;
		class?: string;
		children: Snippet;
	} = $props();
</script>

<div
	class="card card--{theme.cardVariant} p-6 {className}"
	style="--tilt:{tilt}deg"
>
	{#if tag}
		<span class="corner-tag" style="background:{theme.accent}; color:{theme.surface}">{tag}</span>
	{/if}
	<div class="relative">
		{@render children()}
	</div>
</div>