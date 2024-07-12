import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Loader from "./Loader";
import Error from "./Error";
import SideBar from "./SideBar";
import SearchProvider from "../contexts/SearchContext";

const StyledAppLayout = styled.div`
  min-height: 100vh;
  max-height: max-content;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: var(--color-orange-100); //to be removed
`;

export default function AppLayout() {
  const [isToggle, setIsToggle] = useState("false");

  function handleToggle() {
    setIsToggle((prev) => (prev === "false" ? "true" : "false"));
  }

  return (
    <StyledAppLayout>
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loader />}>
          <SearchProvider>
            <NavBar handleToggle={handleToggle} />
            <Outlet />
            <Footer />
            <SideBar isToggle={isToggle} handleToggle={handleToggle} />
          </SearchProvider>
        </Suspense>
      </ErrorBoundary>
    </StyledAppLayout>
  );
}
