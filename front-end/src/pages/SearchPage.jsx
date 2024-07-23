import { StyledPage } from "../styles/StyledComponents";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import SearchBox from "../features/search/SearchBox";
import { device } from "../styles/optionStyles";

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
  return (
    <StyledPage as="main">
      <StyledDashboard>
        <StyledStickyRange>
          <StyledStickyWrap>
            {/* if type ="main" will disappear at small screen */}
            <SearchBox type="main" />
          </StyledStickyWrap>
        </StyledStickyRange>
        <Outlet />
      </StyledDashboard>
    </StyledPage>
  );
}
