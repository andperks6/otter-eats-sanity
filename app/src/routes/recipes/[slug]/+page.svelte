<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';
	import AdjacentCollection from './AdjacentCollection.svelte';
	import CustomDefaultListItem from '$lib/CustomDefaultListItem.svelte';
	import Ingredients from './Ingredients.svelte';

	export let data: PageData;

	$: categories = data.categories ?? [];
	$: tags = data.tags ?? [];

</script>

<div
	class="flex flex-col lg:flex-row flex-nowrap justify-around m-2 lg:mt-10 border-b-4 border-primary"
>
	<article class=" basis-5/6 py-6 prose xl:prose-lg w-full flex-grow ">
		<h1 class="mb-2">
			{data.title}
		</h1>
		<div class="flex flex-row justify-start gap-4">
			<span class="badge badge-outline justify-end">{formatDate(data._createdAt)}</span>

			{#each categories as cat}
				<div class="badge badge-primary">{cat}</div>
			{/each}

			{#each tags as tag}
				<div class="badge badge-secondary">{tag}</div>
			{/each}
		</div>
		<div class=" border-b-2 border-base-300">
			<p class="text-md text-base-content/70 my-4">{data.excerpt ?? ''}</p>
		</div>

		{#if data.mainImage}
			<figure class="flex justify-center my-4">
				<img
					src={urlFor(data.mainImage).width(600).height(800).url()}
					alt={data.title}
					class="object-fill h-auto md:max-w-md lg:max-w-full rounded bg-base-200"
				/>
			</figure>
		{/if}
		
		<div class="bg-base-200 px-10">

		{#if data.ingredients}
			<Ingredients data={data.ingredients}></Ingredients>
		{/if}
			<h2>Instructions</h2>
			<PortableText
				value={data.body ?? ''}
				components={{
					listItem: {
						bullet: CustomDefaultListItem,
						number: CustomDefaultListItem
					}
				}}
			/>
		</div>
		<div />
	</article>

	<div class="basis-1 md:basis-1/6">
		<div class="flex flex-col">
			{#if data.relatedRecipes}
				<AdjacentCollection contents={data.relatedRecipes} type="recipe" title="Related Recipes" />
			{/if}
			{#if data.techniques}
				<AdjacentCollection contents={data.techniques} type="technique" title="Techniques" />
			{/if}
		</div>
	</div>
</div>
