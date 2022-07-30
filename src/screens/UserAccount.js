import { useContext } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { AuthContext } from "../utils/Context";
import { Link } from "react-router-dom";

const UserAccount = () => {
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
              <AccountCircleIcon />
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
              <Button variant="outlined">Delete account</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserAccount;

// if logged out redirect to categories
