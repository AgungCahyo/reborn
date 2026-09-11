<script lang="ts">
	import { lang } from '$lib/stores/lang';
	import { getTheme, type Role } from '$lib/theme';
	import type { RoleContent } from '$lib/content';

	let {
		role,
		content,
		active,
		onactivate
	}: {
		role: Role;
		content: RoleContent;
		active: boolean;
		onactivate: () => void;
	} = $props();

	let theme = $derived(getTheme(role));
</script>

<a
	href="/{role}"
	class="relative overflow-hidden block h-full"
	style="flex:{active ? 5 : 1}; transition: flex 700ms cubic-bezier(0.4,0,0.2,1); background:{theme.paper}"
	onmouseenter={onactivate}
	onfocus={onactivate}
	onclick={(e) => { if (!active) e.preventDefault(); }}
>
	<!-- Photo -->
	<div class="absolute inset-0">
		<img
			src={content.photo}
			alt=""
			class="absolute inset-0 w-full h-full object-cover"
			style="
				filter:{theme.photoFilter} brightness({active ? 1 : 0.65});
				transform:{content.photoFlip ? 'scaleX(-1)' : 'none'};
				object-position: 50% 20%;
				transition: filter 700ms ease;
			"
		/>
		<!-- light wash for legibility, subtle so the duotone still reads -->
		<div
			class="absolute inset-0 transition-opacity duration-700"
			style="background:{theme.paper}; opacity:{active ? 0.16 : 0.34}"
		></div>
		<div
			class="absolute inset-0"
			style="background: linear-gradient(to top, {theme.paper} 0%, transparent 60%)"
		></div>
	</div>

	<!-- Content -->
	<div
		class="relative z-10 h-full flex flex-col justify-between"
		style="padding: 48px {active ? 'clamp(28px, 3.5vw, 52px)' : '20px'}"
	>
		<span
			class="text-[9px] tracking-[0.25em] uppercase transition-colors duration-500"
			style="color:{active ? theme.inkSoft : 'rgba(0,0,0,0.28)'}"
		>
			{role === 'developer' ? '01' : role === 'leadership' ? '02' : '03'}
		</span>

		<div class="flex-1 flex items-center overflow-hidden">
			{#if active}
				<h2
					class="font-semibold leading-[0.9] whitespace-pre-line italic"
					style="font-family:{theme.font}; font-size: clamp(2rem, 3.4vw, 3.6rem); color:{theme.accent}"
				>
					{content.title[$lang]}
				</h2>
			{:else}
				<h2
					class="font-bold text-[0.85rem]"
					style="font-family:{theme.font}; color:{theme.accent}66; writing-mode: vertical-rl; letter-spacing: 0.1em"
				>
					{content.title[$lang].split('\n')[0]}
				</h2>
			{/if}
		</div>

		{#if active}
			<div class="space-y-3">
				<p class="text-[12px] leading-relaxed max-w-55" style="color:{theme.inkSoft}">
					{content.subtitle[$lang]}
				</p>
				<p class="text-[9px] tracking-[0.15em] uppercase opacity-70" style="color:{theme.inkSoft}">
					{content.tag[$lang]}
				</p>
				<div class="flex items-center gap-2 text-[11px]" style="color:{theme.accent}">
					<span>{content.cta[$lang]}</span>
					<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</div>
			</div>
		{/if}
	</div>
</a>
