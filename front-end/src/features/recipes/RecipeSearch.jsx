import useFilterRecipes from "./useFilterRecipes";
import RecipeList from "./RecipeList";
import styled from "styled-components";
import { device } from "../../styles/optionStyles";
import SearchBox from "../search/SearchBox";
import useCustomContext from "../../hooks/useCustomContext";
import { FilterContext } from "../../contexts/SearchContext";

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
  const { filters, page, pageSize, appliedFilters } =
    useCustomContext(FilterContext);

  console.log({ filters, page, pageSize, appliedFilters });

  const {
    data: { data: recipes, totCount, totPages },
    isPending,
  } = useFilterRecipes(appliedFilters, page, pageSize);

  console.log(recipes);

  return (
    <StyledDashboard>
      {/* if type ="main" will disappear at small screen */}
      <SearchBox type="main" />
      <RecipeList
        recipes={recipes}
        totCount={totCount}
        totPages={totPages}
        isPending={isPending}
      />
    </StyledDashboard>
  );
}
