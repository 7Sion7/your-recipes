const rearrangeAPIObj = (recipes) => {
    return recipes.map((recipe) => {
        Object.keys(recipe).forEach(key => {
        if (recipe[key] === "" || recipe[key] === null || recipe[key] === " ") {
            delete recipe[key];
        }
    });

        let formattedRecipe = {
            _id: recipe.idMeal,
            name: recipe.strMeal,
            description: "",
            ingredients: [],
            instructions: recipe.strInstructions?.replace(/\r\n/g, '') || '',
            imageUrl: recipe.strMealThumb,
            cookingTime: 0,
            Author: "Unknown"
        }

        Object.keys(recipe).forEach(key => {
            if (key.includes("Ingredient")) {
                formattedRecipe.ingredients.push({
                    ingredient: recipe[key], 
                    measure: recipe[`strMeasure${key.match(/(\d+)/)[0]}`]
                });
            }
        })
        return formattedRecipe;
    });
}

export default rearrangeAPIObj;