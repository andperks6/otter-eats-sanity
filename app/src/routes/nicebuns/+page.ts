import { getPage, getRecipes } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const page = await getPage('nice-buns');
	if (page) {
		return {
			page
		};
	}
	throw error(404, 'Not found');
}) satisfies PageLoad;
