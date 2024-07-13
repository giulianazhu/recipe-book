import styled from "styled-components";

const StyledFooter = styled.footer`
  min-height: 20rem;
  background-color: var(--color-yellow-100);
  color: var(--color-grey-900);
`;
export default function Footer() {
  return (
    <StyledFooter>
      <h3>RecipeBook Footer</h3>
    </StyledFooter>
  );
}
