import { cartAPI, postcartAPI } from "@/services/cartServices";
import { IAPIResponseSchema } from "@/store/type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Icart, IcartPayload, ICartsResponse } from "./type";

//  cart
export const getcart = createAsyncThunk<IAPIResponseSchema<ICartsResponse>>("get/cart", async () => {
  const result = await cartAPI();
  console.log({ result });

  if (result.data) return result.data;
  return result;
});
export const postcart = createAsyncThunk<IAPIResponseSchema<Icart>, IcartPayload>("create/cart", async (data: IcartPayload) => {
  const result = await postcartAPI(data);
  console.log({ result, data });

  if (result.data) return result.data;
  return result;
});
