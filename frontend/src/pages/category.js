import {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { useGetUserID } from '../hooks/GetUserID.js';
import { useCookies } from "react-cookie";
import rearrangeAPIObj from '../hooks/rearrangeAPIObj.js'

export const Category = ({ className }) => {
    const [recipes, setRecipes] = useState([]);
    const [savedRecipes, setSavedRecipes] = useState([]);
    const userId = useGetUserID();
    const [cookies, _] = useCookies(["access_token"]);
    const { categoryName } = useParams();

    useEffect(()=> {
        const fetchRecipes = async () => {
            try{
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
                setRecipes(rearrangeAPIObj(response.data.meals))
            }catch(err){
                console.error(err)
            }
        }

        const fetchAllRecipes = async () => {
            try{
                const response = await axios.get("http://localhost:3001/recipes")
                setRecipes(response.data)
            }catch(err){
                console.error(err)
            }
        }

        const fetchSavedRecipe = async () => {
            try{
                const response = await axios.get(`http://localhost:3001/recipes/ids/${userId}`);
                setSavedRecipes(response.data.savedRecipes);
            }
            catch(err) {
                console.error(err);
            }
        } 

        categoryName == "All Recipes (A-Z)" ? fetchAllRecipes() : fetchRecipes();
        if (cookies.access_token) fetchSavedRecipe();

    }, [categoryName, cookies, userId])


    const saveRecipe = async (recipeId) => {
        try{
            const response = await axios.put("http://localhost:3001/recipes",
            {recipeId, userId}, {headers: {authorisation: cookies.access_token}})
            setSavedRecipes(response.data.savedRecipes);
        }catch(err){
            console.error(err)
        }

    }

    const removeRecipe = async (recipeId) => {
        try{
            const response = await axios.delete(`http://localhost:3001/recipes/${userId}&${recipeId}`)
            if (response.status === 200) {
                setSavedRecipes(response.data.savedRecipes);
            } else {
                console.error('Failed to delete recipe. Server returned:', response.status, response.data);
            }
        } catch(err) {
            console.error(err);
        }
    }

    const isRecipeSaved = (id) => savedRecipes.includes(id);

    return (
        <div className={className}>
        {recipes?.map((recipe) => (
            <div key={recipe._id}>
            <Link to={`/recipe/${recipe._id}`} className='flex'>
                <div className='category__recipe flex'>
                    <img src={recipe.imageUrl} alt={recipe.name} />
                    <h1>{recipe.name}</h1>
                </div>
            </Link>
        </div>
        ))}
        </div>
    );
};
