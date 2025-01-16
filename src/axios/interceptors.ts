import { errorToast } from "@components/toastify/Toast";
import { getLocalAuth } from "@/utils/localStorage";

const requestHandler = (request: any) => {
  request.headers.Authorization = `Bearer ${getLocalAuth().token}`;
  request.headers["Access-Control-Allow-Origin"] = "*";
  return request;
};

const requestErrorHandler = (err: any) => {
  console.error(err);

  return Promise.reject(err);
};

const responseHandler = (response: any) => {
  return Promise.resolve(response);
};

const responseErrorHandler = (error: any) => {
  errorToast({ message: error.response?.data?.message || error.message });

  return Promise.reject(error);
};

export { requestHandler, requestErrorHandler, responseHandler, responseErrorHandler };
