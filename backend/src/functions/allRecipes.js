import axios from "axios";

const fetchRecipes = async () => {
    try{
        let allRecipes = []
        for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${String.fromCharCode(i)}`)

            if (response.data.meals !== null) allRecipes.push(...response.data.meals);
        }
        console.log(sortRecipes(allRecipes))
        return sortRecipes(allRecipes);
    }catch(err){
        console.log(err)
    }
}


const sortRecipes = (recipes) => {
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
            instructions: recipe.strInstructions.replace(/\r\n/g, ''),
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

export {fetchRecipes};