import { IAPIResponseSchema } from "@/store/type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBrandsResponse } from "./type";
import { brandsAPI } from "@/services/brandsServices";

//  brand
export const getbrands = createAsyncThunk<IAPIResponseSchema<IBrandsResponse[]>, { search?: string | null } | null>("get/brands", async (data: { search?: string | null } | null) => {
  const result = await brandsAPI(data);

  if (result.data) return result.data;
  return result;
});
