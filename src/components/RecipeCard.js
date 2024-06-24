import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Dialog, DialogTitle, DialogContent, DialogActions, Button, DialogContentText, Box } from "@mui/material";

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
            <CardHeader title={recipe.label} />
            <CardContent>
                <img src={recipe.recipe.image} alt={recipe.recipe.label} style={{ width: '100%' }} />
                <h2>{recipe.recipe.label}</h2>
                <p>Calories: {recipe.recipe.calories.toFixed(0)} kcal</p>
                <p>Ingredients count: {recipe.recipe.ingredientLines.length}</p>
            
                <Button onClick={handleClickOpen} variant="outlined">View Recipe</Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>{recipe.label}</DialogTitle>
                    <DialogContent>
                        <img src={recipe.recipe.image} alt={recipe.recipe.label} style={{ width: '100%' }} />
                        <DialogContentText>Calories: {recipe.recipe.calories.toFixed(0)} kcal</DialogContentText>
                        <DialogContentText>Ingredients count: {recipe.recipe.ingredientLines.length}</DialogContentText>
                        {recipe.recipe.ingredientLines.map((ingredient, index) => (
                            <DialogContentText key={index}>{ingredient}</DialogContentText>
                        ))}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
                <Box sx={{ mt: 2 }}>
                    <a href={`/recipe/${recipeId}`} target="_blank" rel="noopener noreferrer">Open in new page</a>
                </Box>
            </CardContent>
        </Card>
    );
}

export default RecipeCard;