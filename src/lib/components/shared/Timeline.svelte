<script lang="ts">
	import { lang } from '$lib/stores/lang';
	import type { RoleTheme } from '$lib/theme';

	interface Item {
		year: string;
		phase: { en: string; id: string };
		title: { en: string; id: string };
		body: { en: string; id: string };
	}

	let { theme, items }: { theme: RoleTheme; items: Item[] } = $props();
</script>

<div class="relative">
	<div
		class="absolute left-[80px] top-0 bottom-0 w-px hidden sm:block"
		style="background: linear-gradient(to bottom, transparent, {theme.border} 10%, {theme.border} 90%, transparent)"
	></div>
	<div class="space-y-10">
		{#each items as item}
			<div class="relative flex flex-col sm:flex-row gap-4 sm:gap-8">
				<div class="sm:w-[80px] shrink-0 flex sm:flex-col sm:items-end gap-2 sm:gap-1 text-right">
					<span class="text-[13px] font-semibold" style="color:{theme.accent}">{item.year}</span>
					<span class="text-[10px] uppercase tracking-wide" style="color:{theme.inkFaint}">{item.phase[$lang]}</span>
				</div>
				<div
					class="absolute left-[76px] top-1 w-2.5 h-2.5 rounded-full hidden sm:block"
					style="background:{theme.accent}; box-shadow: 0 0 0 4px {theme.accent}22"
				></div>
				<div class="flex-1 pb-2" style="border-bottom: 1px solid {theme.border}">
					<h4 class="font-medium mb-1.5" style="color:{theme.ink}">{item.title[$lang]}</h4>
					<p class="text-[13px] leading-relaxed pb-4" style="color:{theme.inkSoft}">{item.body[$lang]}</p>
				</div>
			</div>
		{/each}
	</div>
</div>