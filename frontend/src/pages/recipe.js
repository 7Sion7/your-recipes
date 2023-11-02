import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import rearrangeAPIObj from "../hooks/rearrangeAPIObj";
import { Back } from "../hooks/BackButton";

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
            <Back></Back>
            <div className="recipe__header">
            <h1 className="recipe__name">{recipe.name}</h1>
            <p className="recipe__author">By: {recipe?.author || 'Unknown'}</p>
            <img src={recipe.imageUrl}  alt={recipe.name} className="recipe__image" />
            </div>
            <h2>Ingredients:</h2>
                <div className="recipe__ingredients">
                    <ol>
            {recipe.ingredients && recipe.ingredients.length > 0 && recipe.ingredients.map((obj)=> (
                        <li>{obj.ingredient} - {obj.measure}</li>
                        ))}
                    </ol>
                </div>
            <div className="recipe__instructions">
                <h2>How to prepare:</h2>
                <br></br>
                <p>{recipe.instructions}</p>
            </div>
        </div>
    )
}