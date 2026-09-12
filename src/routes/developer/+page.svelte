<script lang="ts">
	import { onMount } from 'svelte';
	import { lang } from '$lib/stores/lang';
	import { activeRole } from '$lib/stores/activeRole';
	import { getTheme } from '$lib/theme';
	import {
		developer,
		developerStats,
		developerStages,
		developerPractices,
		developerProof,
		developerJourney,
		developerSkillGroups,
		developerTechniques,
	} from '$lib/content/developer';
	import RoleHero from '$lib/components/shared/RoleHero.svelte';
	import SectionLabel from '$lib/components/shared/SectionLabel.svelte';
	import Card from '$lib/components/shared/Card.svelte';
	import CTA from '$lib/components/shared/CTA.svelte';
	import Timeline from '$lib/components/shared/Timeline.svelte';
	import SkillBars from '$lib/components/shared/SkillBars.svelte';
	import Projects from '$lib/components/developer/Projects.svelte';

	const theme = getTheme('developer');

	onMount(() => activeRole.set('developer'));

	const pageTitle = $derived(`${developer.title[$lang].replace('\n', ' ')} — Portfolio`);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={developer.subtitle[$lang]} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={developer.subtitle[$lang]} />
</svelte:head>

<div style="background:{theme.paper}; color:{theme.ink}">
	<RoleHero {theme} content={developer} stats={developerStats} />

	<!-- The System -->
	<section class="px-8 lg:px-16 py-16" style="border-top: 1px solid {theme.border}">
		<div class="max-w-6xl mx-auto">
			<SectionLabel {theme}>{$lang === 'id' ? 'Sistem' : 'The System'}</SectionLabel>
			<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each developerStages as stage, i}
					<Card {theme} tilt={i % 2 === 0 ? -0.5 : 0.5}>
						<div
							class="flex h-10 w-10 items-center justify-center text-[15px] font-semibold mb-4"
							style="color:{theme.accent}; background:{theme.accent}1a; border-radius: 38% 62% 58% 42% / 55% 42% 58% 45%"
						>
							{stage.icon}
						</div>
						<p class="text-[11px] font-medium mb-1.5" style="color:{theme.accent}">
							{$lang === 'id' ? `Tahap ${i + 1}` : `Step ${i + 1}`}
						</p>
						<h3 class="text-[17px] font-semibold mb-1.5" style="font-family:{theme.font}; color:{theme.ink}">
							{stage.title[$lang]}
						</h3>
						<p class="text-[13px] leading-relaxed" style="color:{theme.inkSoft}">{stage.body[$lang]}</p>
					</Card>
				{/each}
			</div>
		</div>
	</section>

	<!-- How I Build -->
	<section class="px-8 lg:px-16 py-16" style="border-top: 1px solid {theme.border}; background:{theme.accent2}0a">
		<div class="max-w-6xl mx-auto">
			<SectionLabel {theme}>{$lang === 'id' ? 'Cara saya membangun' : 'How I build'}</SectionLabel>
			<div class="grid md:grid-cols-3 gap-6">
				{#each developerPractices as practice, i}
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

	<!-- Proof — case studies, laid out like the React version's project
	     cards: corner tag, year + status badge, external links, a
	     highlights list, then tags below a divider. -->
<section class="px-8 lg:px-16 py-16" style="border-top: 1px solid {theme.border}">
		<div class="max-w-6xl mx-auto">
			<SectionLabel {theme}>{$lang === 'id' ? 'Bukti' : 'Proof'}</SectionLabel>
			<Projects {theme} projects={developerProof} />
		</div>
	</section>

	<!-- Journey -->
	<section class="px-8 lg:px-16 py-16" style="border-top: 1px solid {theme.border}; background:{theme.accent2}0a">
		<div class="max-w-6xl mx-auto">
			<div class="flex flex-wrap items-center justify-between gap-3 mb-8">
				<SectionLabel {theme}>{$lang === 'id' ? 'Perjalanan Engineering' : 'Engineering journey'}</SectionLabel>
				<p class="text-[13px] font-medium" style="color:{theme.inkSoft}">2022 — {$lang === 'id' ? 'Sekarang' : 'Present'}</p>
			</div>
			<Timeline {theme} items={developerJourney} />
		</div>
	</section>

	<!-- Capability -->
	<section class="px-8 lg:px-16 py-16" style="border-top: 1px solid {theme.border}">
		<div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
			<div>
				<SectionLabel {theme}>{$lang === 'id' ? 'Keahlian Utama' : 'Core expertise'}</SectionLabel>
				<div class="grid sm:grid-cols-2 gap-5">
					{#each developerSkillGroups as group, i}
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
				<SectionLabel {theme}>{$lang === 'id' ? 'Proficiency' : 'Proficiency'}</SectionLabel>
				<SkillBars {theme} skills={developerTechniques} />
			</div>
		</div>
	</section>

	<CTA
		{theme}
		heading={$lang === 'id' ? 'Yuk bangun sesuatu yang beneran kepake.' : "Let's build something that actually ships."}
		body={$lang === 'id'
			? 'Produk 0→1, integrasi AI, atau workflow otomasi yang butuh satu orang pegang seluruh stack.'
			: 'A 0→1 product, an AI integration, or an automation workflow that needs one person owning the whole stack.'}
		ctaLabel="Get in touch"
		href="mailto:cahyoprasetyo507@gmail.com"
	/>

	<!-- Footer nav -->
	<div class="px-8 py-6 flex justify-between items-center" style="border-top: 1px solid {theme.border}">
		<a href="/" class="text-[13px] flex items-center gap-2 font-medium" style="color:{theme.inkSoft}">
			<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
			</svg>
			{$lang === 'id' ? 'Kembali ke Beranda' : 'Back to home'}
		</a>
		<span class="text-[12px] font-medium" style="color:{theme.inkSoft}">01 / {getTheme('developer').headerLabel[$lang]}</span>
		<a href="/videographer" class="text-[13px] flex items-center gap-2 font-medium" style="color:{theme.accent}">
			{$lang === 'id' ? 'Selanjutnya:' : 'Next:'}
			{getTheme('videographer').headerLabel[$lang]}
			<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
		</a>
	</div>
</div>
