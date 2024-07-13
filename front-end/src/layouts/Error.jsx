import styled from "styled-components";
import { StyledHeading } from "../styles/StyledComponents";

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
`;

const StyledErrorHeading = styled(StyledHeading)`
  color: var(--color-red-600);
`;

export default function Error({ children }) {
  return (
    <StyledError>
      <StyledErrorWrap>
        <StyledErrorHeading as="h1">
          Oops! Something went wrong...
        </StyledErrorHeading>
        <div>{children}</div>
        <button onClick={() => window.location.reload()}>Reload</button>
      </StyledErrorWrap>
    </StyledError>
  );
}
