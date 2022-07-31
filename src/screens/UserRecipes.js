import { useEffect, useContext, useState } from "react";
import axios from "axios";

import { Container, Grid, Typography } from "@mui/material";

import RecipeCard from "../components/Recipe/RecipeCard";
import { Navigate } from "react-router-dom";

const UserRecipes = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [userRecipes, setUserRecipes] = useState();

  const getUserRecipes = async () => {
    const { username, token } = userData;

    try {
      const response = await axios(
        `http://localhost:5000/recipes/user/${username}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setUserRecipes(response.data.recipes);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    if (userData) {
      getUserRecipes();
    }
  }, []);

  return (
    <Container sx={{ backgroundColor: "white", paddingBottom: "80vh" }}>
      <Grid container>
        <Grid item xs={12} textAlign="center" mt={5}>
          <Typography variant="h4" fontWeight={500}>
            My recipes
          </Typography>
        </Grid>
      </Grid>

      {userRecipes ? (
        <Grid container spacing={2} mt={4} align="center">
          {userRecipes.map((recipe) => (
            <Grid key={recipe.name} item xs={12} sm={6} md={6} lg={4}>
              <RecipeCard key={recipe.name} recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      ) : null}

      {!userData && <Navigate to="/categories" />}
    </Container>
  );
};

export default UserRecipes;
