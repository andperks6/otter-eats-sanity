<script lang="ts">
	import TallCard from './TallCard.svelte';

	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import Icon from '$lib/Icon.svelte';
	import { goto } from '$app/navigation';

	const titleLines = [
		'The recipes',
		'and techniques to make',
		'',
		'otterly',
		'',
		'delicious creations.'
	];
	let animate = false;
	onMount(() => (animate = true));
	export let data: PageData;
</script>

<svelte:head>
	<title>Otter Eats</title>
	<meta name="description" content="Otter Eats" />
</svelte:head>

<div class="hero md:min-h-50 max-h-screen bg-base-200/60" out:fly={{ x: -500, duration: 300 }}>
	<div class="hero-content max-h-screen lg:max-h-full ">
		<div class=" max-w-xs md:max-w-sm  max-h-screen rounded-lg">
			<img
			src="/otter.svg"
			alt="cutest otter you've ever seen"
		/>
		</div>
		<div class="px-8 py-4 m-2 md:m-4 max-md:absolute bottom-56 md:bottom-20  max-md:bg-base-200/60 flex flex-col">
			{#if animate}
				<div class="lines">
					{#each titleLines as line, i}
						<div class="overflow">
							<span class="line text-xl md:text-2xl lg:text-3xl" in:fly={{ y: 100, delay: 300 * i, easing: backOut }}>
								{line}
							</span>
						</div>
					{/each}
				</div>
			{/if}
			<p class="py-6 max-md:text-white" />

			<div class=" flex flex-row justify-center items-center gap-2">
				<button class="btn btn-primary sm:btn-wide" on:click={() => goto('/recipes')}>
					View Recipes</button
				>
				<button class="btn btn-primary sm:btn-wide" on:click={() => goto('/nicebuns')}>
					Order Nice Buns <Icon name="buns" class="h-6 w-6" />
				</button>
			</div>
		</div>
	</div>
</div>

{#if data.recipes}
	<div class="bg-gray-200 pt-4 flex flex-col max-w-full">
		<div class="self-center prose text-center"><h1 class=" m-4">Latest Recipes</h1></div>
		<div class="flex flex-row gap-2 justify-start lg:justify-center p-4 overflow-x-auto lg:overflow-x-hidden ">
			{#each data.recipes as recipe}
				<TallCard {recipe} />
			{/each}
		</div>
	</div>
{/if}


<style>
	.lines {
		max-width: 80vw;
		font-size: 2rem;
		font-weight: 900;
		text-align: center;
	}
	.lines .overflow {
		display: inline-block;
		overflow: hidden;
		vertical-align: bottom;
	}

	.lines .line {
		display: inline-block;
		margin: 0.2rem;
		text-transform: uppercase;
		text-shadow: 2px 0 10px hsl(0 0% 0% / 20%);
	}
</style>
