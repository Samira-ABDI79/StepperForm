import { createTheme } from "@mui/material/styles";
import "@mui/material/styles/createPalette";
import { faIR } from "@mui/x-date-pickers/locales";

// const myFont = {
//   fontFamily: "MyFont, sans-serif",
// };
declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    gray: string;
    gray1: string;
    white: string;
    pink: string;
    blue: string;
  }
}

export const theme = createTheme(
  {
    direction: "rtl",
    spacing: 4,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },

    palette: {
      common: {
        gray: "#9e9e9e",
        gray1: "#696969",
        white: "#fff",
        pink: "#ff00ff",
        blue: "#0000ff",
      },
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
      error: {
        main: "#d4351c",
      },
    },
    typography: {
      fontFamily: ["Vazir"].join(","),

      h1: {
        fontSize: 68,
      },
      h3: {
        fontSize: 40,
      },
      h4: {
        fontSize: 32,
      },
      subtitle1: {
        fontSize: 12,
      },
      body1: {
        fontWeight: 500,
      },
      button: {
        fontStyle: "italic",
      },
    },
    components: {
      MuiFormLabel: {
        styleOverrides: {
          root: {
            fontFamily: ["Vazir"].join(","),
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "0.25rem",
            borderColor: "#007fae",
            fontFamily: ["Vazir"].join(","),

            color: "#fff",

            fontWeight: 700,
          },
        },
      },
    },
  },
  faIR
);
