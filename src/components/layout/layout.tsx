import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <Outlet />
    </>
  );
}

export default Layout;
