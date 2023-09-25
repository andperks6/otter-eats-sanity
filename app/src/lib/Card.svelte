<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { Technique, Content, Recipe } from '$lib/utils/sanity';

	export let content: Technique | Recipe;

	$: isRecipe = (x: any): x is Recipe => x._type === 'recipe';
	$: route = isRecipe(content) ? 'recipes' : 'techniques';
</script>

<a class="flex" href={`/${route}/${content.slug.current}`}>
	<div class="cardLink card-compact sm:card flex flex-col bg-base-200 border-b-2 border-primary">
		{#if content.mainImage}
			<div class=" max-w-full">
				<img
					src={urlFor(content.mainImage).width(300).height(300).url()}
					alt="Cover image for {content.title}"
				/>
			</div>
		{/if}
		<div class="card-body h-auto justify-between">
			<div class="flex items-center justify-between" style="flex-wrap: wrap;">
				<h2 class="card-title flex-1">
					{content.title}
				</h2>
				{#if isRecipe(content)}
					{#each content.categories as cat}
						<div class="badge badge-secondary justify-end">{cat}</div>
					{/each}
				{/if}
			</div>
			{#if isRecipe(content)}
				<div class="grow flex flex-col">
					<div class="max-h-16 whitespace-normal truncate">{content.excerpt ?? ' '}</div>
				</div>
				{#if content.tags}
					<div class="card-actions">
						{#each content.tags as cat}
							<div class="badge badge-outline">{cat}</div>
						{/each}
					</div>
				{/if}
			{/if}
		</div>
	</div>
</a>
