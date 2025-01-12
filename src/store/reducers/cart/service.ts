import { cartAPI, postcartAPI, postremovecartAPI } from "@/services/cartServices";
import { IAPIResponseSchema } from "@/store/type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IcartPayload, ICartsResponse } from "./type";

//  cart
export const getcart = createAsyncThunk<IAPIResponseSchema<ICartsResponse>>("get/cart", async () => {
  const result = await cartAPI();

  if (result.data) return result.data;
  return result;
});
export const postcart = createAsyncThunk<IAPIResponseSchema<undefined>, IcartPayload>("create/cart", async (data: IcartPayload) => {
  const result = await postcartAPI(data);

  if (result.data) return result.data;
  return result;
});
export const postremovecart = createAsyncThunk<IAPIResponseSchema<undefined>, string>("remove/cart", async (id: string) => {
  const result = await postremovecartAPI(id);

  if (result.data) return result.data;
  return result;
});
