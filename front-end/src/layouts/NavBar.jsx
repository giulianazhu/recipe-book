import styled from "styled-components";
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
  background-color: white;
  opacity: 0.7;
  @media (max-width: ${device.md}) {
    background-image: url("../../public/chef.svg");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1.8rem;
  @media (max-width: ${device.md}) {
    display: none;
  }
`;

const StyledLogo = styled(NavLink)`
  border-radius: 50%;
  background-color: grey;
  overflow: hidden;
  width: 3em;
  height: 3em;
  flex: 0 0 3em;
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
  @media (max-width: ${device.md}) {
    display: flex;
    align-items: center;
  }
`;

export default function NavBar({ handleToggle }) {
  return (
    <StyledNavBar>
      <StyledLogo to="/search">
        <img src="chef.svg" alt="from_Freepik" />
      </StyledLogo>
      <StyledToggler>
        <RxHamburgerMenu onClick={handleToggle} />
      </StyledToggler>
      <StyledNavLink to="/search">Search</StyledNavLink>
      <StyledNavLink to="/add">Add Recipe</StyledNavLink>
      <StyledNavLink onClick={(e) => e.preventDefault()}>Dummy</StyledNavLink>
    </StyledNavBar>
  );
}
