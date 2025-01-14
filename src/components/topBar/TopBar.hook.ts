// topBar.hook.ts
import { useState, useEffect, ChangeEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setSearchTitle } from "@/store/reducers/topBar/topBarSlice";
import { checkUserToken } from "@/utils/localStorage";

export const useTopBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Selects the current search title from Redux store
  const { searchTitle } = useAppSelector((state) => state.topbar);

  // Local state to manage login status and sidebar drawer visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const [openConfDialog, setOpenConfDialog] = useState<boolean>(false);

  // Gets the specific line to display in the top bar
  // const tegLine = heroLine.find((e) => e.slug == "top-bar");

  // Checks for user token on component load to set initial login status
  useEffect(() => {
    setIsLoggedIn(!!checkUserToken());
  }, [navigate]);

  // Handles changes in the search input field and dispatches to Redux
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTitle(e.target.value));
  };

  // Redirects to product page if not already there
  const handleSearch = () => {
    if (!/\/display\/[^/]+$/.test(location.pathname)) {
      navigate("/product");
    }
  };

  // Toggles the sidebar drawer's open state
  const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

  // Handles authentication by redirecting based on login status
  const handleAuth = () => {
    if (isLoggedIn) {
      setOpenConfDialog(true);
    } else {
      navigate("/user/auth/login", { replace: true });
    }
  };

  return {
    variable: {
      isLoggedIn,
      open,
      searchTitle,
      openConfDialog,
      setOpenConfDialog,
    },
    methods: {
      navigate,
      toggleDrawer,
      handleSearch,
      handleSearchChange,
      handleAuth,
    },
  };
};
