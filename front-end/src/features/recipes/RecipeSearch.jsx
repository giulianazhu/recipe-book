import { useState } from "react";
import useFilterRecipes from "./useFilterRecipes";
import SearchBox from "../search/SearchBox";
import RecipeList from "./RecipeList";
import { pageSizeOptions } from "../../utils/constants";
import styled from "styled-components";
import { device } from "../../styles/optionStyles";

export const StyledDashboard = styled.div`
  padding-inline: 3em;
  display: grid;
  grid-template-columns: 1fr minmax(70%, 1fr);
  gap: 1em;
  @media (max-width: ${device.md}) {
    grid-template-columns: 1fr;
  }
`;

export default function RecipeSearch() {
  const [filters, setFilters] = useState("all");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(pageSizeOptions[0]);

  const {
    data: { data: recipes, totCount, totPages },
    isPending,
  } = useFilterRecipes(filters, page, pageSize);

  console.log(recipes);

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
    if (page < totPages) setPage((prev) => prev + 1);
  }

  function prevPage() {
    setPage((prev) => Math.max(prev - 1, 1));
  }

  function handlePageSize(val) {
    setPageSize(val);
  }

  return (
    <StyledDashboard>
      <SearchBox handleSubmit={handleSubmit} />
      <RecipeList
        recipes={recipes}
        totCount={totCount}
        totPages={totPages}
        nextPage={nextPage}
        prevPage={prevPage}
        page={page}
        isPending={isPending}
        pageSize={pageSize}
        handlePageSize={handlePageSize}
      />
    </StyledDashboard>
  );
}
