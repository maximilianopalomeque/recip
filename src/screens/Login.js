import { useState, useContext } from "react";

import { Navigate } from "react-router-dom";

import { Container, Grid, TextField, Typography, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useForm } from "react-hook-form";
import axios from "axios";

import { AuthContext } from "../utils/Context";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState();

  const { setLoggedIn, setUserName, setToken, setEmail } =
    useContext(AuthContext);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setError(false);

    try {
      const response = await axios.post(
        process.env.REACT_APP_BACKEND_URL_LOGIN,
        {
          ...data,
        }
      );

      const tokenExpirationDate = new Date(
        new Date().getTime() + 1000 * 60 * 60
      );
      localStorage.setItem(
        "userData",
        JSON.stringify({
          username: response.data.username,
          email: response.data.email,
          recipes: response.data.recipes,
          token: response.data.token,
          tokenExpirationDate,
        })
      );

      setLoggedIn(true);
      setUserName(response.data.username);
      setEmail(response.data.email);
      setToken(response.data.token);
      setRedirect(true);
    } catch (error) {
      setError(true);
      console.log(error.response.data);
    }
  };

  return (
    <Container sx={{ backgroundColor: "white", paddingBottom: "70vh" }}>
      <Grid container justifyContent="center" align="center">
        <Grid item xs={12} mt={5}>
          <Typography variant="h5" fontWeight={500}>
            Login
          </Typography>
        </Grid>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            justifyContent="center"
            align="center"
            sx={{ maxWidth: "500px" }}
          >
            <Grid item xs={12} md={7} lg={8} mt={2}>
              <TextField
                {...register("email", {
                  required: "Please enter an email",
                  pattern: {
                    value: /^[A-Z0-9._]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                fullWidth
                color="secondary"
                id="email"
                label="Email"
                variant="outlined"
                error={errors.email ? true : false}
                helperText={errors.email ? errors.email.message : null}
              />
            </Grid>

            <Grid item xs={12} md={7} lg={8} mt={2}>
              <TextField
                {...register("password", {
                  required: "Please enter a password",
                  minLength: {
                    value: 5,
                    message: "Password must be at least 5 characters long",
                  },
                  maxLength: {
                    value: 15,
                    message: "Password must have a maximun of 15 characters",
                  },
                })}
                fullWidth
                type={showPassword ? "text" : "password"}
                color="secondary"
                id="password"
                label="Password"
                variant="outlined"
                error={errors.password ? true : false}
                helperText={errors.password ? errors.password.message : null}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} mt={2} textAlign="center">
              <Button variant="contained" type="submit">
                Login
              </Button>
            </Grid>
          </Grid>
        </form>

        {error && (
          <Grid item xs={12} mt={2} textAlign="center">
            <Typography variant="h7" fontWeight={400}>
              Login Failed: Your email or password is incorrect
            </Typography>
          </Grid>
        )}

        {redirect && <Navigate to="/categories" replace={true} />}
      </Grid>
    </Container>
  );
};

export default Login;
