import { Container, Grid, Divider } from "@mui/material";
import RecipeCard from "./RecipeCard";

const RecipesList = ({ previewRecipesData }) => {
  return (
    <>
      <Grid item mt={4}>
        <Divider>RECIPES</Divider>
      </Grid>

      <Grid container spacing={2} mt={4} align="center">
        {previewRecipesData.map((recipe) => (
          <Grid key={recipe.name} item xs={12} sm={6} md={6} lg={4}>
            <RecipeCard key={recipe.name} recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default RecipesList;
