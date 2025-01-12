import { categoriesAPI } from "@/services/categoriesServices";
import { IAPIResponseSchema } from "@/store/type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICategoriesResponse } from "./type";

//  categories
export const getcategories = createAsyncThunk<IAPIResponseSchema<ICategoriesResponse[]>, { search: string }>("get/categories", async (data: { search: string }) => {
  const result = await categoriesAPI(data);

  if (result.data) return result.data;
  return result;
});
