import { useState } from "react";
import { getComments, getRecipeComments } from "../services/apiComments";
import { getCuisines, getDiets, getDifficulties } from "../services/apiFilters";
import { deleteRecipe, getRecipe, getRecipes } from "../services/apiRecipes";

export default function HomePage() {
  async function handleClick() {
    const data = await getRecipe(17);
    console.log(data);
  }
  return (
    <div>
      <button onClick={handleClick}>get data</button>
    </div>
  );
}
