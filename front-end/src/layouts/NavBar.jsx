import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { device } from "../styles/optionStyles";

const StyledNavBar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 2em;
  background-color: var(--color-yellow-100);
  opacity: 0.7;
  @media (max-width: ${device.md}) {
    background-image: url("/chef.svg");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 0.2em 0.5em;
  font-size: 1.8rem;
  &:hover {
    color: var(--color-orange-900);
  }
  ${(props) =>
    props.$layout === "main" &&
    css`
      @media (max-width: ${device.md}) {
        display: none;
      }
    `}
`;

const StyledLogo = styled(NavLink)`
  border-radius: 50%;
  background-color: grey;
  overflow: hidden;
  width: 3em;
  height: 3em;
  flex: 0 0 3em;
  &:hover {
    background-color: var(--color-orange-300);
  }
  @media (max-width: ${device.md}) {
    display: none;
  }
`;

export const StyledToggler = styled.button`
  all: initial;
  display: none;
  color: inherit;
  font-size: 2.5em;
  cursor: pointer;
  &:hover {
    color: var(--color-orange-900);
  }
  @media (max-width: ${device.md}) {
    display: flex;
    align-items: center;
  }
`;

export default function NavBar({ handleToggle, layout }) {
  return (
    <StyledNavBar>
      <StyledLogo to="/search">
        <img src="chef.svg" alt="from_Freepik" />
      </StyledLogo>
      <StyledToggler>
        <RxHamburgerMenu onClick={handleToggle} />
      </StyledToggler>
      <StyledNavLink to="/search" $layout={layout}>
        Search
      </StyledNavLink>
      <StyledNavLink to="/add" $layout={layout}>
        Add Recipe
      </StyledNavLink>
      <StyledNavLink onClick={(e) => e.preventDefault()} $layout={layout}>
        Dummy
      </StyledNavLink>
    </StyledNavBar>
  );
}
