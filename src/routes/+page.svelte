<script lang="ts">
	import TriptychPanel from '$lib/components/home/TriptychPanel.svelte';
	import { activeRole } from '$lib/stores/activeRole';
	import { lang } from '$lib/stores/lang';
	import { content } from '$lib/content';
	import { roles, getTheme } from '$lib/theme';

	// activeRole store drives BOTH the panel widths here and the Nav's
	// colors in +layout.svelte — one source of truth, no separate
	// "homepage chrome" path like the React version had.
	function activate(role: (typeof roles)[number]) {
		activeRole.set(role);
	}

	const title = $derived(
		$lang === 'id'
			? 'Portofolio — Developer, Videografer & Leadership'
			: 'Portfolio — Developer, Videographer & Leadership'
	);
	const description = $derived(
		$lang === 'id'
			? 'Full-stack developer, videographer, dan operations lead F&B — satu orang yang kerja lintas code, film, dan proses.'
			: 'Full-stack developer, videographer, and F&B operations lead — one person working across code, film, and process.'
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
</svelte:head>

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
