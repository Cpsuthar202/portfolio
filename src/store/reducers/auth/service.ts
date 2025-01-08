// import { sendOptAPI } from "@/services/authServices";
import { IAPIResponseSchema } from "@/store/type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IauthResponse, ILoginSchemaErr, IRegistrationSchema } from "./type";
import { forgetPasswordAPI, loginAPI, registerAPI, sendOptAPI } from "@/services/authServices";

//  send OTP
export const sendOtp = createAsyncThunk<IAPIResponseSchema<undefined>, ILoginSchemaErr>("auth/send_otp", async (payload: ILoginSchemaErr) => {
  const result = await sendOptAPI(payload);
  console.log(payload);

  console.log("result", result);

  if (result.data) return result.data;
  return result;
});

//login
export const login = createAsyncThunk<IAPIResponseSchema<IauthResponse>, ILoginSchemaErr>("auth/login", async (payload: ILoginSchemaErr) => {
  const result = await loginAPI(payload);
  console.log(payload);

  if (result.data) return result.data;
  return result;
});

//register
export const register = createAsyncThunk<IAPIResponseSchema<IauthResponse>, IRegistrationSchema>("auth/register", async (payload: IRegistrationSchema) => {
  const result = await registerAPI(payload);
  console.log(payload);

  if (result.data) return result.data;
  return result;
});

//forget-password
export const forgetPassword = createAsyncThunk<IAPIResponseSchema<undefined>, ILoginSchemaErr>("auth/forget-password", async (payload: ILoginSchemaErr) => {
  const result = await forgetPasswordAPI(payload);
  console.log(payload);

  if (result.data) return result.data;
  return result;
});
