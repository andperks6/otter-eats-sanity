<script lang="ts">
  	import {PortableText} from '@portabletext/svelte';
  	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';
	import CustomDefaultListItem from '$lib/CustomDefaultListItem.svelte';
	import AdjacentCollection from '$lib/AdjacentCollection.svelte';

	export let data: PageData;
</script>

<div
	class="flex flex-col lg:flex-row flex-nowrap justify-around m-2 lg:mt-10 border-b-4 border-primary"
>
	<article class=" basis-5/6 py-6 prose xl:prose-lg w-full flex-grow">
		<h1 class="mb-2">
			{data.title}
		</h1>
		<div class="flex flex-row justify-start gap-4">
			<span class="badge badge-outline justify-end">{formatDate(data._createdAt)}</span>
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

		<div class=" bg-base-200">
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
		{#if data.backlinks}
			<AdjacentCollection contents={data.backlinks} type="recipe" title="Related Recipes" />
		{/if}
	</div>
</div>
