import { IAPIResponseSchema } from "@/store/type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { posttogglewishAPI, wishAPI } from "@/services/wishServices";
import { IWishsResponse } from "./type";

//  get wish
export const getwish = createAsyncThunk<IAPIResponseSchema<IWishsResponse[]>>("get/wish", async () => {
  const result = await wishAPI();
  // console.log({ result });

  if (result.data) return result.data;
  return result;
});
//  post wish
export const posttogglewish = createAsyncThunk<IAPIResponseSchema<IWishsResponse[]>, string>("post/wish _toggel", async (id: string) => {
  const result = await posttogglewishAPI(id);
  // console.log({ result });

  if (result.data) return result.data;
  return result;
});
