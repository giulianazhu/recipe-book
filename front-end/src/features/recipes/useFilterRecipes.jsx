import { useQuery } from "@tanstack/react-query";
import { getFilterRecipes } from "../../services/apiRecipes";

export default function useFilterRecipes(filters, page) {
  const { data, isPending } = useQuery({
    queryKey: ["recipes", filters, page],
    queryFn: () => getFilterRecipes(filters, page),
  });

  return { data, isPending };
}
