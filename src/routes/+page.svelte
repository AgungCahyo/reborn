<script lang="ts">
	import TriptychPanel from '$lib/components/home/TriptychPanel.svelte';
	import { activeRole } from '$lib/stores/activeRole';
	import { content } from '$lib/content';
	import { roles, getTheme } from '$lib/theme';

	// activeRole store drives BOTH the panel widths here and the Nav's
	// colors in +layout.svelte — one source of truth, no separate
	// "homepage chrome" path like the React version had.
	function activate(role: (typeof roles)[number]) {
		activeRole.set(role);
	}
</script>

<div class="flex h-[calc(100vh-60px)]">
	{#each roles as role}
		<TriptychPanel
			{role}
			content={content[role]}
			active={$activeRole === role}
			onactivate={() => activate(role)}
		/>
	{/each}
</div>

<!-- Dot indicators -->
<div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2.5">
	{#each roles as role}
		<button
			aria-label={role}
			onclick={() => activate(role)}
			class="h-1.5 rounded-full transition-all duration-400"
			style="width:{$activeRole === role ? '24px' : '6px'}; background:{$activeRole === role ? getTheme(role).accent : getTheme($activeRole).inkFaint + '55'}"
		></button>
	{/each}
</div>