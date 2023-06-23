import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
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
          // border: "1px solid red",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton
          sx={{
            display: "flex",
            my: "0.5rem",

            flexDirection: "row-reverse",
            padding: "0",
          }}
        >
          <Link to="/add-product">
            {" "}
            <ListItemIcon sx={{ ml: "-1rem" }}>
              <SendIcon />
            </ListItemIcon>
            <ListItemText sx={{ ml: "5rem" }} primary="اضافه کردن محصولات" />
          </Link>
        </ListItemButton>
        <ListItemButton
          sx={{
            display: "flex",
            my: "0.5rem",

            flexDirection: "row-reverse",
            padding: "0",
          }}
        >
          <ListItemIcon sx={{ ml: "-1rem" }}>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText sx={{ ml: "6.3rem" }} primary="مشاهده محصولات" />
        </ListItemButton>
      </List>
    </Box>
  );
}
