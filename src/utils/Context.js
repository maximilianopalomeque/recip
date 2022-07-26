import { createContext } from "react";

export const AuthContext = createContext({
  loggedIn: false,
  username: "",
  token: "",
  setUserName: () => {},
  setToken: () => {},
  setLoggedIn: () => {},
});
