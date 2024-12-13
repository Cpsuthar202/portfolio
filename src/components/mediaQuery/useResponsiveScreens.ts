import { useTheme } from "@mui/material/styles"; // Ensure this is imported correctly
import { useMediaQuery, Theme } from "@mui/material";

export const useResponsiveScreens = () => {
  const theme = useTheme<Theme>(); // Specify the theme type
  const isXsScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isXlScreen = useMediaQuery(theme.breakpoints.down("xl"));

  return { isXsScreen, isSmScreen, isMdScreen, isLgScreen, isXlScreen };
};
