<script lang="ts">
	import { PortableText } from '@nermolov/svelte-portabletext';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';
	import CustomDefaultListItem from '$lib/CustomDefaultListItem.svelte';

	export let data: PageData;
</script>


<section class="post">
	{#if data.mainImage}
		<img
			class="post__cover"
			src={urlFor(data.mainImage).url()}
			alt="Cover image for {data.title}"
		/>
	{:else}
		<div class="post__cover--none" />
	{/if}
	<div class="post__container">
		<h1 class="post__title">{data.title}</h1>
		<p class="post__excerpt">{data.excerpt ?? ''}</p>
		<p class="post__date">
			{formatDate(data._createdAt)}
		</p>
		<div class="post__content">
			<PortableText value={data.body ?? ''} 
			components={{
				listItem: {
					bullet: CustomDefaultListItem,
					number: CustomDefaultListItem,
				}
			}}
			/>
		</div>
	</div>
</section>

<div>
	<h1 class="text-lg">Techniques</h1>
	<div class="carousel carousel-center rounded-box">
		{#each data.techniques as technique}
		<div class="carousel-item">
			<div class="card card-compact w-96 bg-base-100 shadow-xl">
				{#if technique.mainImage}
				<figure><img src={urlFor(technique.mainImage).url()} alt={technique.title} /></figure>
				{/if}
				<div class="card-body">
				  <h2 class="card-title">{technique.title}</h2>
				  <PortableText value={technique.body ?? ''}
				  components={{
					listItem: {
						bullet: CustomDefaultListItem,
            			number: CustomDefaultListItem,
					}
					}} 
				  />
				  <div class="card-actions justify-end">
					<button class="btn btn-primary">Other recipes with this technique</button>
				  </div>
				</div>
			  </div>
		</div> 
		{/each}
	 </div>
</div>
<!-- <div class="flex justify-center">
    <div class="py-6 prose lg:prose-lg">
		{#if data.mainImage}
		<figure class="flex justify-center">
                <img src={urlFor(data.mainImage).url().width(500).height(300).url()} alt={data.title}  class="object-fill h-auto md:max-w-md max-w-screen  rounded bg-base-200" />
            </figure>
        {/if}
        <h1>{data.title}</h1>
	
        <div class="flex gap-3">
            <span class="badge badge-ghost">
               { formatDate(data._createdAt)}
            </span>
			<span class="text-md text-base-content/70">{data.excerpt}</span>

        </div>
        <div>
        </div>
    </div>
</div> -->