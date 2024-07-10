import { useState } from "react";
import useFilterRecipes from "./useFilterRecipes";
import SearchBox from "../search/SearchBox";
import RecipeList from "./RecipeList";
import { PAGE_SIZE } from "../../utils/constants";

export default function RecipeSearch() {
  const [filters, setFilters] = useState("all"); //can prefetch useRecipe at home page
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);

  const {
    data: recipes,
    isPending,
    isFetching,
  } = useFilterRecipes(filters, page, pageSize);

  console.log(pageSize);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const filtersObj = {};
    for (let [key, value] of formData.entries()) {
      if (value) {
        filtersObj[key] = value;
      }
    }
    setFilters(filtersObj);
    setPage(1); //manually setting page to 1 --> can consider redux for future
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

  function handlePageSize(val) {
    setPageSize(val);
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
        handlePageSize={handlePageSize}
      />
    </>
  );
}
