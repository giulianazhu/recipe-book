import styled from "styled-components";

export const StyledHeading = styled.h1`
  padding-block: 0.5em;
`;

export default function Heading({ children }) {
  return <StyledHeading>{children}</StyledHeading>;
}
