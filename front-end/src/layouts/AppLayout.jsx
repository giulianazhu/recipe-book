import styled from "styled-components";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SideBar from "./SideBar";
import SearchProvider from "../contexts/SearchContext";
import { useState } from "react";

const StyledAppLayout = styled.div`
  min-height: 100vh;
  max-height: max-content;
  display: grid;
  grid-template-rows: auto minmax(100vh, 1fr) auto;
  background-color: var(--color-orange-100); //to be removed
`;

export default function AppLayout() {
  const [isToggle, setIsToggle] = useState("false");

  function handleToggle() {
    setIsToggle((prev) => (prev === "false" ? "true" : "false"));
  }

  return (
    <StyledAppLayout>
      <SearchProvider>
        <NavBar handleToggle={handleToggle} layout="main" />
        <Outlet />
        <Footer />
        <SideBar isToggle={isToggle} handleToggle={handleToggle} />
      </SearchProvider>
    </StyledAppLayout>
  );
}
