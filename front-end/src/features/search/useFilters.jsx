import { useQueries } from "@tanstack/react-query";
import {
  getCuisines,
  getDiets,
  getDifficulties,
} from "../../services/apiFilters";

export default function useFilters() {
  const [cuisines, diets, difficulties] = useQueries({
    queries: [
      { queryKey: ["cuisines"], queryFn: getCuisines },
      { queryKey: ["diets"], queryFn: getDiets },
      { queryKey: ["difficulties"], queryFn: getDifficulties },
    ],
  });
  console.log(cuisines.data, diets.data, difficulties.data);
  return {
    cuisines: cuisines.data,
    diets: diets.data,
    difficulties: difficulties.data,
    isPending: cuisines.isPending || diets.isPending || difficulties.isPending,
  };
}
