import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#FF5D5D",
    },
    secondary: {
      main: "#6A67CE",
    },
    error: {
      main: "#a64039",
    },
    warning: {
      main: "#ffd54f",
    },
    background: {
      default: "#FFF2F2",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

export default theme;
