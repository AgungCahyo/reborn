<script lang="ts">
	import { lang } from '$lib/stores/lang';
	import type { RoleTheme } from '$lib/theme';

	let { theme }: { theme: RoleTheme } = $props();
</script>

<button
	class="relative flex items-center gap-1.5 rounded-full px-3 py-1.5 backdrop-blur-sm transition-colors duration-500"
	style="border:1px solid {theme.border}; background:{theme.surface}99"
	onclick={() => lang.update((l) => (l === 'en' ? 'id' : 'en'))}
	aria-label="Toggle language"
>
	<span
		class="text-[10px] font-medium tracking-widest uppercase transition-colors duration-300"
		style="color:{$lang === 'en' ? theme.accent : theme.inkFaint}"
	>
		EN
	</span>
	<span class="h-2.5 w-px" style="background:{theme.border}"></span>
	<span
		class="text-[10px] font-medium tracking-widest uppercase transition-colors duration-300"
		style="color:{$lang === 'id' ? theme.accent : theme.inkFaint}"
	>
		ID
	</span>
	<span
		class="absolute -bottom-1 left-1/2 h-1 w-1 rounded-full transition-transform duration-300"
		style="background:{theme.accent}; transform: translateX({$lang === 'en' ? '-11px' : '11px'})"
	></span>
</button>
