import { IAPIResponseSchema } from "@/store/type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBrandsResponse } from "./type";
import { brandsAPI } from "@/services/brandsServices";

//  categories
export const getbrands = createAsyncThunk<IAPIResponseSchema<IBrandsResponse[]>>("get/brands", async () => {
  const result = await brandsAPI();
  // console.log({ result });

  if (result.data) return result.data;
  return result;
});
