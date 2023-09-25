<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { Content } from '$lib/utils/sanity';

	export let contents: Content[];
	export let type: string;
	export let title: string;
</script>

<div class=" bg-base-200 text-primary-content rounded-box p-4 mb-4 shadow-xl border-y-4 border-primary">
	<div class="prose"><h2>{title}</h2></div>

	<div
		class="flex flex-col overflow-x-auto hover:overflow-y-hidden lg:hover:overflow-y-auto lg:overflow-x-hidden lg:max-h-screen"
	>
		<div class="flex flex-row lg:flex-col gap-2 lg:divide-y-4 divide-x-4">
			{#each contents as content}
				<a class="flex border-none" href={`/${type}s/${content.slug.current}`}>
					<div
						class="cardLink card-compact sm:card w-max items-center
                        text-center mt-2 bg-base-100 border-y-4 border-secondary"
					>
						{#if content.mainImage}
							<figure>
								<img
									src={urlFor(content.mainImage).width(250).height(250).url()}
									alt={content.title}
								/>
							</figure>
						{/if}
						<div class="card-body max-h-28">
							<h3 class="card-title">{content.title}</h3>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
