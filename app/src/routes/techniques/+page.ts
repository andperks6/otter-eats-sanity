import { getTechniques } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageData, PageLoad } from './$types';

export const load = (async () => {
	const techniques = await getTechniques();
	if (techniques) {
		return {
			techniques
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
