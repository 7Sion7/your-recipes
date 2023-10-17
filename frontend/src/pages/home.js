import { useEffect, useState} from 'react';
// import { Link } from "react-router-dom";
import axios from 'axios';
import { useCookies } from "react-cookie";
import { useGetUserID } from '../hooks/GetUserID.js';
// import RearrangeAPIObj from '../hooks/RearrangeAPIObj.js'
import AddImage from '../hooks/AddImage.js';

export const Home = ({ className }) => {
    const [categories, setCategories] = useState([]);
    const [savedRecipes, setSavedRecipes] = useState([]);

    const userId = useGetUserID();
    const [cookies, _] = useCookies(["access_token"]);

    useEffect(() => {
        const fetchRecipe = async () => {
            try{
                const response = await axios.get("http://localhost:3001/recipes");
                setCategories(response.data)
            }
            catch(err) {
                console.error(err);
            }
        } 

        const fetchAPIRecipes = async () => {
            try{
                const response = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
                setCategories(AddImage(response.data))
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
        fetchAPIRecipes();
        if (cookies.access_token) fetchSavedRecipe();
        
        fetchRecipe();
    }, [userId, cookies]);

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

    return(<div className={className}>
        <h1>Need some inspiration?</h1>
        <div className='home__categories'>
            {categories.map((category)=> 
            <div className='home__category'>
                <h3 className='flex'>{category.strCategory}</h3>
                <img src={category.image} alt={category.image}/>
            </div>
            )}
            
        </div>
        {/* <h1>Recipes</h1>
        <ul className="home__list">
            {recipes.map((recipe)=> 
            <li key={recipe._id}>
                <div className='home__recipe'>
                <h2><Link to={`/recipe/${recipe._id}`} state={{ data: recipe }}>{recipe.name}</Link></h2>
                <button
                    onClick={()=> saveRecipe(recipe._id)} 
                    disabled={isRecipeSaved(recipe._id)}>
                    {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
                    </button>
                    {isRecipeSaved ?
                    (<span id='unsave-btn' onClick={() => removeRecipe(recipe._id)}>&times;</span>):
                    <span></span>}
                <div className='instructions'>
                    <h3>How to make it:</h3>
                    <p>{recipe.instructions}</p>
                </div>
                <img src={recipe.imageUrl} alt={recipe.name}/>
                </div>
            </li>)}
        </ul> */}
    </div>)
};
