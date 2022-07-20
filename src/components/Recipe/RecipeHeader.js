import { Grid, Box, Typography, Chip } from "@mui/material";

import IngredientsTable from "./IngredientsTable";

const RecipeHeader = ({ recipeData }) => {
  const { name, image, ingredientsAndMeasures, tags } = recipeData;

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
    </Grid>
  );
};

export default RecipeHeader;
