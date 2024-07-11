import styled from "styled-components";

export const StyledBox = styled.div`
  padding: 1em;
  border: black 2px solid;
  border-radius: 15px;
`;

export default function Box({ children }) {
  return <StyledBox>{children}</StyledBox>;
}
