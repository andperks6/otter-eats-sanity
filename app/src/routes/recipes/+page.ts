import { getRecipes } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const recipes = await getRecipes();
	if (recipes) {
		return {
			recipes
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
