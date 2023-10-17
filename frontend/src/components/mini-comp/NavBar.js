import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function NavBar ({className}) {
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    
    useEffect( () => {
        const fetchCategories = async () => {
            try{
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
                setCategories(response.data.meals)
            }catch(err){
                console.error(err);
            }
        }
        fetchCategories();
    }, [])

    // const handleCategoryChange = (event) => {
    //     const category = event.target.value;
    //     setSelectedCategory(category);
    //     console.log(category)
    //     navigate(`/categories/${category}`);
    // };
    const logOut = () => {
        setCookies(["access_token"], "")
        window.localStorage.removeItem("userId")
    }
    return(
    <nav className={className}>
        <Link to='/'>Home</Link>
        <Link to='/create-recipe'>Create Recipe</Link>
        {/* <div>
            <button type="button">Meal Type</button>
        <ul>
            {categories.map(category => (
                <li key={category.strCategory}>
                    <Link to={`categories/${category.strCategory}`}>{category.strCategory}</Link>
                </li>
            ))}
            </ul>
        </div> */}
        {!cookies.access_token ?
        (<Link to='/auth'>Sign In or Create Account</Link>) 
        : 
        <>
        <Link to='/saved-recipes'>Saved Recipes</Link>
        <Link to='/auth' onClick={logOut}>Log Out</Link>
        </>}
    </nav>
    )};

