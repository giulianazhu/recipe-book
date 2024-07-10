import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Suspense } from "react";
import Loader from "./Loader";

export default function AppLayout() {
  return (
    // to be removed id
    <div id="layout">
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}
