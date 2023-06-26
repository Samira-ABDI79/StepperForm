import { styled } from "@mui/material/styles";
import { Step } from "@mui/material";

export const MyStep = styled(Step)(({ theme }) => ({
  "& .MuiStepLabel-label": {
    color: theme.palette.common.white,
    fontWeight: 600,
    fontSize: 16,
    fontFamily: "Vazir, sans-serif",
  },
  "& .MuiStepIcon-root": {
    color: theme.palette.common.pink,

    fontWeight: 600,
    fontSize: 24,
    fontFamily: "Vazir, sans-serif",

    padding: "0.5rem",
  },
  "& .MuiStepLabel-active": {
    color: theme.palette.common.blue,

    fontWeight: 600,
    fontSize: 16,
    fontFamily: "Vazir, sans-serif",
  },
}));
