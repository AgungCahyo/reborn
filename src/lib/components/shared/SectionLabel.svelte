<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { RoleTheme } from '$lib/theme';

	let { theme, children }: { theme: RoleTheme; children: Snippet } = $props();
</script>

<p class="text-[10px] tracking-[0.25em] uppercase mb-5" style="color:{theme.inkFaint}">
	{@render children()}
</p>