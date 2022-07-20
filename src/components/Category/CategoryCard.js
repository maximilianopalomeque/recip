import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <Link
        to={`/category/${category.name}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={category.image}
            alt="category photo"
          />
          <CardContent align="left">
            <Typography variant="h5" component="div" fontWeight="500">
              {category.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default CategoryCard;
