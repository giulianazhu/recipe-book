import styled from "styled-components";
import { StyledButton, StyledHeading } from "../styles/StyledComponents";

const StyledError = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledErrorWrap = styled.div`
  padding-block-end: 10rem;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  text-align: center;
`;

const StyledErrorHeading = styled(StyledHeading)`
  color: var(--color-red-500);
`;

const StyledReloadButton = styled(StyledButton)`
  padding: 0.5em 0.8em;
  border: var(--color-red-400) 2px solid;
  background-color: var(--color-red-500);
  color: var(--color-yellow-100);
  &:hover {
    border: var(--color-orange-300) 2px solid;
    background-color: var(--color-orange-500);
  }
`;

export default function Error({ children }) {
  return (
    <StyledError>
      <StyledErrorWrap>
        <StyledErrorHeading as="h1">
          Oops! Something went wrong...
        </StyledErrorHeading>
        <StyledHeading as="h4">{children}</StyledHeading>
        <StyledReloadButton onClick={() => window.location.reload()}>
          Reload
        </StyledReloadButton>
      </StyledErrorWrap>
    </StyledError>
  );
}
