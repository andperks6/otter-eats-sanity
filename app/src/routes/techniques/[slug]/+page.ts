import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getTechnique, getTechniqueWithLinks } from '$lib/utils/sanity';

export const ssr = false;

export const load = (async ({ params }) => {
	const technique = await getTechniqueWithLinks(params.slug);
	if (technique) return technique;

	throw error(404, 'Not found');
}) satisfies PageLoad;
