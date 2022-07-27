import { useEffect, useContext, useState } from "react";
import axios from "axios";

import { AuthContext } from "../utils/Context";

const UserRecipes = () => {
  const { username, token } = useContext(AuthContext);
  const [userRecipes, setUserRecipes] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const getUserRecipes = async () => {
      try {
        const response = await axios("");
        console.log(response.data);
      } catch (error) {
        setError(true);
        console.log(error.response.data);
      }
    };
  }, []);

  return console.log(username, token);
};

export default UserRecipes;

// if logged out redirect to categories
