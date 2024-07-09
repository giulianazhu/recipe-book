import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getFilterRecipes } from "../../services/apiRecipes";

export default function useFilterRecipes(filters, page) {
  const queryClient = useQueryClient();
  const { data, isPending } = useQuery({
    queryKey: ["recipes", filters, page],
    queryFn: () => getFilterRecipes(filters, page),
  });

  queryClient.prefetchQuery({
    queryKey: ["recipes", filters, page + 1],
    queryFn: () => getFilterRecipes(filters, page + 1),
  });

  return { data, isPending };
}
