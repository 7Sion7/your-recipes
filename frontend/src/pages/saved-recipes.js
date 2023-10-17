import { useEffect, useState} from 'react';
import axios from 'axios';
import { useGetUserID } from '../hooks/GetUserID.js';



export const SavedRecipes = ({ className }) => {
    const [savedRecipes, setSavedRecipes] = useState([]);
    const userId = useGetUserID();

    useEffect(() => { 
        const fetchSavedRecipe = async () => {
            try{
                const response = await axios.get(`http://localhost:3001/recipes/${userId}`);
                setSavedRecipes(response.data.savedRecipes);
            }
            catch(err) {
                console.error(err);
            }
        } 

        fetchSavedRecipe();
    }, [userId]);


    const removeRecipe = async (recipeId) => {
        const confirmed = window.confirm('Are you sure you want to remove this recipe from your saved list?');
        if (confirmed) {
            try{
                const response = await axios.delete(`http://localhost:3001/recipes/${userId}&${recipeId}`)
                if (response.status === 200) {
                    setSavedRecipes(response.data.savedRecipes);
                    alert("Recipe removed succefully!")
                } else {
                    console.error('Failed to delete recipe. Server returned:', response.status, response.data);
                }
            } catch(err) {
                console.error(err);
            }
        } else {
            console.log("Removal cancelled")
        }
    }

    const isRecipeSaved = (id) => savedRecipes.includes(id);

    return(
    <div className={className}>
        <h1>Saved Recipes</h1>
        <ul>
            {savedRecipes.map((recipe)=> 
            <li key={recipe._id}>
                <div className='recipe'>
                <h2>{recipe.name}</h2>
                <button className='save-btn'
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
        </ul>
    </div>)
};
