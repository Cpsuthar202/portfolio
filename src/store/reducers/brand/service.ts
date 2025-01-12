import { IAPIResponseSchema } from "@/store/type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBrandsResponse } from "./type";
import { brandsAPI } from "@/services/brandsServices";

//  brand
export const getbrands = createAsyncThunk<IAPIResponseSchema<IBrandsResponse[]>, { search: string }>("get/brands", async (data: { search: string }) => {
  const result = await brandsAPI(data);

  if (result.data) return result.data;
  return result;
});
