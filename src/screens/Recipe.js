import { useEffect, useState } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

import { Container, Grid, CircularProgress } from "@mui/material";

import RecipeHeader from "../components/Recipe/RecipeHeader";
import RecipeInstructions from "../components/Recipe/RecipeInstructions";

const Recipe = () => {
  const { recipeName } = useParams();

  const [recipeData, setRecipeData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getRecipeData = async () => {
    try {
      const response = await axios(
        `${process.env.REACT_APP_BACKEND_URL}/recipes/${recipeName}`
      );
      setRecipeData(response.data.recipe);
      setIsLoading(false);
    } catch (error) {
      console.log("could not get recipe data");
    }
  };

  useEffect(() => {
    getRecipeData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Grid align="center" mt={10} mb={80}>
          <CircularProgress />
        </Grid>
      ) : (
        <Container sx={{ backgroundColor: "white", paddingBottom: "20px" }}>
          {recipeData && <RecipeHeader recipeData={recipeData} />}
          {recipeData && <RecipeInstructions recipeData={recipeData} />}
        </Container>
      )}
    </>
  );
};

export default Recipe;
