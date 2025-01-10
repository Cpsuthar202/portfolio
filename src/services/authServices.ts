import { apiInstance, baseInstance } from "@/axios/axios.config";
import { ILoginSchema, ILoginSchemaErr, IRegistrationSchema, IResetpassword } from "@/store/reducers/auth/type";
import { FORGET_PASSWORD, LOGIN, REGISTER, RESET_PASSWORD, SEND_OTP } from "@/utils/constants";

// const SEND_OTP = "/auth/send_otp"; // Replace with your actual endpoint

// APIsend OTP
export const sendOptAPI = async (payload: ILoginSchemaErr) => {
  return await baseInstance.post(SEND_OTP, { ...payload });
};

// API  login
export const loginAPI = async (payload: ILoginSchema) => {
  // const body = { email: payload.email, };
  return await baseInstance.post(LOGIN, { ...payload });
};
// API register
export const registerAPI = async (payload: IRegistrationSchema) => {
  return await baseInstance.post(REGISTER, { ...payload });
};

// API  forget Password
export const forgetPasswordAPI = async (payload: ILoginSchemaErr) => {
  return await baseInstance.post(FORGET_PASSWORD, { ...payload });
};
// API reset password
export const resetPasswordAPI = async (payload: IResetpassword) => {
  return await apiInstance.post(RESET_PASSWORD, { ...payload });
};
