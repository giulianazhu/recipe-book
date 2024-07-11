import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Loader from "./Loader";
import Error from "./Error";
import SideBar from "./SideBar";

const StyledAppLayout = styled.div`
  min-height: 100vh;
  max-height: max-content;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: #f1ddc8; //to be removed
`;

export default function AppLayout() {
  const [isToggle, setIsToggle] = useState("false");

  function handleToggle() {
    setIsToggle((prev) => (prev === "false" ? "true" : "false"));
  }

  return (
    // to be removed id
    <StyledAppLayout>
      <NavBar handleToggle={handleToggle} />
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
      <Footer />
      <SideBar isToggle={isToggle} handleToggle={handleToggle} />
    </StyledAppLayout>
  );
}
