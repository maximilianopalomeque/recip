import background from "../img/homescreen-background.jpg";

import { Box, Grid, Typography, Button } from "@mui/material";

import { Link } from "react-router-dom";

const HomeScreen = () => (
  <>
    <Box
      component="img"
      sx={{
        zIndex: "-1",
        minHeight: "100%",
        minWidth: "1024px",
        width: "100%",
        height: "auto",
        position: "fixed",
        top: 0,
        left: 0,
        "@media screen and (max-width: 600px)": {
          left: "50%",
          marginLeft: "-680px",
        },
        "@media screen and (min-width: 600px, max-width: 1024px)": {
          left: "50%",
          marginLeft: "-500px",
        },
      }}
      alt="user account image"
      src={background}
    />

    <Grid container>
      <Grid item xs={12} mt={30}>
        <Typography
          sx={{ color: "white" }}
          variant="h3"
          fontWeight="600"
          textAlign="center"
        >
          Recip
        </Typography>
      </Grid>
      <Grid item xs={12} mt={1}>
        <Typography
          sx={{ color: "white" }}
          variant="h6"
          fontWeight="400"
          textAlign="center"
        >
          Cooking made easy.
        </Typography>
      </Grid>

      <Grid
        item
        container
        align="center"
        justifyContent="center"
        xs={12}
        mt={2}
      >
        <Grid item xs={5} sm={3} md={2} lg={1.5} xl={1}>
          <Link
            to={`/categories`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button variant="contained">categories</Button>
          </Link>
        </Grid>
        <Grid item xs={5} sm={3} md={2} lg={1.5} xl={1}>
          <Link
            to={`/recipes/all`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button variant="contained">all recipes</Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  </>
);

export default HomeScreen;
