<script lang="ts">
	import { onMount } from 'svelte';
	import { lang } from '$lib/stores/lang';
	import { activeRole } from '$lib/stores/activeRole';
	import { getTheme } from '$lib/theme';
	import {
		leadership,
		leadershipStats,
		leadershipStages,
		leadershipPractices,
		leadershipProof,
		leadershipJourney,
		leadershipSkillGroups,
		leadershipTechniques
	} from '$lib/content/leadership';
	import RoleHero from '$lib/components/shared/RoleHero.svelte';
	import SectionLabel from '$lib/components/shared/SectionLabel.svelte';
	import Card from '$lib/components/shared/Card.svelte';
	import CTA from '$lib/components/shared/CTA.svelte';
	import Timeline from '$lib/components/shared/Timeline.svelte';
	import SkillBars from '$lib/components/shared/SkillBars.svelte';
	import { resolve } from '$app/paths';

	const theme = getTheme('leadership');

		onMount(() => activeRole.set('leadership'));

	const pageTitle = $derived(`${leadership.title[$lang].replace('\n', ' ')} — Portfolio`);


</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={leadership.subtitle[$lang]} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={leadership.subtitle[$lang]} />
</svelte:head>

<div style="background:{theme.paper}; color:{theme.ink}">
	<RoleHero {theme} content={leadership} stats={leadershipStats} />

	<!-- The System — a real sequence -->
	<section class="px-8 lg:px-16 py-16" style="border-top: 1px solid {theme.border}">
		<div class="max-w-6xl mx-auto">
			<SectionLabel {theme}>{$lang === 'id' ? 'Sistem' : 'The System'}</SectionLabel>
			<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each leadershipStages as stage, i (stage)}
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

	<!-- How I Lead — not a sequence, three distinct practices -->
	<section class="px-8 lg:px-16 py-16" style="border-top: 1px solid {theme.border}; background:{theme.accent2}0a">
		<div class="max-w-6xl mx-auto">
			<SectionLabel {theme}>{$lang === 'id' ? 'Cara saya memimpin' : 'How I lead'}</SectionLabel>
			<div class="grid md:grid-cols-3 gap-6">
				{#each leadershipPractices as practice, i (practice)}
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

	<!-- Proof — case studies -->
	<section class="px-8 lg:px-16 py-16" style="border-top: 1px solid {theme.border}">
		<div class="max-w-6xl mx-auto">
			<SectionLabel {theme}>{$lang === 'id' ? 'Bukti' : 'Proof'}</SectionLabel>
			<div class="grid md:grid-cols-2 gap-6">
				{#each leadershipProof as p, i (p)}
					<Card {theme} tilt={i % 2 === 0 ? 0.4 : -0.4} tag={p.subtitle[$lang]} class="p-6">
						<h3 class="text-[18px] font-semibold mb-2 mt-2" style="font-family:{theme.font}; color:{theme.ink}">
							{p.title[$lang]}
						</h3>
						<p class="text-[13px] leading-relaxed mb-4" style="color:{theme.inkSoft}">{p.body[$lang]}</p>
						<div class="flex flex-wrap gap-2">
							{#each p.tags as tag (tag)}
								<span class="px-2.5 py-0.5 text-[11px] rounded-full" style="border: 1px solid {theme.border}; color:{theme.inkFaint}">
									{tag}
								</span>
							{/each}
						</div>
					</Card>
				{/each}
			</div>
		</div>
	</section>

	<!-- Journey -->
	<section class="px-8 lg:px-16 py-16" style="border-top: 1px solid {theme.border}; background:{theme.accent2}0a">
		<div class="max-w-6xl mx-auto">
			<div class="flex flex-wrap items-center justify-between gap-3 mb-8">
				<SectionLabel {theme}>{$lang === 'id' ? 'Dari Lantai ke Koordinator' : 'From floor to coordinator'}</SectionLabel>
				<p class="text-[13px] font-medium" style="color:{theme.inkSoft}">2019 — {$lang === 'id' ? 'Sekarang' : 'Present'}</p>
			</div>
			<Timeline {theme} items={leadershipJourney} />
		</div>
	</section>

	<!-- Capability -->
	<section class="px-8 lg:px-16 py-16" style="border-top: 1px solid {theme.border}">
		<div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
			<div>
				<SectionLabel {theme}>{$lang === 'id' ? 'Keahlian Utama' : 'Core expertise'}</SectionLabel>
				<div class="grid sm:grid-cols-2 gap-5">
					{#each leadershipSkillGroups as group, i (group)}
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
				<SectionLabel {theme}>{$lang === 'id' ? 'Rentang Leadership' : 'Leadership range'}</SectionLabel>
				<SkillBars {theme} skills={leadershipTechniques} />
			</div>
		</div>
	</section>

	<CTA
		{theme}
		heading={$lang === 'id' ? 'Yuk bangun tim yang bisa jalan sendiri.' : "Let's build a team that runs itself."}
		body={$lang === 'id'
			? 'Sistem pelatihan, operasional, atau produk yang butuh ownership yang sama.'
			: 'Training systems, operations, or a product that needs the same ownership.'}
		ctaLabel="Get in touch"
		href="mailto:cahyoprasetyo507@gmail.com"
	/>

	<!-- Footer nav -->
	<div class="px-8 py-6 flex justify-between items-center" style="border-top: 1px solid {theme.border}">
		<a href={resolve('/videographer')} class="text-[13px] flex items-center gap-2 font-medium" style="color:{theme.inkSoft}">
			<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
			</svg>
			{$lang === 'id' ? 'Sebelumnya:' : 'Prev:'}
			{getTheme('videographer').headerLabel[$lang]}
		</a>
		<span class="text-[12px] font-medium" style="color:{theme.inkSoft}">03 / {getTheme('leadership').headerLabel[$lang]}</span>
		<a href={resolve('/')} class="text-[13px] flex items-center gap-2 font-medium" style="color:{theme.accent}">
			{$lang === 'id' ? 'Kembali ke Beranda' : 'Back to home'}
			<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
		</a>
	</div>
</div>
