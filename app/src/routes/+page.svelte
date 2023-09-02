<script>
	import { onMount } from 'svelte';
	import Footer from '$lib/Footer.svelte';
	/** @type {import('./$types').PageData} */
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
		'delicious creations.',
		'🍲'
	];
	let animate = false;
	onMount(() => (animate = true));

	function handleStart() {
		goto('/recipes');
	}
</script>

<svelte:head>
	<title>Otter Eats</title>
	<meta name="description" content="Otter Eats" />
</svelte:head>

<div class="hero md:min-h-screen bg-base-200/60" out:fly={{ x: -500, duration: 300 }}>
	<div class="hero-content flex-col lg:flex-row-reverse">
		<img
			src="/otter.svg"
			alt="cutest otter you've ever seen"
			class="md:max-w-md max-w-screen rounded-lg shadow-2xl"
		/>
		<div class="p-8 m-2 md:m-4 max-md:absolute max-md:bottom-0 max-md:bg-base-200/60 flex flex-col">
			{#if animate}
				<div class="lines">
					{#each titleLines as line, i}
						<div class="overflow">
							<span
								class="line"
								in:fly={{
									y: 100,
									delay: 300 * i,
									easing: backOut
								}}
							>
								{line}
							</span>
						</div>
					{/each}
				</div>
			{/if}

			<!-- <h1 class=" max-md:text-white sm:text-5xl text-3xl font-bold">See Yourself in a New Light</h1> -->
			<p class="py-6 max-md:text-white" />

                <div class=" self-center" >
                    <button class="btn btn-primary btn-wide self-center" on:click={() => goto('/recipes')}>
                        View Recipes</button
                    >
                    <button class="btn btn-primary btn-wide self-center" on:click={() => goto('/nicebuns')}>
                        Order Nice Buns <Icon name="buns" class="h-6 w-6" />
                    </button>
                </div>
		</div>
	</div>
</div>

<Footer />

<style>
	.lines {
		max-width: 800px;
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
