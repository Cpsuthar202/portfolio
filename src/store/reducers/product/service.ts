import { productAPI, productByIdAPI } from "@/services/productsServices";
import { IAPIResponseSchema, IPagination } from "@/store/type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Iproduct, IproductPayload } from "./type";

// get product
export const getproducts = createAsyncThunk<IAPIResponseSchema<IPagination<Iproduct[]>>, IproductPayload>("get/product", async (data: IproductPayload) => {
  const result = await productAPI(data);
  if (result.data) return result.data;
  return result;
});

// get product by ID
export const getproductbyid = createAsyncThunk<IAPIResponseSchema<Iproduct>, string>("get/product_by_id", async (id: string) => {
  const result = await productByIdAPI(id);
  if (result.data) return result.data;
  return result;
});
