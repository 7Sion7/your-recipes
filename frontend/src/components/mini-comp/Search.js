import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const Search = ({ onSearch }) => {
    const [recipeOptions, setRecipeOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
    // Make an API call to fetch recipe names
        const fetchRecipeNames = async () => {
            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
                console.log(onSearch)
                console.log("response data:",response.data)
                // const options = response.data.meals.map((meal) => ({
                // value: meal.strMeal,
                // label: meal.strMeal,
                // }));
                // setRecipeOptions(options);
            } catch (error) {
                console.error(error);
            }
            };

        fetchRecipeNames();
    }, []);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        if (selectedOption) {
        // Call the onSearch prop with the selected option's value when an option is selected
        onSearch(selectedOption.value);
        }
    };

    return (
        <div className='header__search-box'>
        <Select
            value={selectedOption}
            onChange={handleChange}
            options={recipeOptions}
            placeholder='Search for recipes...'
            isSearchable
        />
        </div>
    );
};

export default Search;
