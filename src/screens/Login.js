import { Container, Grid, TextField, Typography, Button } from "@mui/material";

const Login = () => {
  return (
    <Container sx={{ backgroundColor: "white", paddingBottom: "70vh" }}>
      <Grid container justifyContent="center" align="center">
        <Grid item xs={12} mt={5}>
          <Typography variant="h5" fontWeight={500}>
            Login
          </Typography>
        </Grid>
        <Grid item xs={12} md={7} lg={8} mt={2}>
          <TextField fullWidth id="email" label="Email" variant="outlined" />
        </Grid>
        <Grid item xs={12} md={7} lg={8} mt={2}>
          <TextField
            fullWidth
            id="password"
            label="Password"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} mt={2} textAlign="center">
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
