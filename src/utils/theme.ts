import { red } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export let theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    mode: "light",
    primary: {
      main: "#4255ff",
    },
    secondary: {
      main: "#ffcd1f",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#303545",
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: {
          color: "#303545",

          "&:hover, &.active": {
            color: "#4255ff",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          boder: "none",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontWeight: "500",
          borderBottom: "none",
        }
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontWeight: "500",
        }
      },
    },
  },
});

theme = responsiveFontSizes(theme);
