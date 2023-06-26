import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { setSidebarShow } from "../store/LayoutSlice";
import { RootState } from "../store";

import { Box } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import GradingIcon from "@mui/icons-material/Grading";
import AddCardIcon from "@mui/icons-material/AddCard";
import { LayoutState } from "../store/LayoutSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
export default function Sidebar() {
  const dispatch = useDispatch();

  const SidebarShow = useSelector(
    (state: RootState) => state.Layout.SidebarShow
  );

  return (
    <>
      {SidebarShow ? (
        <Box
          sx={{
            width: { lg: "14%" },
            height: "100%",
            boxSizing: "border-box",
            position: "fixed",
            right: "0",
            top: "0",
            pt: "10rem",
            border: "1px solid yellow",
            bgcolor: "#473cfc",
          }}
        >
          <List
            disablePadding={true}
            sx={{
              mt: "-4rem",
              padding: "0 0.5rem",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              sx={{
                display: "flex",
                my: "0.5rem",

                flexDirection: "row",
                justifyContent: "space-between",
                padding: "0",
              }}
            >
              <Link
                to="/add-product"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  padding: "0",
                  margin: "0",
                }}
              >
                {" "}
                <ListItemText sx={{}} primary="اضافه کردن محصولات" />
              </Link>
              <ListItemIcon sx={{ ml: "-1rem" }}>
                <AddCardIcon />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton
              sx={{
                display: "flex",
                my: "0.5rem",
                justifyContent: "space-between",

                flexDirection: "row",
                padding: "0",
              }}
            >
              <NavLink
                to="/view-product"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  padding: "0",
                  margin: "0",
                }}
              >
                {" "}
                <ListItemText sx={{}} primary="مشاهده محصولات" />
              </NavLink>
              <ListItemIcon sx={{ ml: "-1rem" }}>
                <GradingIcon />
              </ListItemIcon>
            </ListItemButton>
          </List>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
}
