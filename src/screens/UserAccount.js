import { useContext } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { Navigate } from "react-router-dom";

import { AuthContext } from "../utils/Context";
import { Link } from "react-router-dom";

import DeleteUserConfirm from "../components/DeleteUserConfirm";

import userimage from "../img/profile-user.png";

const UserAccount = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const { username } = useContext(AuthContext);

  return (
    <Container sx={{ backgroundColor: "white", paddingBottom: "60vh" }}>
      <Grid container>
        <Grid item xs={12} mt={5} textAlign="center">
          <Typography variant="h4" fontWeight={500}>
            My Account
          </Typography>
        </Grid>

        <Grid container mt={4}>
          <Grid item container align="center">
            <Grid item xs={12}>
              <Box
                component="img"
                sx={{
                  height: 233,
                  width: 350,
                  maxHeight: { xs: 100, md: 100 },
                  maxWidth: { xs: 100, md: 100 },
                }}
                alt="user account image"
                src={userimage}
              />
            </Grid>

            <Grid item container justifyContent="center">
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  fontWeight={500}
                  sx={{ textTransform: "capitalize" }}
                >
                  {username}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container justifyContent="center" mt={2}>
              <Button variant="contained">
                <Link
                  to={`/${username}/recipes`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  My recipes
                </Link>
              </Button>
            </Grid>
            <Grid item container justifyContent="center" mt={2}>
              <DeleteUserConfirm />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {!userData && <Navigate to="/categories" />}
    </Container>
  );
};

export default UserAccount;

// if logged out redirect to categories
