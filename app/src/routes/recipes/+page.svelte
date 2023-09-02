<script lang="ts">
	import type { PageData } from './$types';
	import Card from '$lib/Card.svelte';

	export let data: PageData;
</script>

<section>
	{#if data.recipes.length}
		{#each data.recipes as content}
			<Card {content} />
		{/each}
	{:else}
		<div />
	{/if}
</section>
