<script lang="ts">
	import { onMount } from 'svelte';
	import { lang } from '$lib/stores/lang';
	import { activeRole } from '$lib/stores/activeRole';
	import { getTheme } from '$lib/theme';
	import { about, aboutManifesto, aboutValues, aboutTimeline, aboutOffwork, aboutAvailability } from '$lib/content/about';
	import SectionLabel from '$lib/components/shared/SectionLabel.svelte';
	import Card from '$lib/components/shared/Card.svelte';
	import CTA from '$lib/components/shared/CTA.svelte';
	import Timeline from '$lib/components/shared/Timeline.svelte';

	const theme = getTheme('about');

	// activeRole drives the homepage panel + shared Nav color elsewhere;
	// 'about' itself isn't part of that carousel, so this just keeps Nav's
	// underlying role theme stable while this page is open.
	onMount(() => activeRole.set('leadership'));

	const pageTitle = $derived(`${about.title[$lang]} — Portfolio`);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={about.subtitle[$lang]} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={about.subtitle[$lang]} />
</svelte:head>

<div style="background:{theme.paper}; color:{theme.ink}">
	<!-- Hero — the manifesto, not a bio -->
	<section class="px-8 lg:px-16 pt-16 pb-14">
		<div class="max-w-3xl mx-auto text-center">
			<SectionLabel {theme}>{about.title[$lang]}</SectionLabel>
			<h1
				class="text-[32px] sm:text-[42px] font-semibold whitespace-pre-line mb-6"
				style="font-family:{theme.font}; color:{theme.ink}; line-height:1.15"
			>
				{aboutManifesto.heading[$lang]}
			</h1>
			<p class="text-[15px] leading-relaxed mb-6" style="color:{theme.inkSoft}">
				{aboutManifesto.intro[$lang]}
			</p>
			<span
				class="inline-block px-3 py-1 text-[11px] tracking-[0.15em] uppercase rounded-full"
				style="border:1px solid {theme.border}; color:{theme.inkFaint}"
			>
				{about.tag[$lang]}
			</span>
		</div>
	</section>

	<!-- Three pillars -->
	<section class="px-8 lg:px-16 py-16" style="border-top: 1px solid {theme.border}">
		<div class="max-w-6xl mx-auto">
			<div class="grid md:grid-cols-3 gap-6 mb-14">
				{#each aboutManifesto.pillars as pillar, i}
					<Card {theme} tilt={i === 0 ? -0.6 : i === 1 ? 0.5 : -0.3}>
						<p class="text-[11px] font-semibold tracking-[0.2em] uppercase mb-3" style="color:{theme.accent}">
							{pillar.label[$lang]}
						</p>
						<p class="text-[16px] leading-relaxed" style="font-family:{theme.font}; color:{theme.ink}">
							{pillar.body[$lang]}
						</p>
					</Card>
				{/each}
			</div>

			<!-- Closing manifesto line -->
			<div class="text-center">
				<p
					class="text-[22px] sm:text-[26px] font-semibold whitespace-pre-line mb-6"
					style="font-family:{theme.font}; color:{theme.ink}; line-height:1.3"
				>
					{aboutManifesto.closingLine[$lang]}
				</p>
				<p class="flex flex-wrap justify-center gap-x-2 gap-y-1 text-[12px] tracking-[0.2em] uppercase" style="color:{theme.inkFaint}">
					{#each aboutManifesto.process as step, i}
						<span>{step[$lang]}</span>
						{#if i < aboutManifesto.process.length - 1}
							<span style="color:{theme.border}">·</span>
						{/if}
					{/each}
				</p>
			</div>
		</div>
	</section>

	<!-- What I hold onto — values -->
	<section class="px-8 lg:px-16 py-16" style="border-top: 1px solid {theme.border}; background:{theme.accent2}08">
		<div class="max-w-6xl mx-auto">
			<SectionLabel {theme}>{$lang === 'id' ? 'Yang saya pegang' : 'What I hold onto'}</SectionLabel>
			<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each aboutValues as value}
					<Card {theme}>
						<p class="text-[24px] font-semibold mb-3" style="font-family:{theme.font}; color:{theme.inkFaint}">
							{value.num}
						</p>
						<h3 class="text-[15px] font-semibold mb-1.5" style="color:{theme.ink}">{value.title[$lang]}</h3>
						<p class="text-[13px] leading-relaxed" style="color:{theme.inkSoft}">{value.body[$lang]}</p>
					</Card>
				{/each}
			</div>
		</div>
	</section>

	<!-- Journey — the non-linear path -->
	<section class="px-8 lg:px-16 py-16" style="border-top: 1px solid {theme.border}">
		<div class="max-w-6xl mx-auto">
			<div class="flex flex-wrap items-center justify-between gap-3 mb-8">
				<SectionLabel {theme}>{$lang === 'id' ? 'Perjalanan' : 'Journey'}</SectionLabel>
				<p class="text-[13px] font-medium" style="color:{theme.inkSoft}">2019 — {$lang === 'id' ? 'Sekarang' : 'Present'}</p>
			</div>
			<Timeline {theme} items={aboutTimeline} />
		</div>
	</section>

	<!-- Availability -->
	<section class="px-8 lg:px-16 py-16" style="border-top: 1px solid {theme.border}; background:{theme.accent2}08">
		<div class="max-w-6xl mx-auto">
			<SectionLabel {theme}>{$lang === 'id' ? 'Ketersediaan' : 'Availability'}</SectionLabel>
			<div class="grid sm:grid-cols-3 gap-4">
				{#each aboutAvailability as a}
					<div class="flex items-center gap-3 px-4 py-3 rounded-xl" style="border:1px solid {theme.border}; background:{theme.surface}">
						<span
							class="h-2 w-2 rounded-full flex-shrink-0"
							style="background:{a.open ? '#3fae74' : theme.inkFaint}"
						></span>
						<div>
							<p class="text-[13px] font-medium" style="color:{theme.ink}">{a.role[$lang]}</p>
							<p class="text-[11px] tracking-[0.1em] uppercase" style="color:{theme.inkSoft}">{a.status[$lang]}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Personal touch -->
	<section class="px-8 lg:px-16 py-16" style="border-top: 1px solid {theme.border}">
		<div class="max-w-2xl mx-auto text-center">
			<p class="text-[14px] leading-relaxed mb-6" style="color:{theme.inkSoft}">
				{$lang === 'id'
					? 'Berbasis di Kudus, Indonesia. Saat ini sedang membangun sesuatu, belajar sesuatu, dan mencari tahu apa langkah berikutnya.'
					: 'Based in Kudus, Indonesia. Currently building things, learning things, and figuring out what comes next.'}
			</p>
			<div class="flex flex-wrap justify-center gap-2">
				{#each aboutOffwork as item}
					<span class="px-3 py-1 text-[11px] rounded-full" style="border:1px solid {theme.border}; color:{theme.inkFaint}">
						{item[$lang]}
					</span>
				{/each}
			</div>
		</div>
	</section>

	<CTA
		{theme}
		heading={$lang === 'id' ? 'Kalau ini resonan, ngobrol yuk.' : 'If this resonates, let’s talk.'}
		body={$lang === 'id'
			? 'Baik itu produk, video, atau operasional yang perlu dibenahi sistemnya.'
			: 'Whether it’s a product, a video, or an operation that needs its system rebuilt.'}
		ctaLabel="Get in touch"
		href="mailto:cahyoprasetyo507@gmail.com"
	/>

	<!-- Footer nav -->
	<div class="px-8 py-6 flex justify-between items-center" style="border-top: 1px solid {theme.border}">
		<a href="/leadership" class="text-[13px] flex items-center gap-2 font-medium" style="color:{theme.inkSoft}">
			<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
			</svg>
			{$lang === 'id' ? 'Sebelumnya: Lead' : 'Prev: Lead'}
		</a>
		<span class="text-[12px] font-medium" style="color:{theme.inkSoft}">04 / {getTheme('about').headerLabel[$lang]}</span>
		<a href="/" class="text-[13px] flex items-center gap-2 font-medium" style="color:{theme.accent}">
			{$lang === 'id' ? 'Kembali ke Beranda' : 'Back to home'}
			<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
		</a>
	</div>
</div>
