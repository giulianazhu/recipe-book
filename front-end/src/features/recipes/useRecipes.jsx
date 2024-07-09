import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../../services/apiRecipes";

// export default function useRecipes() {
//   const { data, isPending } = useQuery({
//     queryKey: ["recipes"],
//     queryFn: getRecipes,
//   });

//   return { data, isPending };
// }

export default function useRecipes() {
  const { data, isPending } = useQuery({
    queryKey: ["recipes"],
    queryFn: getRecipes,
  });

  return { data, isPending };
}
