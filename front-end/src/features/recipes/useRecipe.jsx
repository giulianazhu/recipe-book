import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getRecipe } from "../../services/apiRecipes";
import { getRecipeComments } from "../../services/apiComments";

export default function useRecipe(recipeId) {
  const queryClient = useQueryClient();
  const {
    data: recipe,
    isPending: isPendingRecipe,
    isError,
    error,
  } = useQuery({
    queryKey: ["recipes", recipeId],
    queryFn: () => getRecipe(recipeId),
    placeholderData: () => {
      return queryClient
        .getQueryData(["recipes"])
        ?.find((recipe) => recipe.id === recipeId);
    },
  });

  const {
    data: comments,
    isPending: isPendingComments,
    isError: isCommentsError,
    error: commentsError,
  } = useQuery({
    queryKey: ["comments", recipeId],
    queryFn: () => getRecipeComments(recipeId),
  });

  console.log(recipe, comments);
  return {
    data: { ...recipe, comments },
    isPending: isPendingRecipe || isPendingComments,
    isError: isError || isCommentsError,
    error: error || commentsError,
  };
}
