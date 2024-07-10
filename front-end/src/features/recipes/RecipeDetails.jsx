import { useParams } from "react-router-dom";
import useRecipe from "./useRecipe";
import { urlport } from "../../services/config";
import Comment from "../comments/Comment";

export default function RecipeDetails() {
  const { id: recipeId } = useParams();
  // console.log("recipeid", recipeId);

  const { data: recipe, isPending } = useRecipe(recipeId);
  // console.log(JSON.stringify(recipe));

  if (isPending) return <div>Pending...</div>;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={`${urlport}${recipe.image}`} alt="" />
      <span></span>
      <span></span>
      <span></span>
      <div>
        <h3>Ingredients</h3>
        <p>{recipe.ingredients}</p>
      </div>
      <div>
        <h2>Instructions</h2>
        <p>{recipe.instructions}</p>
      </div>
      <Comment comments={recipe.comments} recipeId={recipeId} />
    </div>
  );
}
