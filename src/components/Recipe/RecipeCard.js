import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <Card sx={{ width: 350, height: 300 }}>
      <Link
        to={`/recipe/${recipe.name}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={recipe.image}
            alt="meal photo"
          />
        </CardActionArea>
        <CardActionArea sx={{ height: 120 }}>
          <CardContent align="left">
            <Typography variant="h6" component="div" fontWeight="500">
              {recipe.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default RecipeCard;
