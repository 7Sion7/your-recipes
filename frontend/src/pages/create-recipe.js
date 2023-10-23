import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/GetUserID.js";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const CreateRecipe = ({ className }) => {
const userID = useGetUserID();
const [cookies, _] = useCookies(["access_token"]);

const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    category: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    Author: userID,
});

const navigate = useNavigate();

const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
};

const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = [...recipe.ingredients];
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
};

const handleAddIngredient = () => {
    const ingredients = [...recipe.ingredients, ""];
    setRecipe({ ...recipe, ingredients });
};

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await axios.post(
        "http://localhost:3001/recipes",
        { ...recipe },
        {
            headers: { authorisation: cookies.access_token },
        }
    );
        alert("Recipe Created");
        navigate("/");
    } catch (error) {
        console.error(error);
    }
};

return (
    <div className={className}>
        <h2>Create Recipe</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={recipe.name}
                onChange={handleChange}
            />
            <label htmlFor="description">Description</label>
            <textarea
                id="description"
                name="description"
                value={recipe.description}
                onChange={handleChange}
            ></textarea>
            <label htmlFor="ingredients">Ingredients</label>
            {recipe.ingredients.map((ingredient, index) => (
            <input
                key={index}
                type="text"
                name="ingredients"
                value={ingredient}
                onChange={(event) => handleIngredientChange(event, index)}
            />
            ))}
            <button type="button" onClick={handleAddIngredient}>
            Add Ingredient
            </button>
            <label htmlFor="instructions">Instructions</label>
            <textarea
                id="instructions"
                name="instructions"
                value={recipe.instructions}
                onChange={handleChange}
            ></textarea>
            <label htmlFor="imageUrl">Image URL</label>
            <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={recipe.imageUrl}
                onChange={handleChange}
            />
            <label htmlFor="cookingTime">Cooking Time (minutes)</label>
            <input
                type="number"
                id="cookingTime"
                name="cookingTime"
                value={recipe.cookingTime}
                onChange={handleChange}
            />
            <label htmlFor="category">Category</label>
            <select id="category" name="category" onChange={handleChange}>
                <option value="">Select Category</option>
                <option value={recipe.category}>Beef</option>
                <option value={recipe.category}>Chicken</option>
                <option value={recipe.category}>Seafood</option>
                <option value={recipe.category}>Goat</option>
                <option value={recipe.category}>Lamb</option>
                <option value={recipe.category}>Pork</option>
                <option value={recipe.category}>Miscellaneous</option>
                <option value={recipe.category}>Breakfast</option>
                <option value={recipe.category}>Dessert</option>
                <option value={recipe.category}>Pasta</option>
                <option value={recipe.category}>Side</option>
                <option value={recipe.category}>Starter</option>
                <option value={recipe.category}>Vegetarian</option>
                <option value={recipe.category}>Vegan</option>
                <option value={recipe.category}>Other</option>
            </select>
            <button type="submit">Create Recipe</button>
        </form>
    </div>
    );
};