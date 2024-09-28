import { ILoginResponse } from "@/store/reducers/auth/type";
import { LOCALSTORAGE_VARIABLE } from "./constants";
export const getLocalAuth = (): ILoginResponse => {
  const storedAuth = localStorage.getItem(LOCALSTORAGE_VARIABLE);
  const authLocal: ILoginResponse = storedAuth !== null ? JSON.parse(storedAuth) : null;
  return authLocal;
};
export const setLocalAuth = (data: ILoginResponse) => {
  localStorage.setItem(LOCALSTORAGE_VARIABLE, JSON.stringify(data));
};
// export const clearLocalAuth = () => {
//   localStorage.clear();
//   navigate("/auth/login", { replace: true });
// };

// Utility function to retrieve the initial theme from localStorage
export const getInitialTheme = (): boolean => {
  const savedTheme = localStorage.getItem("isDarkMode");
  return savedTheme ? JSON.parse(savedTheme) : false;
};

// Utility function to set the theme in localStorage
export const setInitialTheme = (newMode: boolean): void => {
  localStorage.setItem("isDarkMode", JSON.stringify(newMode));
};
