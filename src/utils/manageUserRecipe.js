import axios from "axios";

export const saveRecipe = async (recipeId) => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  const { username, token } = userData;

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/recipes/recipe/save`,
      {
        username,
        recipeId,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const modifiedUser = userData;
    modifiedUser.recipes = [...modifiedUser.recipes, recipeId];
    localStorage.setItem("userData", JSON.stringify(modifiedUser));
  } catch (error) {
    console.log(error.response.data);
  }
};

export const deleteRecipe = async (recipeId) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const { username, token } = userData;

  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/recipes/recipe/delete`,
      {
        headers: { Authorization: `Bearer ${token}` },
        data: { username, recipeId },
      }
    );

    const modifiedUser = userData;
    modifiedUser.recipes = modifiedUser.recipes.filter(
      (recipe) => recipe !== recipeId
    );
    localStorage.setItem("userData", JSON.stringify(modifiedUser));
  } catch (error) {
    console.log(error.response.data);
  }
};
