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
				{#each videographerPractices as practice, i}
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

	<!-- Selected Work — laid out like a contact sheet, matching the React
	     version: full-width stacked cards, video embedded directly (no
	     click-to-play), link button top-right, tags below. -->
	<section class="px-8 lg:px-16 py-16" style="border-top: 1px solid {theme.border}; background:{theme.accent2}0a">
		<div class="max-w-6xl mx-auto">
			<SectionLabel {theme}>{$lang === 'id' ? 'Karya Terpilih' : 'Selected work'}</SectionLabel>
			<div class="space-y-6">
				{#each videographerProof as p}
					<Card {theme} class="overflow-hidden !p-0">
						<div class="relative w-full aspect-video flex items-center justify-center" style="background:#0c0b0a">
							{#if p.videoId}
								<iframe
									src={`https://www.youtube.com/embed/${p.videoId}`}
									title={p.title[$lang]}
									class="absolute inset-0 w-full h-full"
									allowfullscreen
								></iframe>
							{:else}
								<div class="text-center">
									<div class="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style="border:1px solid rgba(255,255,255,0.14)">
										<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style="color:rgba(255,255,255,0.4)">
											<path d="M8 5v14l11-7z" />
										</svg>
									</div>
									<p class="text-[11px]" style="color:rgba(255,255,255,0.4)">Add YouTube embed ID</p>
								</div>
							{/if}
						</div>
						<div class="p-7 lg:p-9">
							<div class="flex flex-wrap justify-between items-start gap-4 mb-4">
								<div>
									<div class="flex items-center gap-3 mb-2">
										<span class="text-[10px] tracking-[0.25em] uppercase font-medium" style="color:{theme.accent}">
											{p.type[$lang]}
										</span>
										<span class="text-[11px]" style="color:{theme.inkFaint}">{p.year}</span>
									</div>
									<h3 class="text-2xl lg:text-3xl font-bold" style="font-family:{theme.font}; color:{theme.ink}">
										{p.title[$lang]}
									</h3>
								</div>
								<a
									href={p.link}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-1.5 px-4 py-2 text-[12px] font-medium rounded-full transition-colors"
									style="border:1px solid {theme.border}; color:{theme.ink}; background:{theme.surface}"
								>
									<span>{p.linkLabel[$lang]}</span>
									<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										/>
									</svg>
								</a>
							</div>
							<p class="text-[14px] leading-relaxed mb-5 max-w-2xl" style="color:{theme.inkSoft}">{p.body[$lang]}</p>
							<div class="flex flex-wrap gap-2">
								{#each p.tags as tag}
									<span class="px-3 py-1 text-[11px] rounded-full" style="border:1px solid {theme.border}; color:{theme.inkSoft}">
										{tag}
									</span>
								{/each}
							</div>
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
					{#each videographerSkillGroups as group, i}
						<div>
							<p class="text-[12px] font-semibold mb-2.5" style="color:{theme.ink}">{group.category[$lang]}</p>
							<div class="flex flex-wrap gap-1.5">
								{#each group.items as item}
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
		<a href="/developer" class="text-[13px] flex items-center gap-2 font-medium" style="color:{theme.inkSoft}">
			<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
			</svg>
			{$lang === 'id' ? 'Sebelumnya:' : 'Prev:'}
			{getTheme('developer').headerLabel[$lang]}
		</a>
		<span class="text-[12px] font-medium" style="color:{theme.inkSoft}">02 / {getTheme('videographer').headerLabel[$lang]}</span>
		<a href="/leadership" class="text-[13px] flex items-center gap-2 font-medium" style="color:{theme.accent}">
			{$lang === 'id' ? 'Selanjutnya:' : 'Next:'}
			{getTheme('leadership').headerLabel[$lang]}
			<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
		</a>
	</div>
</div>
