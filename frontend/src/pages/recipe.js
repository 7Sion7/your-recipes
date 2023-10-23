import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import rearrangeAPIObj from "../hooks/rearrangeAPIObj";

export const Recipe = ({ className }) => {
    const [recipe, setRecipe] = useState([]);
    const { recipeId } = useParams();
    useEffect(()=>{
        const fetchRecipe = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
            setRecipe(...rearrangeAPIObj(response.data.meals))
        }
        fetchRecipe();
    }, [recipeId])

    return (
        <div className={className} key={recipe._id}>
            <div className="recipe-header">
            <h1 className="recipe-name">{recipe.name}</h1>
            <p className="author">By: {recipe?.author || 'Unknown'}</p>
            <img src={recipe.imageUrl}  alt={recipe.name} className="food-image" />
            </div>
            <h2>Ingredients:</h2>
                <div className="ingredients">
                    <ol>
            {recipe.ingredients && recipe.ingredients.length > 0 && recipe.ingredients.map((obj)=> (
                        <li>{obj.ingredient} - {obj.measure}</li>
                        ))}
                    </ol>
                </div>
            <div className="prepare">
                <h2>How to prepare:</h2>
                <br></br>
                <p className="instructions">{recipe.instructions}</p>
            </div>
        </div>
    )
}