import { getComments, getRecipeComments } from "../services/apiComments";
import { getCuisines, getDiets, getDifficulties } from "../services/apiFilters";
import { deleteRecipe, getRecipe, getRecipes } from "../services/apiRecipes";

export default function HomePage() {
  return (
    <div>
      <button onClick={getRecipes}>get data</button>
    </div>
  );
}
