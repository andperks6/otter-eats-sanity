<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { Technique, Content, Recipe } from '$lib/utils/sanity';

	export let content: Technique | Recipe;

	$: isRecipe = (x: any): x is Recipe => x._type === 'recipe';
	$: route = isRecipe(content) ? 'recipes' : 'techniques';
</script>

<div class="card">
	{#if content.mainImage}
		<img
			class="card__cover"
			src={urlFor(content.mainImage).width(500).height(300).url()}
			alt="Cover image for {content.title}"
		/>
	{:else}
		<div class="card__cover--none" />
	{/if}

	<div class="card__container">
		<h3 class="card__title">
			<a class="card__link" href={`/${route}/${content.slug.current}`}>
				{content.title}
			</a>
		</h3>
		{#if isRecipe(content)}
		<p class="card__excerpt">{content.excerpt}</p>

		{/if}
		<p class="card__date">
			{formatDate(content._createdAt)}
		</p>
	</div>
</div>
