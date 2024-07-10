import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Error from "./Error";
import { Suspense } from "react";
import Loader from "./Loader";
import { ErrorBoundary } from "react-error-boundary";

export default function AppLayout() {
  return (
    // to be removed id
    <div id="layout">
      <NavBar />
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}
