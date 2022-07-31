import { useState, useEffect } from "react";

import axios from "axios";

import { Grid, CircularProgress, Container, Typography } from "@mui/material";

import RecipeCard from "../components/Recipe/RecipeCard";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getCategoriesData = async () => {
    try {
      const response = await axios("http://localhost:5000/recipes/all");
      setRecipes(response.data.recipes);
      setIsLoading(false);
    } catch (error) {
      console.log("could not get categories data");
    }
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Grid align="center" mt={10} mb={80}>
          <CircularProgress />
        </Grid>
      ) : (
        <Container sx={{ paddingBottom: "30px" }}>
          <Grid container mt={5}>
            <Grid item xs={12} textAlign="center">
              <Typography variant="h4" fontWeight={500}>
                Recipes
              </Typography>
            </Grid>
          </Grid>

          <Grid container align="center" mt={2} spacing={2}>
            {recipes.map((recipe) => (
              <Grid key={recipe.name} item xs={12} sm={6} md={6} lg={4}>
                <RecipeCard key={recipe.name} recipe={recipe} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default AllRecipes;
