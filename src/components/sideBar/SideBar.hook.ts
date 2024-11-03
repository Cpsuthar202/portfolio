import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sidebarMenuList } from "./utils";

const useSideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPathId, setCurrentPathId] = useState<string | null>(null);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  useEffect(() => {
    if (location.pathname) {
      setCurrentPathId(sidebarMenuList.find((it) => it.link === location.pathname)?.id ?? null);
    }
  }, [location.pathname, sidebarMenuList]);

  return {
    variable: {
      currentPathId,
    },
    methods: {
      handleNavigate,
    },
  };
};
export { useSideBar };
