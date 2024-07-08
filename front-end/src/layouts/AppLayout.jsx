import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    // to be removed id
    <div id="layout">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
