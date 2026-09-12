<script lang="ts">
	import { page } from '$app/stores';
	import { lang } from '$lib/stores/lang';
	import { t } from '$lib/i18n/t';
	import { roles, getTheme, type Role } from '$lib/theme';
	import { activeRole } from '$lib/stores/activeRole';
	import LanguageToggle from './LanguageToggle.svelte';
	import { resolve } from '$app/paths';

	// The one prop that decides the nav's colors. On role pages this is
	// that role's theme; on the homepage the page passes whichever panel
	// is currently active. There is no second "homeChrome" fallback like
	// the React version had — same rendering path everywhere.
	let { role }: { role: Role } = $props();
	let theme = $derived(getTheme(role));

	let menuOpen = $state(false);

	function isRoleActive(r: Role) {
		return $page.url.pathname === '/' ? $activeRole === r : $page.url.pathname.startsWith(`/${r}`);
	}
	let isAboutActive = $derived($page.url.pathname === '/about');

	
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-4 py-4 backdrop-blur-md transition-colors duration-500 sm:px-8 sm:py-5"
	style="background:{theme.surface}dd; border-bottom:1px solid {theme.border}"
>
	<a href={resolve('/')} class="group flex items-center gap-2.5">
		<svg class="h-3.5 w-3.5 transition-colors" style="color:{theme.inkFaint}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H5M5 12l7-7M5 12l7 7" />
		</svg>
		<span class="text-[10px] tracking-[0.25em] uppercase transition-colors" style="color:{theme.inkFaint}">
			{$t('Portfolio', 'Portofolio')}
		</span>
	</a>

	<nav class="hidden items-center gap-7 md:flex">
		{#each roles as r (r)}
			{@const active = isRoleActive(r)}
			<a
				href={resolve(`/${r}`)}
				class="text-[10px] leading-none tracking-[0.2em] uppercase transition-colors"
				style="color:{active ? theme.ink : theme.inkFaint}; font-weight:{active ? 500 : 400}"
			>
				{getTheme(r).headerLabel[$lang]}
			</a>
		{/each}
		<a
			href={resolve('/about')}
			class="text-[10px] leading-none tracking-[0.2em] uppercase transition-colors"
			style="color:{isAboutActive ? theme.ink : theme.inkFaint}; font-weight:{isAboutActive ? 500 : 400}"
		>
			{getTheme('about').headerLabel[$lang]}
		</a>

		<div class="ml-2 h-3 w-px" style="background:{theme.border}"></div>

		<a
			href={resolve('/developer/work-with-me')}
			class="rounded-full px-3.5 py-2 text-[10px] tracking-[0.18em] uppercase transition-colors"
			style="border:1px solid {theme.border}; color:{theme.accent}"
		>
			{$t('Start Project', 'Mulai Project')}
		</a>

		<LanguageToggle {theme} />
	</nav>

	<div class="flex items-center gap-2 md:hidden">
		<LanguageToggle {theme} />
		<button
			class="rounded-md border p-2 transition-colors"
			style="border-color:{theme.border}; color:{theme.ink}"
			onclick={() => (menuOpen = !menuOpen)}
			aria-label="Toggle menu"
		>
			{#if menuOpen}
				<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			{/if}
		</button>
	</div>
</header>

{#if menuOpen}
	<div
		class="fixed top-[58px] right-0 left-0 z-40 flex flex-col gap-2 border-b px-4 py-3 text-[11px] tracking-[0.16em] uppercase backdrop-blur-xl md:hidden"
		style="background:{theme.surface}f2; border-color:{theme.border}"
	>
		{#each roles as r (r)}
			{@const active = isRoleActive(r)}
			<a
				href={resolve(`/${r}`)}
				class="rounded-md px-3 py-2 transition-colors"
				style="color:{theme.ink}; background:{active ? `${theme.accent}14` : 'transparent'}; font-weight:{active ? 700 : 400}"
				onclick={() => (menuOpen = false)}
			>
				{getTheme(r).headerLabel[$lang]}
			</a>
		{/each}
		<a
			href={resolve('/about')}
			class="rounded-md px-3 py-2 transition-colors"
			style="color:{theme.ink}; background:{isAboutActive ? `${theme.accent}14` : 'transparent'}; font-weight:{isAboutActive ? 700 : 400}"
			onclick={() => (menuOpen = false)}
		>
			{getTheme('about').headerLabel[$lang]}
		</a>
		<a
			href={resolve("/developer/work-with-me")}
			class="rounded-md px-3 py-2 font-bold transition-colors"
			style="background:{theme.accent}14; color:{theme.ink}"
			onclick={() => (menuOpen = false)}
		>
			{$t('Start Project', 'Mulai Project')}
		</a>
	</div>
{/if}
