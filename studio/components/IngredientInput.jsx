import { parseIngredient } from 'parse-ingredient';
import { Stack, Text, TextArea, Card } from '@sanity/ui'
import { set, unset } from 'sanity';
import { useCallback, useMemo } from 'react';

export const CustomIngredientInput = (props) => {
    const { elementProps, onChange, value = [] } = props



    const handleChange = useCallback((event) => {
        const nextValue = event.currentTarget.value
        const ingredients = parseIngredient(nextValue).map((i) => {
            return {
                _key: crypto.randomUUID(),
                ...i
            }
        })
        onChange(ingredients ? set(ingredients) : unset())
    }, [onChange])

    const displayIngredients = useMemo(() => {
        if (!value) return []
        const ingredients = value

        const ingredientLists = []
        let activeIngredientList = []
        for (const i of ingredients) {
            if (i.isGroupHeader) {
                if (activeIngredientList.length) {
                    ingredientLists.push(activeIngredientList)
                    activeIngredientList = []
                }
            }
            activeIngredientList.push(i)
        }
        if (activeIngredientList.length) {
            ingredientLists.push(activeIngredientList)
        }

        return ingredientLists
    }, [value])

    return (
        <Card >
            <TextArea
                {...elementProps}
                rows={4}
                onChange={handleChange}
            />
            <h2>Preview</h2>
            <div>
                {displayIngredients.map((ingredients) => ingredientList(ingredients))}
            </div>
            <Text>Ingredients: {value.length}</Text>
        </Card>
    )
}

function ingredientList(ingredients) {
    if (!ingredients.length) return;
    const elements = []
    let index = 0
    if (ingredients[0].isGroupHeader) {
        elements.push(
            <h3>{ingredients[0].description}</h3>
        )
        index = 1
    }
    const listElements = []
    for (let i = index; i < ingredients.length; i++) {
        const ingredient = ingredients[i]
        listElements.push(
            <li key={ingredient._key}>
                {ingredient.quantity}
                {ingredient.quantity2 && ' - ' + ingredient.quantity2}
                {ingredient.unitOfMeasure && ' ' + ingredient.unitOfMeasure}
                {' ' + ingredient.description}
                <strong>{ ingredient.unitOfMeasureID && '\t  unit identified: ' + ingredient.unitOfMeasureID}</strong>

            </li>
        )
    }
    elements.push(<ul>{listElements}</ul>)
    return elements

}