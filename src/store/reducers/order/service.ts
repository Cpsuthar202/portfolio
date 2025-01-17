import { IAPIResponseSchema } from "@/store/type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IbuyPayload, IOrderPayload, IOrdersResponse } from "./type";
import { orderAPI, postbuyorderAPI, postorderAPI, postratorderAPI } from "@/services/orderServices";

//  order
export const postorder = createAsyncThunk<IAPIResponseSchema<undefined>, IOrderPayload>("post/order", async (data: IOrderPayload) => {
  const result = await postorderAPI(data);

  if (result.data) return result.data;
  return result;
});
export const postbuyorder = createAsyncThunk<IAPIResponseSchema<undefined>, IbuyPayload>("post/buy", async (data: IbuyPayload) => {
  const result = await postbuyorderAPI(data);

  if (result.data) return result.data;
  return result;
});
export const postratorder = createAsyncThunk<IAPIResponseSchema<undefined>, { id: string; rating: number | null | undefined }>(
  "post/order_rat",
  async (data: { id: string; rating: number | null | undefined }) => {
    const result = await postratorderAPI(data);
    if (result.data) return result.data;
    return result;
  }
);
export const getorder = createAsyncThunk<IAPIResponseSchema<IOrdersResponse[]>, { user_id: string }>("get/order", async (data: { user_id: string }) => {
  const result = await orderAPI(data);
  if (result.data) return result.data;
  return result;
});
