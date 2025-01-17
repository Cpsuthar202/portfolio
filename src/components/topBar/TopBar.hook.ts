// topBar.hook.ts
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useTopBar = () => {
  const navigate = useNavigate();
  // Selects the current search title from Redux s
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  // Toggles the sidebar drawer's open state
  const toggleDrawer = (newOpen: boolean) => () => setOpenDrawer(newOpen);

  return {
    variable: {
      openDrawer,
    },
    methods: {
      navigate,
      toggleDrawer,
    },
  };
};
