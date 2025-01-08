import axios from "axios";
import { responseHandler, responseErrorHandler, requestHandler, requestErrorHandler } from "./interceptors";

export const BASE_URL = import.meta.env.VITE_APP_API_ENDPOINT;
export const TIMEOUT = Number(import.meta.env.VITE_APP_API_TIMEOUT) || 30000;

const headers = {
  "Content-Type": "application/x-www-form-urlencoded",
};

const baseInstance = axios.create({
  baseURL: BASE_URL,
  headers,
});

const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    ...headers,
    "Content-Type": "application/json",
  },
  timeout: TIMEOUT,
});

// Add interceptors for error handling
baseInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("BaseInstance Error:", error);
    return Promise.reject(error);
  }
);

baseInstance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => responseErrorHandler(error)
);

apiInstance.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => requestErrorHandler(error)
);

apiInstance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => responseErrorHandler(error)
);

export { baseInstance, apiInstance };
