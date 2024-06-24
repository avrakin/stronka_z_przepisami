import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const recipesApiId = process.env.REACT_APP_RECIPES_API_ID;
const recipesApiKey = process.env.REACT_APP_RECIPES_API_KEY;

const RecipePage = () => {
    const [data, setData] = useState(null);
    const params = useParams();
    const { recipeId } = params;

    const fetchRecipes = async () => {
        try {
            const response = await axios.get(
                `https://api.edamam.com/api/recipes/v2/${recipeId}?type=public&app_id=${recipesApiId}&app_key=${recipesApiKey}` 
            );
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchRecipes();
    }, []);

    return (
        <Box>
            {data && (
                <Box>
                    <Typography variant="h4">{data.recipe.label}</Typography>
                    <img src={data.recipe.image} alt={data.recipe.label} style={{ width: '100%' }} />
                    <p>Calories: {data.recipe.calories.toFixed(0)} kcal</p>
                    <p>Ingredients count: {data.recipe.ingredientLines.length}</p>
                    <p>Ingredients:</p>
                    <ul>
                        {data.recipe.ingredientLines.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </Box>
            )}
    
            
        </Box>
    );
}

export default RecipePage;