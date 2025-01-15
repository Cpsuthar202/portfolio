import { IAPIResponseSchema } from "@/store/type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IShopsResponse } from "./type";
import { shopsAPI, shopsByIdAPI } from "@/services/shopsServices";

//  getShops
export const getshops = createAsyncThunk<IAPIResponseSchema<IShopsResponse[]>, { search?: string | null } | null>("get/shops", async (data: { search?: string | null } | null) => {
  const result = await shopsAPI(data);
  if (result.data) return result.data;
  return result;
});
//  get Shop By Id
export const getshopsbyid = createAsyncThunk<IAPIResponseSchema<IShopsResponse>, string>("get/shops_by_id", async (id: string) => {
  const result = await shopsByIdAPI(id);
  if (result.data) return result.data;
  return result;
});
