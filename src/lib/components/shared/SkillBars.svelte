<script lang="ts">
	import { lang } from '$lib/stores/lang';
	import type { RoleTheme } from '$lib/theme';

	interface Skill {
		name: { en: string; id: string };
		level: number;
		desc: { en: string; id: string };
	}

	let { theme, skills }: { theme: RoleTheme; skills: Skill[] } = $props();
</script>

<div class="space-y-4">
	{#each skills as skill (skill)}
		<div>
			<div class="flex justify-between items-baseline mb-1.5">
				<span class="text-[13px] font-medium" style="color:{theme.ink}">{skill.name[$lang]}</span>
				<span class="text-[11px]" style="color:{theme.inkFaint}">{skill.level}%</span>
			</div>
			<div class="h-1.5 rounded-full overflow-hidden mb-1" style="background:{theme.accent}0f">
				<div
					class="h-full rounded-full"
					style="width:{skill.level}%; background: linear-gradient(to right, {theme.accent2}, {theme.accent})"
				></div>
			</div>
			<p class="text-[11px]" style="color:{theme.inkFaint}">{skill.desc[$lang]}</p>
		</div>
	{/each}
</div>