// topBar.hook.ts
import { useResponsiveScreens } from "@components/mediaQuery/useResponsiveScreens";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useTopBar = () => {
  const navigate = useNavigate();
  const { isSmScreen } = useResponsiveScreens();
  // Selects the current search title from Redux s
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  // Toggles the sidebar drawer's open state
  const toggleDrawer = (newOpen: boolean) => () => setOpenDrawer(newOpen);
  return {
    variable: {
      openDrawer,
      isSmScreen,
    },
    methods: {
      navigate,
      toggleDrawer,
    },
  };
};
