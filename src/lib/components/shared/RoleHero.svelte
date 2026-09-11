<script lang="ts">
	import { lang } from '$lib/stores/lang';
	import type { RoleTheme } from '$lib/theme';
	import type { RoleContent } from '$lib/content';

	let {
		theme,
		content,
		stats
	}: {
		theme: RoleTheme;
		content: RoleContent;
		stats: { n: string; l: { en: string; id: string } }[];
	} = $props();
</script>

<section class="relative overflow-hidden" style="border-bottom: 1px solid {theme.border}">
	<div class="relative max-w-6xl mx-auto px-8 lg:px-16" style="padding-top: 120px; padding-bottom: 80px">
		<div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-end">
			<div class="flex-1 order-2 lg:order-1">
				<h1
					class="font-semibold leading-[0.9] tracking-tight mb-4 italic whitespace-pre-line"
					style="font-family:{theme.font}; font-size: clamp(3rem, 7vw, 6.5rem); color:{theme.ink}"
				>
					{content.title[$lang]}
				</h1>
				<p class="text-[14px] leading-relaxed max-w-sm" style="color:{theme.inkSoft}">
					{content.subtitle[$lang]}
				</p>
				<div class="flex flex-wrap gap-4 mt-10">
					{#each stats as s}
						<div class="px-4 py-2.5 rounded-lg" style="border: 1px solid {theme.border}; background:{theme.surface}">
							<div class="text-lg font-bold" style="color:{theme.ink}">{s.n}</div>
							<div class="text-[9px] tracking-[0.2em] uppercase mt-0.5" style="color:{theme.inkFaint}">
								{s.l[$lang]}
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="relative shrink-0 w-full lg:w-[280px] h-[300px] lg:h-[380px] order-1 lg:order-2 rounded-2xl overflow-hidden" style="border: 1px solid {theme.border}">
				<img
					src={content.photo}
					alt=""
					class="absolute inset-0 w-full h-full object-cover"
					style="filter:{theme.photoFilter}; transform:{content.photoFlip ? 'scaleX(-1)' : 'none'}; object-position: 50% 20%"
				/>
				<div class="absolute inset-0" style="background: linear-gradient(to bottom, transparent 55%, {theme.paper} 100%); opacity:0.5"></div>
			</div>
		</div>
	</div>
</section>