import { useState } from "react";

import { Container, Grid, TextField, Typography, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useForm } from "react-hook-form";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // manage post data to server
  const onSubmit = (data) => console.log(data);

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
      </Grid>
    </Container>
  );
};

export default Signup;
