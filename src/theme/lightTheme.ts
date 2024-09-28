// src/theme/lightTheme.ts
import { createTheme } from "@mui/material/styles";
import { commonTheme } from "./commonTheme";
import { mColor } from "@color";

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    ...commonTheme.palette,
    mode: "light",
    background: {
      default: mColor.backgroundDefault, // Default background color for the application
      paper: mColor.while, // Background color for paper-like components (e.g., cards)
    },
    text: {
      // Text colors
      primary: mColor.black, // Primary text color
      secondary: mColor.while, // (Optional) Secondary text color, commented out
      disabled: mColor.textDisabled, // Text color for disabled elements
    },
  },
});
