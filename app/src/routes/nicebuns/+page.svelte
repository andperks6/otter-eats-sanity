<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';
	export let data: PageData;

</script>

<div class="hero  min-h-screen bg-base-200" >
	<div class="hero-overlay bg-opacity-10"></div>	
	<div class="hero-content gap-8 justify-center align-middle w-full flex-col lg:flex-row">
		<div class="text-center l w-2/5 mt-10">
			{#if data.page.mainImage}
			<img src="{urlFor(data.page.mainImage).url()}" alt="nice buns logo">
			{/if}
			<!-- <h1 class="text-5xl font-bold">Order now</h1> -->
			<p class="py-6">
				{data.page.excerpt ?? ''}
			</p>
		</div>
		<div class=" flex-shrink-0 w-full lg:w-3/5 shadow-2xl bg-base-100 bg-transparent">
			<div class="aspect-w-8 aspect-h-8 ">
				<iframe
					allowtransparency={true}
					title="Nice Buns Order"
					src="{data.page.link}"
					frameborder="0"
					marginheight="0"
					marginwidth="0">Loading…</iframe
				>
			</div>
		</div>
	</div>
</div>
