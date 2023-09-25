<script lang="ts">
	import type { PageData } from './$types';
	import Card from '$lib/Card.svelte';

	export let data: PageData;
</script>

<section class="min-h-screen">
	{#if data.recipes.length}
	<div class="m-2 sm:my-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
		{#each data.recipes as content}
			<Card {content} />
	{/each}
	</div>
	{:else}
	<div>No recipes returned</div>
	{/if}
</section>
