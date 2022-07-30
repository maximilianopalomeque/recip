import { createContext } from "react";

export const AuthContext = createContext({
  loggedIn: false,
  username: "",
  email: "",
  token: "",
  setLoggedIn: () => {},
  setUserName: () => {},
  setEmail: () => {},
  setToken: () => {},
});
