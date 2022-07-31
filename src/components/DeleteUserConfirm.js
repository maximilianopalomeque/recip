import { useState, useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useForm } from "react-hook-form";

import axios from "axios";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../utils/Context";

const DeleteUserConfirm = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState();
  const [redirect, setRedirect] = useState();

  const { setLoggedIn, setUserName, setToken, setEmail } =
    useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const logout = () => {
    setLoggedIn(false);
    setUserName(null);
    setEmail(null);
    setToken(null);
    localStorage.removeItem("userData");
  };

  const onSubmit = async (data) => {
    const password = data.password;

    const { email, token } = JSON.parse(localStorage.getItem("userData"));
    try {
      const response = await axios.delete(
        "http://localhost:5000/users/delete",
        {
          headers: { Authorization: `Bearer ${token}` },
          data: { email, password },
        }
      );

      logout();
      setRedirect(true);
    } catch (error) {
      setError(true);
      console.log(error.response.data);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        delete account
      </Button>
      {error && (
        <DialogContentText mt={1}>
          Can't delete user, wrong password.
        </DialogContentText>
      )}
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Delete account</DialogTitle>
          <DialogContent>
            <DialogContentText mb={1}>
              Confirm password to delete account.
            </DialogContentText>

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
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={handleClose}>
              Delete
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      {redirect && <Navigate to="/categories" />}
    </div>
  );
};

export default DeleteUserConfirm;
