<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/shared/Nav.svelte';
	import { activeRole } from '$lib/stores/activeRole';

	let { children } = $props();
</script>

<Nav role={$activeRole} />

<main class="pt-[60px]">
	{@render children()}
</main>