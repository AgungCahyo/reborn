<script lang="ts">
	import { lang } from '$lib/stores/lang';
	import type { RoleTheme } from '$lib/theme';

	interface Project {
		type: { en: string; id: string };
		title: { en: string; id: string };
		subtitle: { en: string; id: string };
		body: { en: string; id: string };
		tags: string[];
		link: string;
	}

	let { theme, projects }: { theme: RoleTheme; projects: Project[] } = $props();

	let playing = $state<number | null>(null);
	let openDetail = $state<number | null>(null);

	function videoId(link: string): string {
		try {
			const url = new URL(link);
			if (url.hostname.includes('youtu.be')) return url.pathname.slice(1);
			return url.searchParams.get('v') ?? '';
		} catch {
			return '';
		}
	}

	function thumb(link: string, quality: 'hqdefault' | 'maxresdefault' = 'hqdefault') {
		const id = videoId(link);
		return id ? `https://img.youtube.com/vi/${id}/${quality}.jpg` : '';
	}

	function embedSrc(link: string) {
		const id = videoId(link);
		return id ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0` : '';
	}
</script>

<!-- Bento grid: first project large, rest small -->
<div class="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[160px] sm:grid-cols-4 sm:gap-4">
	{#each projects as p, i (p.link)}
		<div
			class="group relative overflow-hidden rounded-2xl"
			style="border:1px solid {theme.border}; background:{theme.ink};
				grid-column: span {i === 0 ? 4 : 2} / span {i === 0 ? 4 : 2};
				grid-row: span {i === 0 ? 2 : 1} / span {i === 0 ? 2 : 1};"
		>
			{#if playing === i}
				<iframe
					class="absolute inset-0 h-full w-full"
					src={embedSrc(p.link)}
					title={p.title[$lang]}
					allow="autoplay; encrypted-media; picture-in-picture"
					allowfullscreen
				></iframe>
			{:else}
				<button
					class="absolute inset-0 h-full w-full text-left"
					onclick={() => (playing = i)}
					aria-label={`Play ${p.title[$lang]}`}
				>
					<img
						src={thumb(p.link, i === 0 ? 'maxresdefault' : 'hqdefault')}
						alt=""
						loading="lazy"
						class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						style="filter:{theme.photoFilter}"
					/>
					<div
						class="absolute inset-0"
						style="background: linear-gradient(to top, {theme.ink}e6 0%, {theme.ink}33 45%, transparent 70%)"
					></div>

					<!-- Play button -->
					<div class="absolute inset-0 flex items-center justify-center">
						<div
							class="flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
							style="width:{i === 0 ? '58px' : '42px'}; height:{i === 0
								? '58px'
								: '42px'}; background:{theme.surface}f0; color:{theme.accent}"
						>
							<svg
								viewBox="0 0 24 24"
								fill="currentColor"
								style="width:{i === 0 ? '22px' : '16px'}; height:{i === 0 ? '22px' : '16px'}; margin-left:2px"
							>
								<path d="M8 5v14l11-7z" />
							</svg>
						</div>
					</div>

					<!-- Text overlay -->
					<div class="absolute right-0 bottom-0 left-0 p-3 sm:p-4">
						<p
							class="mb-1 text-[9px] tracking-[0.2em] uppercase sm:text-[10px]"
							style="color:{theme.accent2}"
						>
							{p.type[$lang]}
						</p>
						<h3
							class="leading-tight font-semibold"
							style="font-family:{theme.font}; color:{theme.surface}; font-size:{i === 0
								? '20px'
								: '13px'}"
						>
							{p.title[$lang]}
						</h3>
						{#if i === 0}
							<p class="mt-1 max-w-md text-[12px]" style="color:{theme.surface}cc">
								{p.subtitle[$lang]}
							</p>
						{/if}
					</div>
				</button>
			{/if}
		</div>
	{/each}
</div>

<!-- Full descriptions, kept for every project (content parity with the old list view) -->
<div class="mt-6 divide-y" style="border-top: 1px solid {theme.border}; border-color: {theme.border}">
	{#each projects as p, i (p.link)}
		<div class="py-4" style="border-color:{theme.border}">
			<button
				class="flex w-full items-center justify-between gap-4 text-left"
				onclick={() => (openDetail = openDetail === i ? null : i)}
			>
				<div class="flex items-center gap-3">
					<span class="text-[10px]" style="font-family: var(--font-mono); color:{theme.inkFaint}"
						>{String(i + 1).padStart(2, '0')}</span
					>
					<span class="text-[13px] font-medium" style="color:{theme.ink}">{p.title[$lang]}</span>
					<span class="text-[10px] tracking-[0.15em] uppercase" style="color:{theme.accent2}"
						>{p.subtitle[$lang]}</span
					>
				</div>
				<span
					class="text-[12px] transition-transform"
					style="color:{theme.inkFaint}; transform: rotate({openDetail === i ? 45 : 0}deg)"
				>
					+
				</span>
			</button>
			{#if openDetail === i}
				<div class="mt-3 pl-7">
					<p class="mb-3 text-[13px] leading-relaxed" style="color:{theme.inkSoft}">{p.body[$lang]}</p>
					<div class="flex flex-wrap gap-1.5">
						{#each p.tags as tag (tag)}
							<span
								class="rounded-full px-2.5 py-0.5 text-[11px]"
								style="border: 1px solid {theme.border}; color:{theme.inkFaint}"
							>
								{tag}
							</span>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>