import type { PortableTextBlock } from '@portabletext/types';
import { createClient } from '@sanity/client';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import type { Ingredient } from 'parse-ingredient';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2023-03-20' // date of setup
});

export async function getPosts(): Promise<Post[]> {
	return await client.fetch(
		groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
	);
}

export async function getPost(slug: string): Promise<Post> {
	return await client.fetch(groq`*[_type == "post" && slug.current == $slug][0]`, {
		slug
	});
}

export async function getRecipes(count: number=100): Promise<Recipe[]> {
	return await client.fetch(
		groq`*[_type == "recipe" && defined(slug.current)] | order(_createdAt desc)
		{title, _type, slug, tags, excerpt, categories, techniques[]->{title}, mainImage, _createdAt}
		[0...${count}]`
	);
}

export async function getRecipe(slug: string): Promise<Recipe> {
	return await client.fetch(groq`*[_type == "recipe" && slug.current == $slug][0]
		{title, slug, excerpt, mainImage, categories, tags, _createdAt, ingredients, body,
		techniques[]->, relatedRecipes[]->{title, slug, mainImage}}`,{
			slug
		});
}

export async function getTechniques(): Promise<Technique[]> {
	return await client.fetch(
		groq`*[_type == "technique" && defined(slug.current)] | order(_createdAt desc)`
	);
}

export async function getTechnique(slug: string): Promise<Technique> {
	return await client.fetch(groq`*[_type == "technique" && slug.current == $slug][0]`, {
		slug
	});
}

export interface Content {
	_createdAt: string;
	title?: string;
	slug: Slug;
	mainImage?: ImageAsset;
	body: PortableTextBlock[];
}
export interface Post extends Content {
	_type: 'post';
	slug: Slug;
	excerpt?: string;
}

const categories = ['breads', 'breakfasts', 'lunches', 'dinners', 'drinks'] as const
type Category = typeof categories[number]

export interface Recipe extends Content{
	_type: 'recipe';
	excerpt?: string;
	ingredients?: Ingredient[];
	tags: string[];
	categories: Category[];
	techniques: Technique[];
	relatedRecipes: Recipe[];
}

interface Reference {
	_type: 'reference',
	_ref: string
}

// interface Ingredient {
// 	_type: 'ingredient';
// 	_key: string;
// 	name: string;
// 	quantity: number;
// 	unit?: string;
// }

export interface Technique extends Content{
	_type: 'technique';
	relatedRecipes: Recipe[];
}