import React from 'react';
import { useParams } from 'react-router-dom';

export const Category = ({ className }) => {
    const { categoryName } = useParams();

    // Fetch and display recipes based on the categoryName from your API

    return (
        <div className={className}>
        <h2>Recipes in {categoryName} Category</h2>
        {/* Display recipes */}
        </div>
    );
};
