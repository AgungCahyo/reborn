<script lang="ts">
	import { onMount } from 'svelte';
	import { lang } from '$lib/stores/lang';
	import { activeRole } from '$lib/stores/activeRole';
	import { getTheme } from '$lib/theme';
	import {
		videographer,
		videographerStats,
		videographerPractices,
		videographerProof,
		videographerJourney,
		videographerSkillGroups,
		videographerTechniques
	} from '$lib/content/videographer';
	import RoleHero from '$lib/components/shared/RoleHero.svelte';
	import SectionLabel from '$lib/components/shared/SectionLabel.svelte';
	import Card from '$lib/components/shared/Card.svelte';
	import CTA from '$lib/components/shared/CTA.svelte';
	import Timeline from '$lib/components/shared/Timeline.svelte';
	import SkillBars from '$lib/components/shared/SkillBars.svelte';
	import { resolve } from '$app/paths'; 
	

	const theme = getTheme('videographer');

	onMount(() => activeRole.set('videographer'));

	const pageTitle = $derived(`${videographer.title[$lang].replace('\n', ' ')} — Portfolio`);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={videographer.subtitle[$lang]} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={videographer.subtitle[$lang]} />
</svelte:head>

<div style="background:{theme.paper}; color:{theme.ink}">
	<RoleHero {theme} content={videographer} stats={videographerStats} />

	<!-- Approach — the source only has 3 philosophy items, so there is no
	     separate 4-card "System" section here like /developer and
	     /leadership; the 3 practices below cover it in one section. -->
	<section class="px-8 lg:px-16 py-16" style="border-top: 1px solid {theme.border}">
		<div class="max-w-6xl mx-auto">
			<SectionLabel {theme}>{$lang === 'id' ? 'Pendekatan' : 'Approach'}</SectionLabel>
			<div class="grid md:grid-cols-3 gap-6">
				{#each videographerPractices as practice , i (practice.title.en)}
					<Card {theme} tilt={i === 0 ? -0.8 : i === 1 ? 0.6 : 0.3}>
						<div
							class="absolute top-0 left-6 right-6 h-1 rounded-full -translate-y-1/2"
							style="background:{i === 1 ? theme.accent2 : theme.accent}"
						></div>
						<h3 class="text-[21px] font-semibold mb-2.5" style="font-family:{theme.font}; color:{theme.ink}">
							{practice.title[$lang]}
						</h3>
						<p class="text-[14px] leading-relaxed" style="color:{theme.inkSoft}">{practice.body[$lang]}</p>
					</Card>
				{/each}
			</div>
		</div>
	</section>

	<!-- Selected Work -->
	<section class="px-8 lg:px-16 py-16" style="border-top: 1px solid {theme.border}; background:{theme.accent2}0a">
		<div class="max-w-6xl mx-auto">
			<SectionLabel {theme}>{$lang === 'id' ? 'Karya Terpilih' : 'Selected work'}</SectionLabel>
			<div class="grid md:grid-cols-2 gap-6">
				{#each videographerProof as p, i (p.title)}
					<Card {theme} tilt={i % 2 === 0 ? 0.4 : -0.4} tag={p.subtitle[$lang]} class="p-6">
						<h3 class="text-[18px] font-semibold mb-2 mt-2" style="font-family:{theme.font}; color:{theme.ink}">
							{p.title[$lang]}
						</h3>
						<p class="text-[13px] leading-relaxed mb-4" style="color:{theme.inkSoft}">{p.body[$lang]}</p>
						<div class="flex flex-wrap items-center justify-between gap-2">
							<div class="flex flex-wrap gap-2">
								{#each p.tags as tag (tag)}
									<span class="px-2.5 py-0.5 text-[11px] rounded-full" style="border: 1px solid {theme.border}; color:{theme.inkFaint}">
										{tag}
									</span>
								{/each}
							</div>
							<a
								href={p.link}
								target="_blank"
								rel="noopener noreferrer"
								class="text-[11px] font-medium whitespace-nowrap"
								style="color:{theme.accent}"
							>
								{$lang === 'id' ? 'Tonton Video →' : 'Watch Video →'}
							</a>
						</div>
					</Card>
				{/each}
			</div>
		</div>
	</section>

	<!-- Journey -->
	<section class="px-8 lg:px-16 py-16" style="border-top: 1px solid {theme.border}">
		<div class="max-w-6xl mx-auto">
			<div class="flex flex-wrap items-center justify-between gap-3 mb-8">
				<SectionLabel {theme}>{$lang === 'id' ? 'Perjalanan Kreatif' : 'Creative journey'}</SectionLabel>
				<p class="text-[13px] font-medium" style="color:{theme.inkSoft}">2021 — {$lang === 'id' ? 'Sekarang' : 'Present'}</p>
			</div>
			<Timeline {theme} items={videographerJourney} />
		</div>
	</section>

	<!-- Capability -->
	<section class="px-8 lg:px-16 py-16" style="border-top: 1px solid {theme.border}; background:{theme.accent2}0a">
		<div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
			<div>
				<SectionLabel {theme}>{$lang === 'id' ? 'Kategori Keahlian' : 'Skill categories'}</SectionLabel>
				<div class="grid sm:grid-cols-2 gap-5">
					{#each videographerSkillGroups as group, i (group)}
						<div>
							<p class="text-[12px] font-semibold mb-2.5" style="color:{theme.ink}">{group.category[$lang]}</p>
							<div class="flex flex-wrap gap-1.5">
								{#each group.items as item (item)}
									<span
										class="px-2.5 py-1 rounded-full text-[12px]"
										style="background:{i % 2 === 0 ? theme.accent : theme.accent2}1a; color:{i % 2 === 0 ? theme.accent : theme.accent2}"
									>
										{item[$lang]}
									</span>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</div>
			<div>
				<SectionLabel {theme}>{$lang === 'id' ? 'Persenjataan Teknis' : 'Technical arsenal'}</SectionLabel>
				<SkillBars {theme} skills={videographerTechniques} />
			</div>
		</div>
	</section>

	<CTA
		{theme}
		heading={$lang === 'id' ? 'Siap bikin sesuatu yang cinematic?' : 'Ready to make something cinematic?'}
		body={$lang === 'id'
			? "Yuk bikin cerita yang enak ditonton bareng."
			: "Let's create a story worth rewatching together."}
		ctaLabel="Get in touch"
		href="mailto:cahyoprasetyo507@gmail.com"
	/>

	<!-- Footer nav -->
	<div class="px-8 py-6 flex justify-between items-center" style="border-top: 1px solid {theme.border}">
		<a href={resolve('/developer')} class="text-[13px] flex items-center gap-2 font-medium" style="color:{theme.inkSoft}">
			<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
			</svg>
			{$lang === 'id' ? 'Sebelumnya: Developer' : 'Prev: Developer'}
		</a>
		<span class="text-[12px] font-medium" style="color:{theme.inkSoft}">02 / {$lang === 'id' ? 'Videografer' : 'Videographer'}</span>
		<a href={resolve('/leadership')} class="text-[13px] flex items-center gap-2 font-medium" style="color:{theme.accent}">
			{$lang === 'id' ? 'Selanjutnya: Leadership' : 'Next: Leadership'}
			<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
		</a>
	</div>
</div>
