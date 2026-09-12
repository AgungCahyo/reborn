<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { lang } from '$lib/stores/lang';
	import { t } from '$lib/i18n/t';

	const glitchLines = [
		'> ERROR 404: route_not_found',
		'> checking index... [ FAILED ]',
		'> fallback handler... [ TRIGGERED ]',
		'> status: page does not exist',
		'> $ _'
	];

	const navLinks = [
		{ href: '/', en: '← Home', id: '← Beranda' },
		{ href: '/developer', en: 'Developer', id: 'Developer' },
		{ href: '/videographer', en: 'Videographer', id: 'Videografer' },
		{ href: '/leadership', en: 'Leadership', id: 'Leadership' },
		{ href: '/about', en: 'About', id: 'Tentang' }
	];

	let termLines = $state<string[]>([]);
	let glitchActive = $state(false);

	onMount(() => {
		// Sequential terminal reveal, same pacing as the React version.
		let idx = 0;
		const timers: ReturnType<typeof setTimeout>[] = [];
		function next() {
			const id = setTimeout(
				() => {
					termLines = [...termLines, glitchLines[idx]];
					idx++;
					if (idx < glitchLines.length) next();
				},
				idx === 0 ? 400 : 340
			);
			timers.push(id);
		}
		next();

		// Occasional glitch flash on the 404 number.
		const glitchId = setInterval(() => {
			glitchActive = true;
			setTimeout(() => (glitchActive = false), 160);
		}, 3200);

		return () => {
			timers.forEach(clearTimeout);
			clearInterval(glitchId);
		};
	});
</script>

<svelte:head>
	<title>404 — Page Not Found</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<main
	class="relative flex min-h-screen flex-col overflow-hidden"
	style="background:#090c10; color:#b8c8e0"
>
	<!-- Grid background -->
	<div
		class="pointer-events-none fixed inset-0 z-0"
		style="background-image: linear-gradient(rgba(100,130,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100,130,200,0.03) 1px, transparent 1px); background-size: 44px 44px"
	></div>

	<!-- Glow blobs -->
	<div
		class="pointer-events-none fixed z-0 rounded-full"
		style="top:-80px; left:-80px; width:480px; height:480px; background: radial-gradient(circle, rgba(100,130,200,0.07) 0%, transparent 70%)"
	></div>
	<div
		class="pointer-events-none fixed z-0 rounded-full"
		style="bottom:-60px; right:-60px; width:360px; height:360px; background: radial-gradient(circle, rgba(52,211,153,0.04) 0%, transparent 70%)"
	></div>

	<!-- Minimal header -->
	<header
		in:fly={{ y: -8, duration: 500 }}
		class="relative z-10 flex items-center justify-between px-8 py-5"
		style="border-bottom: 1px solid rgba(100,130,200,0.06)"
	>
		<a href="/" class="group flex items-center gap-2.5">
			<svg class="h-3.5 w-3.5" style="color:rgba(184,200,224,0.3)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H5M5 12l7-7M5 12l7 7" />
			</svg>
			<span class="text-[10px] tracking-[0.25em] uppercase" style="color:rgba(184,200,224,0.3)">
				{$t('Portfolio', 'Portofolio')}
			</span>
		</a>

		<button
			class="flex items-center gap-1.5 rounded-full px-3 py-1.5 backdrop-blur-sm"
			style="border:1px solid rgba(100,130,200,0.14); background:rgba(8,12,16,0.5)"
			onclick={() => lang.update((l) => (l === 'en' ? 'id' : 'en'))}
			aria-label="Toggle language"
		>
			<span class="text-[10px] font-medium tracking-widest uppercase" style="color:{$lang === 'en' ? '#b8c8e0' : '#3a4860'}">EN</span>
			<span class="h-2.5 w-px" style="background:rgba(100,130,200,0.14)"></span>
			<span class="text-[10px] font-medium tracking-widest uppercase" style="color:{$lang === 'id' ? '#b8c8e0' : '#3a4860'}">ID</span>
		</button>
	</header>

	<!-- Main content -->
	<div class="relative z-10 flex flex-1 flex-col items-center justify-center px-8 py-16">
		<!-- Terminal breadcrumb -->
		<div in:fade={{ delay: 200, duration: 600 }} class="mb-10 flex items-center gap-2 font-mono" style="font-size:11px; color:#3a4860">
			<span style="color:#34d399">▶</span>
			<span style="color:#5a7a50">~/portfolio</span>
			<span>/</span>
			<span style="color:#6a8ab0">404</span>
		</div>

		<!-- Giant 404 -->
		<div class="relative mb-4 select-none" style="line-height:1">
			<h1
				in:fly={{ y: 24, duration: 900 }}
				class="text-center font-bold"
				style="font-family:var(--font-editorial, serif); font-size:clamp(7rem, 22vw, 18rem); letter-spacing:-0.04em;
				color:{glitchActive ? 'rgba(100,130,200,0.45)' : 'rgba(184,200,224,0.08)'};
				text-shadow:{glitchActive ? '4px 0 rgba(52,211,153,0.4), -4px 0 rgba(100,130,200,0.4)' : 'none'};
				transition: color 0.05s, text-shadow 0.05s"
			>
				404
			</h1>
			<div
				class="pointer-events-none absolute inset-0"
				style="background-image: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px); mix-blend-mode: multiply"
			></div>
		</div>

		<!-- Label -->
		<div in:fade={{ delay: 350, duration: 700 }} class="mb-12 text-center">
			<p class="mb-3 font-mono text-[10px] tracking-[0.35em] uppercase" style="color:#2a3848">
				{$t('Page Not Found', 'Halaman Tidak Ditemukan')}
			</p>
			<p class="max-w-sm text-center text-[14px] leading-relaxed" style="color:#3a4860">
				{$t(
					"This route doesn't exist in the codebase. Maybe it was moved, renamed, or never deployed.",
					'Route ini tidak ada di codebase. Mungkin sudah dipindah, diganti nama, atau belum di-deploy.'
				)}
			</p>
		</div>

		<!-- Terminal widget -->
		<div
			in:fly={{ y: 12, delay: 500, duration: 700 }}
			class="mb-12 w-full max-w-md overflow-hidden rounded-lg"
			style="border:1px solid rgba(100,130,200,0.14); background:#080c10"
		>
			<div class="flex items-center gap-1.5 px-4 py-2.5" style="border-bottom:1px solid rgba(100,130,200,0.1); background:#0a0e14">
				<div class="h-2 w-2 rounded-full" style="background:#ff5f57"></div>
				<div class="h-2 w-2 rounded-full" style="background:#febc2e"></div>
				<div class="h-2 w-2 rounded-full" style="background:#28c840"></div>
				<span class="ml-auto font-mono text-[9px]" style="color:#2a3848">error.log</span>
			</div>
			<div class="space-y-1.5 p-5 font-mono text-[11px] leading-relaxed">
				{#each termLines as line, i (i)}
					<div
						in:fly={{ x: -6, duration: 250 }}
						style="color:{i === 0
							? '#ef4444'
							: i === termLines.length - 1
								? '#34d399'
								: i % 2 === 0
									? '#4a5870'
									: '#3a4860'}"
					>
						{line}
					</div>
				{/each}
				{#if termLines.length === glitchLines.length}
					<span in:fade={{ duration: 300 }} class="animate-pulse" style="color:#34d399">█</span>
				{/if}
			</div>
		</div>

		<!-- Nav links -->
		<div in:fly={{ y: 8, delay: 750, duration: 600 }} class="flex flex-wrap justify-center gap-3">
			{#each navLinks as link, i (link.href)}
				<a
					href={link.href}
					class="rounded-full px-4 py-2 font-mono text-[11px] tracking-[0.16em] uppercase transition-opacity hover:opacity-100"
					style="border:1px solid rgba(100,130,200,0.12); color:{i === 0 ? '#b8c8e0' : '#4a5870'}; background:{i === 0
						? 'rgba(100,130,200,0.06)'
						: 'transparent'}"
				>
					{$lang === 'en' ? link.en : link.id}
				</a>
			{/each}
		</div>
	</div>

	<!-- Footer strip -->
	<div in:fade={{ delay: 1000, duration: 800 }} class="relative z-10 flex items-center justify-between px-8 py-4" style="border-top:1px solid rgba(100,130,200,0.05)">
		<span class="font-mono text-[9px] tracking-[0.2em] uppercase" style="color:rgba(184,200,224,0.1)">Kudus, Indonesia</span>
		<span class="font-mono text-[9px] tracking-[0.2em] uppercase" style="color:rgba(184,200,224,0.1)">
			{$t('Page not found', 'Halaman tidak ditemukan')} — 404
		</span>
	</div>
</main>
