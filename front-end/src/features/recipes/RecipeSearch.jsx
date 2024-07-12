import { useReducer } from "react";
import useFilterRecipes from "./useFilterRecipes";
import RecipeList from "./RecipeList";
import { pageSizeOptions } from "../../utils/constants";
import styled from "styled-components";
import { device } from "../../styles/optionStyles";
import SearchBox from "../search/SearchBox";

export const StyledDashboard = styled.div`
  padding-inline: 3em;
  display: grid;
  grid-template-columns: 1fr minmax(70%, 1fr);
  gap: 1em;
  @media (max-width: ${device.md}) {
    grid-template-columns: 1fr;
    padding-inline: 2em;
  }
`;

export const StyledSearchBox = styled.div`
  border: 2px black solid;
`;

export default function RecipeSearch() {
  const initialState = {
    filters: {},
    page: 1,
    pageSize: pageSizeOptions[0],
    appliedFilters: {},
  };

  function reducer(state, action) {
    switch (action.type) {
      case "setFilter":
        return {
          ...state,
          filters: {
            ...state.filters,
            [action.payload.key]: action.payload.value,
          },
        };
      case "clear":
        return { ...state, filters: initialState.filters };
      case "searchReset":
        return { ...state, page: initialState.page };
      case "setNextPage":
        return { ...state, page: state.page + 1 };
      case "setPrevPage":
        return { ...state, page: Math.max(state.page - 1, 1) };
      case "setPageSize":
        return { ...state, pageSize: action.payload };
      case "setApplyFilters":
        return { ...state, appliedFilters: state.filters };
      default:
        throw new Error("Unknown reducer action");
    }
  }

  const [{ filters, page, pageSize, appliedFilters }, dispatch] = useReducer(
    reducer,
    initialState
  );

  console.log({ filters, page, pageSize, appliedFilters });

  console.log("useFilterRecipes values", appliedFilters, page, pageSize);

  const {
    data: { data: recipes, totCount, totPages },
    isPending,
  } = useFilterRecipes(appliedFilters, page, pageSize);

  console.log(recipes);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({ type: "setApplyFilters" });
    dispatch({ type: "searchReset" });
  }

  return (
    <StyledDashboard>
      <SearchBox handleSubmit={handleSubmit} dispatch={dispatch} />
      <RecipeList
        recipes={recipes}
        totCount={totCount}
        totPages={totPages}
        // nextPage={nextPage}
        // prevPage={prevPage}
        page={page}
        isPending={isPending}
        pageSize={pageSize}
        dispatch={dispatch}
        // handlePageSize={handlePageSize}
      />
    </StyledDashboard>
  );
}
