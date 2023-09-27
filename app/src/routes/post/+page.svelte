<script lang="ts">
	import Card from '../../components/Card.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;
</script>

<section>
	{#if data.posts.length}
		{#each data.posts as post}
			<Card {post} />
		{/each}
	{:else}
		<div />
	{/if}
</section>
