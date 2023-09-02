<script lang="ts">
	import type { PageData } from './$types';
	import Card from '$lib/Card.svelte';

	export let data: PageData;
</script>

<section>
	{#if data.techniques.length}
		{#each data.techniques as technique}
			<Card  content={technique}/>
		{/each}
	{:else}
		<div />
	{/if}
</section>
