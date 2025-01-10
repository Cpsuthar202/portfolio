import { IAPIResponseSchema } from "@/store/type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IauthResponse, ILoginSchema, ILoginSchemaErr, IRegistrationSchema, IRegistrationSchemaErr } from "./type";
import { forgetPasswordAPI, loginAPI, registerAPI, sendOptAPI } from "@/services/authServices";

//  send OTP
export const postsendOtp = createAsyncThunk<IAPIResponseSchema<undefined>, ILoginSchemaErr>("auth/send_otp", async (payload: ILoginSchemaErr) => {
  const result = await sendOptAPI(payload);
  if (result.data) return result.data;
  return result;
});

//login
export const postlogin = createAsyncThunk<IAPIResponseSchema<IauthResponse>, ILoginSchema>("auth/login", async (payload: ILoginSchema) => {
  const result = await loginAPI(payload);
  if (result.data) return result.data;
  return result;
});

//register
export const postregister = createAsyncThunk<IAPIResponseSchema<IauthResponse>, IRegistrationSchema>("auth/register", async (payload: IRegistrationSchema) => {
  const result = await registerAPI(payload);
  if (result.data) return result.data;
  return result;
});

//forget-password
export const postforgetPassword = createAsyncThunk<IAPIResponseSchema<undefined>, IRegistrationSchemaErr>("auth/forget-password", async (payload: IRegistrationSchemaErr) => {
  const result = await forgetPasswordAPI(payload);
  if (result.data) return result.data;
  return result;
});
