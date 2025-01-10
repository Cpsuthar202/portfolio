import { baseInstance } from "@/axios/axios.config";
import { ILoginSchema, ILoginSchemaErr, IRegistrationSchema } from "@/store/reducers/auth/type";
import { FORGET_PASSWORD, LOGIN, REGISTER, SEND_OTP } from "@/utils/constants";

// const SEND_OTP = "/auth/send_otp"; // Replace with your actual endpoint

// API function to send OTP
export const sendOptAPI = async (payload: ILoginSchemaErr) => {
  return await baseInstance.post(SEND_OTP, { ...payload });
};

// API function to login
export const loginAPI = async (payload: ILoginSchema) => {
  // const body = { email: payload.email, };
  return await baseInstance.post(LOGIN, { ...payload });
};
// API function to login
export const registerAPI = async (payload: IRegistrationSchema) => {
  return await baseInstance.post(REGISTER, { ...payload });
};

// API function to login
export const forgetPasswordAPI = async (payload: ILoginSchemaErr) => {
  return await baseInstance.post(FORGET_PASSWORD, { ...payload });
};
