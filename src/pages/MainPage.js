import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import RecipeCard from '../components/RecipeCard';
import axios from 'axios';
import SearchBar from '../components/SearchBar';

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
      <Box sx={{ display: 'flex', width: '90%', gap: 1, mt: 2, mx: 'auto', maxWidth: '720px' }}>
        <SearchBar search={search} setSearch={setSearch} onEnterClick={onEnterClick} onClickSearch={onClickSearch} />
      </Box>
      <Grid container spacing={2} p={2}>
        {data?.hits.map((recipe, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
            <RecipeCard recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MainPage;