import React from "react";
import { useLocation } from "react-router-dom";

export const Recipe = ({ className }) => {
    const location = useLocation();
    const recipe = location.state.data;

    return (
        <div className={className} key={recipe._id}>
            <div className="recipe-header">
            <h1 className="recipe-name">{recipe.name}</h1>
            {/* <p className="author">By: {author}</p> */}
            <img src={recipe.imageUrl}  alt={recipe.name} className="food-image" />
            </div>
            <div className="ingredients">
            <h4 >Ingredients:</h4>
            <ol>
            {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>
                                {ingredient.ingredient} - {ingredient.amount}
                            </li>
                            
                    ))}</ol>
            </div>
            <div className="prepare">
                <h2>How to prepare:</h2>
                <br></br>
                <span>Preparation time: {recipe.cookingTime}</span>
                <p className="instructions">{recipe.instructions}</p>
            </div>
        </div>
    )
}