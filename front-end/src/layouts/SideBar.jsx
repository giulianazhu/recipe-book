import styled, { css } from "styled-components";
import { device } from "../styles/optionStyles";
import { StyledToggler } from "./NavBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRef } from "react";
import useOutClick from "../hooks/useOutClick";
import SearchBox from "../features/search/SearchBox";

const StyledSideBar = styled.nav`
  position: fixed;
  z-index: 100;
  min-height: 100vh;
  height: 100%;
  overflow: auto;
  display: none;
  background-color: grey;
  opacity: 0.8;
  transition: left 0.5s ease-in-out;

  @media (max-width: ${device.md}) {
    display: flex;
    flex-flow: column;
    max-width: 50%;
    ${(props) =>
      props.$visible === "true"
        ? css`
            left: 0;
          `
        : css`
            left: -120%;
          `}
  }
  @media (max-width: ${device.sm}) {
    max-width: 60%;
  }
  @media (max-width: ${device.xs}) {
    max-width: 100%;
  }
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
      <StyledToggler>
        <RxHamburgerMenu onClick={handleToggle} />
      </StyledToggler>
      <div>
        <h1>FILTERBOX SEARCH BOX</h1>
        <SearchBox />
      </div>
    </StyledSideBar>
  );
}
