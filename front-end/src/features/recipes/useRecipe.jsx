import { useQueries, useQuery } from "@tanstack/react-query";
import { getRecipe } from "../../services/apiRecipes";
import { getRecipeComments } from "../../services/apiComments";

export default function useRecipe(recipeId) {
  const { data: recipes, isPending: isPendingRecipe } = useQuery({
    queryKey: ["recipes", recipeId],
    queryFn: () => getRecipe(recipeId),
  });
  const { data: comments, isPending: isPendingComments } = useQuery({
    queryKey: ["comments", recipeId],
    queryFn: () => getRecipeComments(recipeId),
  });
  return {
    data: { ...recipes, comments },
    isPending: isPendingRecipe || isPendingComments,
  };
}
