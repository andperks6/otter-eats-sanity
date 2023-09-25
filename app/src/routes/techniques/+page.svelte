<script lang="ts">
	import type { PageData } from './$types';
	import Card from '$lib/Card.svelte';

	export let data: PageData;
</script>

<section class="min-h-screen">
	{#if data.techniques.length}
	<div class="m-2 sm:my-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
		{#each data.techniques as technique}
			<Card  content={technique}/>
		{/each}
	</div>
	{:else}
		<div />
	{/if}
</section>
