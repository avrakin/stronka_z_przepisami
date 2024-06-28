import { Box, Chip, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Link } from "@mui/material";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const recipesApiId = process.env.REACT_APP_RECIPES_API_ID;
const recipesApiKey = process.env.REACT_APP_RECIPES_API_KEY;

const RecipePage = () => {
    const [recipe, setRecipe] = useState(null);
    const params = useParams();
    const { recipeId } = params;

    const fetchRecipes = useCallback(async () => {
        try {
            const response = await axios.get(
                `https://api.edamam.com/api/recipes/v2/${recipeId}?type=public&app_id=${recipesApiId}&app_key=${recipesApiKey}`
            );
            setRecipe(response.data);
        } catch (error) {
            console.error(error);
        }
    }, [recipeId]);

    useEffect(() => {
        fetchRecipes();
    }, [fetchRecipes]);

    return (
        <Box>
            {recipe && (
                <Grid container spacing={2} p={2}>
                    <Grid item xs={12} md={8} order={{ xs: 2, sm: 2, md: 1, lg: 1, xl: 1 }}>
                        <Typography variant="body2" color="text.secondary" mb={1}>
                            {recipe.recipe.source}
                        </Typography>
                        <Typography variant="h5" color="text.primary" mb={1}>
                            {recipe.recipe.label}
                        </Typography>
                        <Typography variant="body1" color="text.primary" mb={1}>
                            {recipe.recipe.calories?.toFixed(0)} kcal
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mb={1}>
                            Ingredients: {recipe.recipe.ingredientLines.length}
                        </Typography>
                        <Typography variant="body1" color="text.primary" mb={1}>
                            {recipe.recipe.ingredientLines.map(ingredient => (
                                <li key={ingredient}>{ingredient}</li>
                            ))}
                        </Typography>
                        <a href={recipe.recipe.url} target="_blank" rel="noreferrer"><Link>Click here for detailed recipe</Link></a>
                        <Typography variant="body1" color="text.secondary" mb={1} mt={1}>
                            Diet: {recipe.recipe.dietLabels.join(', ')}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" mb={1}>
                            Cautions: {recipe.recipe.cautions.join(', ')}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" mb={1}>
                            Cuisine: {recipe.recipe.cuisineType.join(', ')}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" mb={1}>
                            Meal: {recipe.recipe.mealType.join(', ')}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" mb={1}>
                            Dish: {recipe.recipe.dishType.join(', ')}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" mb={1}>
                            Total time: {recipe.recipe.totalTime} minutes
                        </Typography>
                        {recipe.recipe.totalCO2Emissions !== null && recipe.recipe.totalCO2Emissions !== undefined &&
                        <Typography variant="body1" color="text.secondary" mb={1}>
                        CO2 Emissions: {Number(recipe.recipe.totalCO2Emissions)?.toFixed(0)} g
                        </Typography>
                        }
                        <Typography variant="body1" color="text.secondary" mb={1}>
                            CO2 Emissions class: {recipe.recipe.co2EmissionsClass}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" mb={1}>
                            Total weight: {recipe.recipe.totalWeight?.toFixed(0)} g
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nutrient</TableCell>
                                        <TableCell>Quantity</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Object.entries(recipe.recipe.totalNutrients).map(([key, value]) => (
                                        <TableRow key={key}>
                                            <TableCell>{value.label}</TableCell>
                                            <TableCell>{value.quantity?.toFixed(2)} {value.unit}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Typography variant="h6" color="text.secondary" mb={1} mt={2}>
                            Tags:
                        </Typography>
                        {recipe.recipe.healthLabels.map(healthLabel => (
                            <Chip sx={{ m: 1 }} key={healthLabel} label={healthLabel} />
                        ))}
                    </Grid>
                    <Grid item xs={12} md={4} order={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}>
                        <img src={recipe.recipe.image} alt={recipe.recipe.label} style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            )}
        </Box>
    );
}

export default RecipePage;