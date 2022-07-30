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

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState();
  const [errorMessage, setErrorMessage] = useState();

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

  // manage post data to server
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/users/signup", {
        ...data,
      });

      const tokenExpirationDate = new Date(
        new Date().getTime() + 1000 * 60 * 60
      );
      localStorage.setItem(
        "userData",
        JSON.stringify({
          username: response.data.username,
          email: response.data.email,
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
      if (error.response.data.error === "username already used") {
        setErrorMessage("User name already used");
      }
      console.log(error.response.data);
    }
  };

  return (
    <Container sx={{ backgroundColor: "white", paddingBottom: "70vh" }}>
      <Grid container justifyContent="center" align="center">
        <Grid item xs={12} mt={5}>
          <Typography variant="h5" fontWeight={500}>
            Signup
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
                {...register("username", {
                  required: "Please enter a user name",
                  minLength: {
                    value: 5,
                    message: "User name must be at least 5 characters long",
                  },
                  maxLength: {
                    value: 20,
                    message: "User name must have a maximun of 20 characters",
                  },
                })}
                fullWidth
                color="secondary"
                id="username"
                label="User Name"
                variant="outlined"
                error={errors.username ? true : false}
                helperText={errors.username ? errors.username.message : null}
              />
            </Grid>

            <Grid item xs={12} md={7} lg={8} mt={2}>
              <TextField
                {...register("email", {
                  required: "Please enter an email",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
                    value: 10,
                    message: "Password must have a maximun of 10 characters",
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
                Signup
              </Button>
            </Grid>
          </Grid>
        </form>

        {error && (
          <Grid item xs={12} mt={2} textAlign="center">
            <Typography variant="h7" fontWeight={400}>
              Sign up failed
            </Typography>
            {errorMessage && (
              <Grid item xs={12} textAlign="center">
                <Typography variant="h7" fontWeight={400}>
                  {errorMessage}
                </Typography>
              </Grid>
            )}
          </Grid>
        )}

        {redirect && <Navigate to="/categories" replace={true} />}
      </Grid>
    </Container>
  );
};

export default Signup;
