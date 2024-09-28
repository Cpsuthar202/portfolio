import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { darkTheme, lightTheme } from "./theme/index.ts";
import { getInitialTheme, setInitialTheme } from "./utils/localStorage.ts";

const Root = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialTheme);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      setInitialTheme(newMode); // Persist the theme in localStorage
      return newMode;
    });
  };

  useEffect(() => {
    // Persist the theme to localStorage whenever it changes
    setInitialTheme(isDarkMode);
  }, [isDarkMode]);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter basename="/">
        <Provider store={store}>
          <App toggleTheme={toggleTheme} />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
