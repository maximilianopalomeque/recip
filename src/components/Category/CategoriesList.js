import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import CategoryCard from "./CategoryCard";

const CategoriesList = ({ categories }) => {
  return (
    <>
      <Container sx={{ paddingBottom: "30px" }}>
        <Grid container mt={5}>
          <Grid item xs={12} textAlign="center">
            <Typography variant="h4" fontWeight={500}>
              Categories
            </Typography>
          </Grid>
        </Grid>
        <Grid container align="center" mt={2} spacing={2}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={category.id}>
              <CategoryCard key={category.id} category={category} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CategoriesList;
