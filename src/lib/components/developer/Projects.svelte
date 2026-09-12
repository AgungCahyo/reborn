<script lang="ts">
	import { lang } from '$lib/stores/lang';
	import type { RoleTheme } from '$lib/theme';

	interface Project {
		type: { en: string; id: string };
		title: { en: string; id: string };
		subtitle: { en: string; id: string };
		body: { en: string; id: string };
		tags: string[];
		links?: { label: { en: string; id: string }; href: string }[];
	}

	let { theme, projects }: { theme: RoleTheme; projects: Project[] } = $props();

	let activeIndex = $state(0);
	function hostFor(href: string) {
		try {
			return new URL(href).hostname.replace(/^www\./, '');
		} catch {
			return href;
		}
	}

	function extFor(tags: string[]) {
		const t = tags.join(' ').toLowerCase();
		if (t.includes('react native')) return '.native.tsx';
		if (t.includes('react') || t.includes('next')) return '.tsx';
		if (t.includes('node')) return '.ts';
		return '.ts';
	}

	function statusColor(index: number) {
		return [theme.accent, theme.accent2, theme.inkFaint][index % 3];
	}

	let active = $derived(projects[activeIndex]);
	let activeSlug = $derived(slugify(active.title.en));
	let activeExt = $derived(extFor(active.tags));
	// Rough line count so the decorative gutter roughly matches content height.
	let lineCount = $derived(Math.ceil(active.body[$lang].length / 60) + 10);
	let activeLink = $derived(active.links?.[0]);
	function slugify(text: string) {
		return text
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/(^-|-$)/g, '');
	}
</script>

<div
	class="overflow-hidden rounded-2xl"
	style="border:1px solid {theme.border}; background:{theme.surface}"
>
	<!-- Title bar: 3-dot + fake path -->
	<div
		class="flex items-center gap-2 px-4 py-2.5"
		style="border-bottom:1px solid {theme.border}; background:{theme.paper}"
	>
		<span class="h-2.5 w-2.5 rounded-full" style="background:#ff5f57"></span>
		<span class="h-2.5 w-2.5 rounded-full" style="background:#febc2e"></span>
		<span class="h-2.5 w-2.5 rounded-full" style="background:#28c840"></span>

		{#if activeLink}
			<a
				href={activeLink.href}
				target="_blank"
				rel="noopener noreferrer"
				class="ml-3 flex items-center gap-1 truncate text-[10px] transition-colors hover:underline"
				style="font-family: var(--font-mono); color:{theme.inkFaint}"
			>
				~/projects/{activeSlug} <span style="color:{theme.accent}">→</span>
				{hostFor(activeLink.href)}
			</a>
		{:else}
			<span
				class="ml-3 truncate text-[10px]"
				style="font-family: var(--font-mono); color:{theme.inkFaint}"
			>
				~/projects/{activeSlug}/{activeSlug}{activeExt}
			</span>
		{/if}

		<span
			class="ml-auto flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] tracking-[0.15em] uppercase"
			style="background:{statusColor(activeIndex)}1a; color:{statusColor(activeIndex)}"
		>
			<span class="h-1.5 w-1.5 rounded-full" style="background:{statusColor(activeIndex)}"></span>
			{active.type[$lang]}
		</span>
	</div>

	<!-- Tab strip -->
	<div class="flex overflow-x-auto" style="border-bottom:1px solid {theme.border}">
		{#each projects as p, i (p.title.en)}
			<button
				onclick={() => (activeIndex = i)}
				class="flex shrink-0 items-center gap-2 px-4 py-2.5 text-[11px] whitespace-nowrap transition-colors"
				style="font-family: var(--font-mono);
					border-bottom: 2px solid {activeIndex === i ? theme.accent : 'transparent'};
					background:{activeIndex === i ? theme.surface : theme.paper};
					color:{activeIndex === i ? theme.ink : theme.inkFaint}"
			>
				<span class="h-1.5 w-1.5 rounded-full" style="background:{statusColor(i)}"></span>
				{slugify(p.title.en)}{extFor(p.tags)}
			</button>
		{/each}
	</div>

	<!-- "File content" -->
	<div class="flex gap-4 p-5 lg:p-7">
		<!-- Decorative line-number gutter -->
		<div
			class="hidden flex-col items-end pt-1 select-none sm:flex"
			style="font-family: var(--font-mono); color:{theme.border}; font-size: 11px; line-height: 1.7"
		>
			{#each Array(lineCount).keys() as n (n)}
				<span>{n + 1}</span>
			{/each}
		</div>

		<div
			class="min-w-0 flex-1"
			style="font-family: var(--font-mono); font-size: 12.5px; line-height: 1.7"
		>
			<div style="color:{theme.inkFaint}">/**</div>
			<div class="pl-2" style="color:{theme.inkFaint}">* {active.subtitle[$lang]}</div>
			{#if activeLink}
				<div class="pl-2" style="color:{theme.inkFaint}">
					* @see <a
						href={activeLink.href}
						target="_blank"
						rel="noopener noreferrer"
						class="hover:underline"
						style="color:{theme.accent}">{activeLink.label[$lang]} ↗</a
					>
				</div>
			{/if}
			<div class="mb-3" style="color:{theme.inkFaint}">*/</div>
			<div>
				<span style="color:{theme.accent2}">const</span>
				<span style="color:{theme.ink}"> project</span> = {'{'}
			</div>
			<div class="pl-4">
				<span style="color:{theme.accent}">name</span>:
				<span style="color:{statusColor(activeIndex)}">"{active.title[$lang]}"</span>,
			</div>
			<div class="pl-4">
				<span style="color:{theme.accent}">type</span>:
				<span style="color:{statusColor(activeIndex)}">"{active.type[$lang]}"</span>,
			</div>
			<div class="pl-4">
				<span style="color:{theme.accent}">stack</span>: [
				{#each active.tags as tag, ti (tag)}<span style="color:{statusColor(activeIndex)}"
						>"{tag}"</span
					>{ti < active.tags.length - 1 ? ', ' : ''}{/each}
				],
			</div>
			<div class="pl-4">
				<span style="color:{theme.accent}">summary</span>:
				<span style="color:{theme.inkFaint}">`</span>
			</div>
			<div
				class="pl-8"
				style="color:{theme.inkSoft}; font-family: var(--font-body, inherit); white-space: normal; line-height:1.6; font-size: 13px; padding-top: 4px; padding-bottom: 4px"
			>
				{active.body[$lang]}
			</div>
			<div class="pl-4"><span style="color:{theme.inkFaint}">`</span>,</div>
			<div>&#125;;</div>
		</div>
	</div>
</div>
