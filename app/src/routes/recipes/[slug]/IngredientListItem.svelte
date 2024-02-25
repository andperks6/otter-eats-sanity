<script lang="ts">
	import type { Ingredient } from "parse-ingredient";
    import { formatQuantity } from 'format-quantity';

    export let ingredient: Ingredient
</script>

<li>
    {(ingredient.quantity) ? formatQuantity(ingredient.quantity) : ''}
    {(ingredient.quantity2) ? ' - ' + ingredient.quantity2 : ''}
    {ingredient.unitOfMeasure ?? ""}
    {' ' + ingredient.description}
</li>