import { useState, useEffect } from "react";

import axios from "axios";

import { Grid, CircularProgress } from "@mui/material";

import CategoriesList from "../components/Category/CategoriesList";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // manage error fetching

  const getCategoriesData = async () => {
    try {
      const response = await axios("http://localhost:5000/categories");
      setCategoriesData(response.data.categories);
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
        <CategoriesList categories={categoriesData} />
      )}
    </>
  );
};

export default Categories;
