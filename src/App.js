import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Categories from "./screens/Categories";
import Category from "./screens/Category";
import Recipe from "./screens/Recipe";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material/";
import theme from "./utils/theme";

import { AuthContext } from "./utils/Context";

const App = () => {
  const [auth, setAuth] = useState(false);
  const value = { auth, setAuth };

  return (
    <AuthContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route
              path="/categories"
              element={
                <>
                  <NavBar />
                  <Categories />
                  <Footer />
                </>
              }
            />
            <Route
              path="/category/:categoryName"
              element={
                <>
                  <NavBar />
                  <Category />
                  <Footer />
                </>
              }
            />
            <Route
              path="/recipe/:recipeName"
              element={
                <>
                  <NavBar />
                  <Recipe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <NavBar />
                  <Login />
                  <Footer />
                </>
              }
            />
            <Route
              path="/signup"
              element={
                <>
                  <NavBar />
                  <Signup />
                  <Footer />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthContext.Provider>
  );
};

export default App;
