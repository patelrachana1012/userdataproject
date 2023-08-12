// theme.js

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2A373E", // Main primary color
      light: "#f00", // Lighter shade of primary color
      dark: "#737478", // Darker shade of primary color
      contrastText: "#fff", // Text color contrast against primary color
    },
    secondary: {
      main: "#83B5AF", // Main secondary color
      light: "#ffd149", // Lighter shade of secondary color
      dark: "#c67100", // Darker shade of secondary color
      contrastText: "#000", // Text color contrast against secondary color
    },
    // Additional color options
    error: {
      main: "#FF3D00", // Error state color
    },
    warning: {
      main: "#FFC107", // Warning state color
    },
    info: {
      main: "#2196F3", // Info state color
    },
    success: {
      main: "#4CAF50", // Success state color
    },
    drawer: {
      width: 240,
      flexShrink: 0,
    },
    background: {
      //   default: "#fafafa", // Default background color
      //paper: "#fff", // Background color for paper components
      primary: "#EFF2F1",
      secondary: "#737478",
    },
    text: {
      primary: "#2A373E", // Primary text color
      secondary: "#fff", // Secondary text color
      disabled: "#aaa", // Disabled text color
      hint: "#888", // Hint text color
    },
  },
});

export default theme;
