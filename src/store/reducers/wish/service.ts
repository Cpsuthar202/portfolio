import { IAPIResponseSchema } from "@/store/type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { posttogglewishAPI, wishAPI } from "@/services/wishServices";
import { IWishsResponse } from "./type";

//  get wish
export const getwish = createAsyncThunk<IAPIResponseSchema<IWishsResponse[]>>("get/wish", async () => {
  const result = await wishAPI();

  if (result.data) return result.data;
  return result;
});
//  post wish
export const posttogglewish = createAsyncThunk<IAPIResponseSchema<undefined>, string>("post/wish _toggel", async (id: string) => {
  const result = await posttogglewishAPI(id);

  if (result.data) return result.data;
  return result;
});
