<script lang="ts">
	import '../app.css';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import Nav from '$lib/components/shared/Nav.svelte';
	import { activeRole } from '$lib/stores/activeRole';
	import { getTheme } from '$lib/theme';

	let { children } = $props();

	// +error.svelte renders inside this layout's slot, not instead of it —
	// it ships its own full-screen header, so the normal role-based Nav
	// (and the padding that makes room for it) gets skipped for that case.
	let isErrorPage = $derived(!!$page.error);

	// theme-color follows whichever theme is currently driving the Nav —
	// same source of truth as everything else, no separate ThemeColor.tsx.
	let themeColor = $derived(getTheme($activeRole).surface);
</script>

<svelte:head>
	<!-- Global defaults. Each page below also renders its own <svelte:head>
	     with a page-specific <title> and description — Svelte merges head
	     tags by position in the tree, and the more specific (page-level)
	     one is added after this layout's, so it's what ends up used. -->
	<meta name="theme-color" content={themeColor} />
	<meta
		name="description"
		content="Full-stack developer, videographer, and F&B operations lead — one person working across code, film, and process."
	/>
	<meta property="og:site_name" content="Portfolio" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<link rel="icon" href="/favicon.png" />
</svelte:head>

{#if isErrorPage}
	{@render children()}
{:else}
	<Nav role={$activeRole} />

	<main class="pt-[60px]">
		{#key $page.url.pathname}
			<div in:fade={{ duration: 220, delay: 80 }} out:fade={{ duration: 120 }}>
				{@render children()}
			</div>
		{/key}
	</main>
{/if}
