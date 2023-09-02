import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getRecipe } from '$lib/utils/sanity';

export const ssr = false;

export const load = (async ({ params }) => {
	const recipe = await getRecipe(params.slug);
	if (recipe) return recipe;

	throw error(404, 'Not found');
}) satisfies PageLoad;
