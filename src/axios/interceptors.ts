import { errorToast } from "@/components/toastify/Toast";
import { checkUserToken } from "@/utils/localStorage";

const requestHandler = (request: any) => {
  console.log(request);
  request.headers.Authorization = `Bearer ${checkUserToken()}`;
  request.headers["Access-Control-Allow-Origin"] = "*";
  return request;
};

const requestErrorHandler = (err: any) => {
  console.error(err);

  return Promise.reject(err);
};

const responseHandler = (response: any) => {
  console.log(response);
  return Promise.resolve(response);
};

const responseErrorHandler = (error: any) => {
  errorToast({ message: error.response.data.message });

  return Promise.reject(error);
};

export { requestHandler, requestErrorHandler, responseHandler, responseErrorHandler };
