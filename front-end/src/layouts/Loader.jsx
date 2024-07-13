import styled, { keyframes } from "styled-components";
import { StyledHeading } from "../styles/StyledComponents";

const rotate = keyframes`
  0% {
    transform: rotate(-30deg);
  }
  100%{
    transform: rotate(30deg)
  }
`;

const StyledLoader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoadWrap = styled.div`
  padding-block-end: 10rem;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const StyledLoadHeading = styled(StyledHeading)`
  color: var(--color-orange-900);
`;

const StyledLoadLogo = styled.div`
  width: 25%;
  height: 25%;
  animation: ${rotate} 1.5s alternate-reverse infinite;
`;

export default function Loader() {
  return (
    <StyledLoader>
      <StyledLoadWrap>
        <StyledLoadHeading as="h1">Loading...</StyledLoadHeading>
        <StyledLoadLogo>
          <img src="hat.svg" alt="Freepik_flowicon" />
        </StyledLoadLogo>
      </StyledLoadWrap>
    </StyledLoader>
  );
}
