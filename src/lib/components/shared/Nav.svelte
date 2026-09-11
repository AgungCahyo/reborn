<script lang="ts">
	import { page } from '$app/stores';
	import { lang } from '$lib/stores/lang';
	import { t } from '$lib/i18n/t';
	import { roles, getTheme, type Role } from '$lib/theme';
	import { activeRole } from '$lib/stores/activeRole';

	// The one prop that decides the nav's colors. On role pages this is
	// that role's theme; on the homepage the page passes whichever panel
	// is currently active. There is no second "homeChrome" fallback like
	// the React version had — same rendering path everywhere.
	let { role }: { role: Role } = $props();
	let theme = $derived(getTheme(role));

	let menuOpen = $state(false);
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10 h-15 backdrop-blur-md transition-colors duration-500"
	style="background:{theme.surface}dd; border-bottom:1px solid {theme.border}; color:{theme.ink}"
>
	<a href="/" class="flex items-center gap-2 text-[13px] font-medium tracking-wide">
		<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
		</svg>
		PORTFOLIO
	</a>

	<nav class="hidden md:flex items-center gap-8 text-[12px] tracking-[0.15em] uppercase">
		{#each roles as r}
	<a
		href="/{r}"
		onmouseenter={() => activeRole.set(r)}
		style="color:{$activeRole === r
			? getTheme(r).accent
			: theme.inkFaint}"
	>
		{getTheme(r).headerLabel[$lang]}
	</a>
{/each}
		<a href="/about" class="transition-colors" style="color:{$page.url.pathname === '/about' ? theme.accent : theme.inkFaint}">
			{$t('About', 'Tentang')}
		</a>
	</nav>

	<div class="flex items-center gap-4">
		<a
			href="/developer/work-with-me"
			class="hidden sm:inline-block px-4 py-2 rounded-full text-[11px] tracking-widest uppercase transition-opacity hover:opacity-80"
			style="background:{theme.ink}; color:{theme.surface}"
		>
			{$t('Start Project', 'Mulai Project')}
		</a>

		<button
			class="text-[11px] tracking-widest"
			style="color:{theme.inkFaint}"
			onclick={() => lang.update((l) => (l === 'en' ? 'id' : 'en'))}
		>
			{$lang === 'en' ? 'EN' : 'ID'} <span style="opacity:0.4">|</span> {$lang === 'en' ? 'ID' : 'EN'}
		</button>

		<button class="md:hidden" onclick={() => (menuOpen = !menuOpen)} aria-label="Menu" style="color:{theme.ink}">
			☰
		</button>
	</div>
</header>

{#if menuOpen}
	<div
		class="fixed top-15 left-0 right-0 z-40 md:hidden flex flex-col p-6 gap-4"
		style="background:{theme.surface}; border-bottom:1px solid {theme.border}"
	>
		{#each roles as r}
			<a href="/{r}" style="color:{theme.ink}" onclick={() => (menuOpen = false)}>
				{getTheme(r).headerLabel[$lang]}
			</a>
		{/each}
		<a href="/about" style="color:{theme.ink}" onclick={() => (menuOpen = false)}>
			{$t('About', 'Tentang')}
		</a>
	</div>
{/if}
