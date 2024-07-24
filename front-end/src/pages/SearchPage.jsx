import { StyledPage } from "../styles/StyledComponents";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import SearchBox from "../features/search/SearchBox";
import { device } from "../styles/optionStyles";
import useFilters from "../features/search/useFilters";
import Loader from "../layouts/Loader";

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

const StyledStickyRange = styled.div`
  height: 100%;
`;

const StyledStickyWrap = styled.div`
  position: sticky;
  top: 9rem; //match navbar height
`;

export default function SearchPage() {
  const { cuisines, diets, difficulties, isPending, isError, error } =
    useFilters();

  if (isPending) return <Loader />;

  console.log(cuisines, diets);

  const useFiltersData = {
    cuisines,
    diets,
    difficulties,
    isError,
    error,
  };

  console.log(useFiltersData);

  return (
    <StyledPage as="main">
      <StyledDashboard>
        <StyledStickyRange>
          <StyledStickyWrap>
            {/* if type ="main" will disappear at small screen */}
            <SearchBox type="main" useFiltersData={useFiltersData} />
          </StyledStickyWrap>
        </StyledStickyRange>
        <Outlet />
      </StyledDashboard>
    </StyledPage>
  );
}
