// src/theme/darkTheme.ts
import { createTheme } from "@mui/material/styles";
import { commonTheme } from "./commonTheme";
import { mColor } from "@color";

export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    ...commonTheme.palette,
    mode: "dark",
    background: {
      default: mColor.textDisabled, // Default background color for the application
      paper: mColor.black, // Background color for paper-like components (e.g., cards)
    },
    text: {
      // Text colors
      primary: mColor.while, // Primary text color
      secondary: mColor.infoMain, // (Optional) Secondary text color, commented out
      disabled: mColor.textDisabled, // Text color for disabled elements
    },
  },
});
