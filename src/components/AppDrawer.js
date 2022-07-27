import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

import { Link } from "react-router-dom";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import RestaurantIcon from "@mui/icons-material/Restaurant";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

import { AuthContext } from "../utils/Context";

const AppDrawer = () => {
  const { loggedIn, username } = useContext(AuthContext);
  const [state, setState] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} mt={2}>
            <Typography variant="h5" fontWeight="500">
              Recip
            </Typography>
          </Grid>
          <Grid item xs={12} mt={2}>
            <Divider />
          </Grid>
        </Grid>
      </Container>

      <List>
        <ListItem disablePadding sx={{ marginLeft: "8px" }}>
          <ListItemButton>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <Link
              to="/categories"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemText primary="Categories" />
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ marginLeft: "8px" }}>
          <ListItemButton>
            <ListItemIcon>
              <RestaurantIcon />
            </ListItemIcon>
            <ListItemText primary="All recipes" />
          </ListItemButton>
        </ListItem>
      </List>

      {loggedIn && (
        <>
          <Container>
            <Grid container>
              <Grid item xs={12}>
                <Divider />
              </Grid>
            </Grid>
          </Container>

          <List>
            <ListItem disablePadding sx={{ marginLeft: "8px" }}>
              <ListItemButton>
                <ListItemIcon>
                  <RestaurantMenuIcon />
                </ListItemIcon>
                <Link
                  to={`/${username}/recipes`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItemText primary="My Recipes" />
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
        </>
      )}
    </Box>
  );

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </>
  );
};
export default AppDrawer;
