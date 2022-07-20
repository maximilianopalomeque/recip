import { Container, Grid, Typography } from "@mui/material";

import VideoEmbed from "./VideoEmbed";

const RecipeInstructions = ({ recipeData }) => {
  const { instructions, video } = recipeData;
  return (
    <>
      <Grid container>
        <Grid item xs={12} mt={4}>
          <Typography align="center" variant="h4">
            Instructions
          </Typography>
          <Grid item xs={12} mt={2}>
            <Typography align="center">{instructions}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item mt={5} mb={6}>
        {video && <VideoEmbed url={video} />}
      </Grid>
    </>
  );
};

export default RecipeInstructions;
