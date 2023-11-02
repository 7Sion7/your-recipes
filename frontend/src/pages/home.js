import { useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import AddImage from '../hooks/AddImage.js';

export const Home = ({ className }) => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchCategories = async () => {
            try{
                const response = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
                setCategories(AddImage(response.data))
                setIsLoading(false);
            }catch(err){
                console.error(err)
                setIsLoading(false);
            }
        }

        fetchCategories();
        
        
    }, []);

    return(
        <div className={className}>
            {isLoading ? (
        <span></span>
    ) : (
        <>
        <h1>Need some inspiration?</h1>
        <div className='home__categories'>
            {categories?.map((category) => (
            <Link key={category.name} to={`/categories/${category.name}`}>
                <div className='home__category'>
                <img src={category.image} alt={category.name} />
                <br />
                <h3>{category.name}</h3>
                </div>
            </Link>
            ))}
            <a href="#top">
            <div className='home__scrollup'>
                <h1>Back to the Top</h1>
                <FontAwesomeIcon className='icon' icon={faArrowAltCircleUp} />
            </div>
            </a>
        </div>
        </>
    )}
    </div>
)}
