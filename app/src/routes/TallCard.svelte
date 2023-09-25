<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { Recipe } from '$lib/utils/sanity';
	export let recipe: Recipe;

	$: categories = recipe.categories ?? [];
	$: tags = recipe.tags ?? [];
</script>

<a
	href={`/recipes/${recipe.slug.current}`}
	class="cardLink card max-w-fit card-compact basis-1/4 bg-base-100 shadow-lg prose prose-sm"
>
	{#if recipe.mainImage}
		<figure class="w-52 md:w-64 lg:w-auto">
			<img
				src={urlFor(recipe.mainImage).width(300).height(400).url()}
				alt="Cover image for {recipe.title}"
				class="my-0 basis-3/5"
			/>
		</figure>
		
	{:else}
		<img src="https://placeholder.pics/svg/300x400/DADADA-FFFFFF/D7D7D7" alt="placeholder" />
	{/if}
	<div class="card-body">
		<div class="card-title flex justify-between">
			{recipe.title}
			{#if categories.length}
				<div class="badge badge-secondary justify-end">{recipe.categories[0]}</div>
			{/if}
		</div>
		<p class="xl:w-64 max-h-20 whitespace-normal truncate ...">{recipe.excerpt ?? ''}</p>
		<div class="card-actions justify-end">
			{#each tags as tag}
				<div class="badge badge-outline">{tag}</div>
			{/each}
		</div>
	</div>
</a>
