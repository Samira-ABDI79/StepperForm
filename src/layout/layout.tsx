import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Box } from "@mui/material";

function Layout() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <Box sx={{ margin: "10rem" }}>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
