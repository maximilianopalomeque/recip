import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CategoryHeader from "../components/Category/CategoryHeader";
import RecipesList from "../components/Recipe/RecipesList";

import { Container, Grid, CircularProgress } from "@mui/material";

import axios from "axios";

const Category = () => {
  const { categoryName } = useParams();

  // manage error fetching
  const [isLoading, setIsLoading] = useState(true);
  const [categoryPageData, setCategoryPageData] = useState();

  const getCategoryAndRecipesData = async () => {
    try {
      const response = await axios(
        `${process.env.REACT_APP_BACKEND_URL}/categories/${categoryName}`
      );
      setCategoryPageData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("could not get data of category");
    }
  };

  useEffect(() => {
    getCategoryAndRecipesData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Grid align="center" mt={10} mb={80}>
          <CircularProgress />
        </Grid>
      ) : (
        <Container sx={{ backgroundColor: "white", paddingBottom: "30px" }}>
          <CategoryHeader categoryData={categoryPageData.categoryData} />
          <RecipesList
            previewRecipesData={categoryPageData.previewRecipesData}
          />
        </Container>
      )}
    </>
  );
};

export default Category;
