import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00455c",
    },
    secondary: {
      main: "#71a3b8",
    },
    error: {
      main: "#FF3D00",
    },
    typography: {
      fontFamily: "PT, sans-serif",
    },
  },

  background: {
    primary: "#EFF2F1",
    secondary: "#737478",
  },
  text: {
    primary: "#2A373E",
    secondary: "#fff",
    disabled: "#aaa",
    hint: "#888",
  },
});

export default theme;
