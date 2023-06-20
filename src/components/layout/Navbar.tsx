import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Search = styled("div")(() => ({
  borderRadius: "1.2rem",
  backgroundColor: "#fff",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "5px 10px",
  marginLeft: 0,
  width: "15rem",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#000",
  "& .MuiInputBase-input": {
    padding: "0",
    backgroundColor: "#fff",

    transition: theme.transitions.create("width"),
    width: "100%",

    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
  const firstName  = useSelector((state: RootState) => state.User.firstName)
  const lastName  = useSelector((state: RootState) => state.User.lastName)
  const image  = useSelector((state: RootState) => state.User.image)

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgb(102,144,254)",
        height: "4rem",
      }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={0.5}
          sx={{
            backgroundColor: "rgb(30,34,255)",
            width: { lg: "14%" },
            boxSizing: "border-box",
            height: "100%",
            position: "absolute",
            left: "0",
            pl: "1rem",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{ ml: "22%", width: "100%" }}
        >
          <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />

            <SearchIcon style={{ color: "#aaa" }} />
          </Search>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography sx={{ color: "#aaa" }} variant="h6">
              Hi ,{firstName +" " + lastName}
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src={image}
            />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
