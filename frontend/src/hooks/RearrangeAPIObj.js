const RearrangeAPIObj = (api_recipes) => {
    const rearranged = api_recipes.map(meal => {
            let transformedObject = {
            _id: meal.idMeal,
            name: meal.strMeal,
            category: meal.strCategory,
            ingredients: [],
            instructions: meal.strInstructions ? meal.strInstructions.replace(/\r\n/g, '') : "",
            imageUrl: meal.strMealThumb || "" // Set default value for imageUrl
        };

        // Extract ingredients from meal and add to transformedObject.ingredients
        for (let i = 1; i <= 20; i++) {
            const ingredientKey = `strIngredient${i}`;
            const measureKey = `strMeasure${i}`;
            if (meal[ingredientKey] && meal[measureKey]) {
                transformedObject.ingredients.push({
                    ingredient: meal[ingredientKey],
                    amount: meal[measureKey]
                });
            }
        }
    
        // Filter out properties with empty strings or null values
        Object.keys(transformedObject).forEach(key => {
            if (transformedObject[key] === "" || transformedObject[key] === null) {
                delete transformedObject[key];
            }
        });
    
        return transformedObject;
    })
    
    return rearranged;
}

export default RearrangeAPIObj;