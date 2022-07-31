import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Categories from "./screens/Categories";
import Category from "./screens/Category";
import Recipe from "./screens/Recipe";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import UserRecipes from "./screens/UserRecipes";
import UserAccount from "./screens/UserAccount";
import HomeScreen from "./screens/HomeScreen";
import AllRecipes from "./screens/AllRecipes";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material/";
import theme from "./utils/theme";

import { AuthContext } from "./utils/Context";

import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [token, setToken] = useState();
  const value = {
    loggedIn,
    setLoggedIn,
    username,
    setUserName,
    email,
    setEmail,
    token,
    setToken,
  };

  const checkToken = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      return false;
    }

    const { token, tokenExpirationDate } = userData;
    const actualDate = new Date();
    const expirationValue = new Date(tokenExpirationDate); // conver to date obj
    if (token && expirationValue > actualDate) {
      return true;
    }
    return false;
  };

  const login = () => {
    const { token, username, email } = JSON.parse(
      localStorage.getItem("userData")
    ); // if token is valid, then user data exists (can be destructured)
    setLoggedIn(true);
    setUserName(username);
    setEmail(email);
    setToken(token);
  };

  const logout = () => {
    setLoggedIn(false);
    setUserName(null);
    setEmail(null);
    setToken(null);
    localStorage.removeItem("userData");
  };

  const setAutoLogout = () => {
    const { tokenExpirationDate } = JSON.parse(
      localStorage.getItem("userData")
    );

    const remainingTime = new Date(tokenExpirationDate) - new Date();
    setTimeout(logout, remainingTime);
  };

  useEffect(() => {
    const isTokenValid = checkToken();
    if (isTokenValid) {
      login();
      setAutoLogout();
    } else {
      logout();
    }
  }, []);

  return (
    <AuthContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HomeScreen />
                  </>
                }
              />
              <Route
                path="/recipes/all"
                element={
                  <>
                    <NavBar />
                    <AllRecipes />
                    <Footer />
                  </>
                }
              />
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
              <Route
                path="/:username/recipes"
                element={
                  <>
                    <NavBar />
                    <UserRecipes />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/account/:username"
                element={
                  <>
                    <NavBar />
                    <UserAccount />
                    <Footer />
                  </>
                }
              />
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </ThemeProvider>
    </AuthContext.Provider>
  );
};

export default App;
