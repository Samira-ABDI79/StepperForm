import { styled } from "@mui/material/styles";
import { Step } from "@mui/material";

export const MyStep = styled(Step)(({ theme }) => ({
  "& .MuiStepLabel-label": {
    color: theme.palette.primary.main,
    fontWeight: 600,
    fontSize: 16,
    fontFamily: "Vazir, sans-serif",
  },
  "& .MuiStepIcon-root": {
    // color: theme.palette.primary.main,
    color: "#ff00ff",
    fontWeight: 600,
    fontSize: 24,
    fontFamily: "Vazir, sans-serif",
    backgroundColor: "#fff",
    padding: "0.5rem",
  },
  "& .MuiStepLabel-active": {
    // color: theme.palette.secondary.main,
    color: "#ff00ff",
    fontWeight: 600,
    fontSize: 16,
    fontFamily: "Vazir, sans-serif",
  },
}));
