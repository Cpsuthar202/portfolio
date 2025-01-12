import { IAPIResponseSchema } from "@/store/type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileAPI, updateprofileAPI } from "@/services/profileServices";
import { IProfileResponse } from "./type";

//  get profile
export const getprofile = createAsyncThunk<IAPIResponseSchema<IProfileResponse>>("get/profile", async () => {
  const result = await profileAPI();

  if (result.data) return result.data;
  return result;
});

//  update profile
export const putprofile = createAsyncThunk<IAPIResponseSchema<undefined>, IProfileResponse>("put/profile", async (data: IProfileResponse) => {
  const result = await updateprofileAPI(data);

  if (result.data) return result.data;
  return result;
});
