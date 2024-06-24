import { useState } from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import RecipeCard from '../components/RecipeCard';
import axios from 'axios';

const recipesApiId = process.env.REACT_APP_RECIPES_API_ID;
const recipesApiKey = process.env.REACT_APP_RECIPES_API_KEY;

function MainPage() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(null);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${recipesApiId}&app_key=${recipesApiKey}`
      );
      setData(response.data);
    }
    catch (error) {
      console.error(error);
    }
  }

  const onClickSearch = () => {
    fetchRecipes();
  };

  const onEnterClick = (e) => {
    if (e.key === 'Enter') {
      fetchRecipes();
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', width: '90%', gap: 1, mt: 2, mx: 'auto', maxWidth: '600px' }}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={onEnterClick}
          fullWidth
        />
        <Button
          variant="contained"
          onClick={onClickSearch}
          sx={{ whiteSpace: 'nowrap' }}
        >
          Search
        </Button>
      </Box>
      <Grid container spacing={2}>
        {data?.hits.map((recipe, index) => (
          <Grid item xs={12} sm={4} md={3} key={index}>
            <RecipeCard recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MainPage;