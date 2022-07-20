import { Container, Grid, Typography, Box } from "@mui/material";

const CategoryHeader = ({ categoryData }) => {
  return (
    <>
      <Grid container mt={2} spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4} align="center">
          <Box
            component="img"
            sx={{
              height: 200,
              width: 320,
            }}
            alt="The house from the offer."
            src={categoryData.image}
          />
          <Typography variant="h4" fontWeight="600" align="center">
            {categoryData.name}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Typography sx={{ textAlign: { xs: "center", md: "left" } }}>
            {categoryData.description}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryHeader;
