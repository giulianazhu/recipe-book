import styled, { css } from "styled-components";
import { device } from "../styles/optionStyles";
import { StyledNavLink, StyledToggler } from "./NavBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRef } from "react";
import useOutClick from "../hooks/useOutClick";
import SearchBox from "../features/search/SearchBox";
import { StyledFlexBox } from "../styles/StyledComponents";

const StyledSideBar = styled.nav`
  position: fixed;
  z-index: 100;
  min-height: 100vh;
  height: 100%;
  overflow: auto;
  display: none;
  background-color: var(--color-orange-100);
  opacity: 0.98;
  transition: left 0.5s ease-in-out;

  @media (max-width: ${device.md}) {
    display: flex;
    flex-flow: column;
    max-width: 100%;
    ${(props) =>
      props.$visible === "true"
        ? css`
            left: 0;
          `
        : css`
            left: -120%;
          `}
  }
`;

const StyledNavSection = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2em;
`;

export default function SideBar({ isToggle, handleToggle }) {
  const elementRef = useRef(null);

  function handleOutClick() {
    if (isToggle === "true") {
      handleToggle();
    }
  }

  useOutClick(elementRef, handleOutClick);

  return (
    <StyledSideBar $visible={isToggle} ref={elementRef}>
      <StyledFlexBox $justify="space-between" $items="center">
        <StyledToggler>
          <RxHamburgerMenu onClick={handleToggle} />
        </StyledToggler>
        <StyledNavSection>
          <StyledNavLink to="/add" onClick={handleToggle}>
            Add Recipe
          </StyledNavLink>
          <StyledNavLink to="/searchinf" onClick={handleToggle}>
            Dummy
          </StyledNavLink>
        </StyledNavSection>
      </StyledFlexBox>
      <SearchBox handleToggle={handleToggle} />
    </StyledSideBar>
  );
}
