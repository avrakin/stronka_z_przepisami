import React, { useState } from 'react';
import { Card, CardContent, Box, Button, Typography } from "@mui/material";
import RecipeDialog from './RecipeDialog';

const RecipeCard = ({ recipe }) => {
    const recipeId = recipe.recipe.uri.split('_')[1];
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card>
            <CardContent>
                <img src={recipe.recipe.image} alt={recipe.recipe.label} style={{ width: '100%' }} />
                <Typography variant="body2" color="text.secondary" mb={1}>
                    {recipe.recipe.source}
                </Typography>
                <Typography variant="h5" color="text.primary" mb={1}>
                    {recipe.recipe.label}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 1 }}>
                    <Typography variant="body1" color="text.primary">
                        {recipe.recipe.calories.toFixed(0)} kcal
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Ingredients: {recipe.recipe.ingredientLines.length}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <a href={`/recipe/${recipeId}`} style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                        <Button variant="outlined">
                            Open in new page
                        </Button>
                    </a>
                    <RecipeDialog open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} recipe={recipe} />
                </Box>
            </CardContent>
        </Card>
    );
}

export default RecipeCard;