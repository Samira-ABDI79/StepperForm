import { createTheme } from "@mui/material/styles";
import "@mui/material/styles/createPalette";
import { faIR } from "@mui/x-date-pickers/locales";

declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    KTHblue: string;
  }
}

export const theme = createTheme(
  {
    palette: {
      common: {
        KTHblue: "#007fae",
      },
      primary: {
        main: "#007fae",
      },
      secondary: {
        main: "#17a2b8",
      },
      error: {
        main: "#d4351c",
      },
    },
    typography: {
      fontFamily: ["Arial", "sans-serif", "Vazirmatn"].join(","),
      h1: {
        fontSize: 68,
      },
      h3: {
        fontSize: 40,
      },
      h4: {
        fontSize: 32,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "0.25rem",
            borderColor: "#007fae",

            color: "#fff",

            fontWeight: 700,
          },
        },
      },
    },
  },
  faIR
);
