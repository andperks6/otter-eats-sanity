<script lang="ts">
	import type { Ingredient } from 'parse-ingredient';
    import IngredientListItem from './IngredientListItem.svelte';

	export let data: Ingredient[];
	let ingredientLists: Ingredient[][];
	$: if (data) ingredientLists = groupIngredients(data);

	function groupIngredients(ingredients: Ingredient[]) {
		if (!ingredients) return [];
		const finalIngredientsCollection = [];
		let activeIngredientList = [];
		for (const i of ingredients) {
			if (i.isGroupHeader) {
				if (activeIngredientList.length) {
					finalIngredientsCollection.push(activeIngredientList);
					activeIngredientList = [];
				}
			}
			activeIngredientList.push(i);
		}
		if (activeIngredientList.length) {
			finalIngredientsCollection.push(activeIngredientList);
		}

		return finalIngredientsCollection;
	}
</script>

<h2>Ingredients</h2>

{#each ingredientLists as ingredientList}
    {#if ingredientList[0].isGroupHeader}
        <h3>{ingredientList[0].description}</h3>
        <ul>
            {#each ingredientList as ingredient, i}
            {#if i > 0}
                <IngredientListItem {ingredient}/>
            {/if}
        {/each}
        </ul>
    {:else}
    <ul>
        {#each ingredientList as ingredient, i}
        <IngredientListItem {ingredient}/>
    {/each}
    </ul>
    {/if}
{/each}
