import { useQuery } from "@tanstack/react-query";
import { getFilterRecipes } from "../../services/apiRecipes";

export default function useFilterRecipes(filters) {
  const { data, isPending } = useQuery({
    queryKey: ["recipes", filters],
    queryFn: () => getFilterRecipes(filters),
  });

  return { data, isPending };
}
