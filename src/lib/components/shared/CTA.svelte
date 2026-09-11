<script lang="ts">
	import type { RoleTheme } from '$lib/theme';

	let {
		theme,
		heading,
		body,
		ctaLabel,
		href
	}: {
		theme: RoleTheme;
		heading: string;
		body: string;
		ctaLabel: string;
		href: string;
	} = $props();
</script>

<section class="px-8 lg:px-16 py-16 lg:py-20">
	<div class="max-w-6xl mx-auto relative">
		<!-- stacked-paper offset behind, same trick as the tilted cards -->
		<div
			aria-hidden="true"
			class="absolute inset-0 rounded-[24px_10px_24px_10px]"
			style="background:{theme.accent2}22; transform: rotate(-1deg) translate(6px, 8px)"
		></div>

		<div
			class="relative overflow-hidden rounded-[10px_24px_10px_24px] p-8 lg:p-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8"
			style="background:{theme.ink}; color:{theme.paper}"
		>
			<div
				class="absolute inset-0 pointer-events-none"
				style="background-image: url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E&quot;); opacity:0.05"
			></div>

			<div class="relative">
				<h2 class="text-3xl lg:text-4xl font-semibold mb-2" style="font-family:{theme.font}">{heading}</h2>
				<p class="text-[14px] opacity-70 max-w-md">{body}</p>
			</div>
			<a
				href={href}
				class="relative inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-full text-[14px] whitespace-nowrap transition-transform duration-300 hover:-translate-y-0.5"
				style="background:{theme.accent2}; color:{theme.ink}"
			>
				{ctaLabel}
				<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
		</div>
	</div>
</section>