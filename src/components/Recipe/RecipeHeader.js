import { useContext, useEffect, useState } from "react";
import { Grid, Box, Typography, Chip, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { AuthContext } from "../../utils/Context";

import IngredientsTable from "./IngredientsTable";

import { saveRecipe, deleteRecipe } from "../../utils/manageUserRecipe";

const RecipeHeader = ({ recipeData }) => {
  const [isRecipeSaved, setIsRecipeSaved] = useState();

  const {
    name,
    image,
    ingredientsAndMeasures,
    tags,
    _id: recipeId,
  } = recipeData;
  const { loggedIn } = useContext(AuthContext);

  const checkRecipes = () => {
    const { recipes } = JSON.parse(localStorage.getItem("userData"));
    const existingRecipe = recipes.find((recipe) => recipe === recipeId);
    if (existingRecipe) {
      setIsRecipeSaved(true);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      checkRecipes();
    }
  }, []);

  return (
    <Grid container mt={2} spacing={2}>
      <Grid item xs={12} sm={12} md={6} lg={4} align="center">
        <Box
          component="img"
          sx={{
            height: 300,
            width: 350,
          }}
          alt={`${name} picture`}
          src={image}
        />
        <Typography
          sx={{ marginTop: "20px" }}
          variant="h4"
          fontWeight="600"
          align="center"
        >
          {name}
        </Typography>
        {tags && <Chip label={tags} sx={{ marginTop: "10px" }} />}
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={8} align="center">
        <IngredientsTable ingredientsAndMeasures={ingredientsAndMeasures} />
      </Grid>

      {loggedIn && isRecipeSaved && (
        <Grid item container mt={2} justifyContent="center">
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => {
              deleteRecipe(recipeData._id);
              setIsRecipeSaved(false);
            }}
          >
            Delete recipe
          </Button>
        </Grid>
      )}

      {loggedIn && !isRecipeSaved && (
        <Grid item container mt={2} justifyContent="center">
          <Button
            variant="outlined"
            startIcon={<FavoriteIcon />}
            onClick={() => {
              saveRecipe(recipeData._id);
              setIsRecipeSaved(true);
            }}
          >
            save recipe
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default RecipeHeader;
