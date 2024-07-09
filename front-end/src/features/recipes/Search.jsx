import { NavLink } from "react-router-dom";
import { urlport } from "../../services/config";
import useFilters from "./useFilters";
import { useState } from "react";
import useFilterRecipes from "./useFilterRecipes";
import SearchBox from "./SearchBox";
import RecipeList from "./RecipeList";

export default function Search() {
  const [filters, setFilters] = useState("all"); //can prefetch useRecipe at home page
  const [page, setPage] = useState(1);
  const { data: recipes, isPending } = useFilterRecipes(filters, page);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const filtersObj = {};
    for (let [key, value] of formData.entries()) {
      if (value) {
        filtersObj[key] = value;
      }
    }
    // console.log(filtersObj);
    setFilters(filtersObj);
  }

  function nextPage() {
    setPage((prev) => prev + 1);
  }

  function prevPage() {
    if (page > 1) {
      setPage((prev) => prev - 1);
    } else {
      return;
    }
  }

  return (
    <>
      <SearchBox handleSubmit={handleSubmit} />
      <RecipeList
        recipes={recipes}
        nextPage={nextPage}
        prevPage={prevPage}
        page={page}
        isPending={isPending}
      />
    </>
  );
}
