import { IauthResponse } from "@/store/reducers/auth/type";
import { LOCALSTORAGE_VARIABLE } from "./constants";

export const getLocalAuth = (): IauthResponse => {
  const storedAuth = localStorage.getItem(LOCALSTORAGE_VARIABLE);
  const authLocal: IauthResponse = storedAuth !== null ? JSON.parse(storedAuth) : null;
  return authLocal;
};

// export const getLocalAuth = (): ILoginResponse | null => {
//   const storedAuth = localStorage.getItem(LOCALSTORAGE_VARIABLE);
//   const authLocal: ILoginResponse | null = storedAuth ? JSON.parse(storedAuth) : null;
//   return authLocal;
// };

export const setLocalAuth = (data: IauthResponse) => {
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

export const checkUserToken = (): boolean => {
  const userToken: IauthResponse = getLocalAuth();
  return userToken?.token ? true : false;
};
// export const checkUserToken = (): boolean => {
//   const userToken: IauthResponse = getLocalAuth();
//   return userToken?.token ? true : false;
// };
