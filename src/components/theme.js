import { createTheme } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import { teal } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[700], // Main primary color
    },
    secondary: {
      main: blueGrey["A200"], // Main secondary color
    },
    // Additional color options
    error: {
      main: "#FF3D00", // Error state color
    },
    typography: {
      fontFamily: "PT, sans-serif", // Replace YourChosenFont with the actual font name
    },
  },

  //     warning: {
  //       main: "#FFC107", // Warning state color
  //     },
  //     info: {
  //       main: "#2196F3", // Info state color
  //     },
  //     success: {
  //       main: "#4CAF50", // Success state color
  //     },
  //     drawer: {
  //       width: 240,
  //       flexShrink: 0,
  //     },
  //     background: {
  //       //   default: "#fafafa", // Default background color
  //       //paper: "#fff", // Background color for paper components
  //       primary: "#EFF2F1",
  //       secondary: "#737478",
  //     },
  //     text: {
  //       primary: "#2A373E", // Primary text color
  //       secondary: "#fff", // Secondary text color
  //       disabled: "#aaa", // Disabled text color
  //       hint: "#888", // Hint text color
  //     },
  //   },
});

export default theme;
