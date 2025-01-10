import { categoriesAPI } from "@/services/categoriesServices";
import { IAPIResponseSchema } from "@/store/type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICategoriesResponse } from "./type";

//  categories
export const getcategories = createAsyncThunk<IAPIResponseSchema<ICategoriesResponse[]>>("get/categories", async () => {
  const result = await categoriesAPI();
  // console.log({ result });

  if (result.data) return result.data;
  return result;
});
