import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getFilterRecipes } from "../../services/apiRecipes";
import { PAGE_SIZE } from "../../utils/constants";
import { calcPageItems } from "../../utils/utils";

export default function useFilterRecipes(
  filters = "all",
  page = 1,
  pageSize = PAGE_SIZE
) {
  const queryClient = useQueryClient();

  const { data, isPending } = useQuery({
    queryKey: ["recipes", filters, page, pageSize],
    queryFn: () => getFilterRecipes(filters, page, pageSize),
    placeholderData: () => {
      console.log("Using placeholder data...");
      const recipes = queryClient.getQueryData(["recipes"]) ?? [];
      const maxItems = calcPageItems(page, pageSize);

      if (!filters || filters === "all") {
        return recipes.slice(0, maxItems);
      } else {
        return recipes
          .filter((recipe) => {
            // Check if recipe matches all filters
            return Object.keys(filters).every((filterKey) => {
              return recipe[filterKey] === filters[filterKey];
            });
          })
          .slice(0, maxItems);
      }
    },
  });

  queryClient.prefetchQuery({
    queryKey: ["recipes", filters, page + 1, pageSize],
    queryFn: () => getFilterRecipes(filters, page + 1, pageSize),
  });

  return { data, isPending };
}

//old initial data code
// const maxItems = calcPageItems(page, pageSize);
// if (!filters || filters === "all") {
//   return queryClient.getQueryData(["recipes"])?.slice(0, maxItems) ?? [];
// } else {
//   return (
//     queryClient
//       .getQueryData(["recipes"])
//       ?.filter((recipe) => {
//         for (let filter in filters) {
//           recipe[filter] === filters[filter];
//         }
//       })
//       ?.slice(0, maxItems) ?? []
//   );
// }
