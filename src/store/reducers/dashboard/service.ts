import { IAPIResponseSchema } from "@/store/type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IDashboardsResponse } from "./type";
import { bashboardAPI } from "@/services/bashboardServices";

//  categories
export const getdashboards = createAsyncThunk<IAPIResponseSchema<IDashboardsResponse>>("get/dashboards", async () => {
  const result = await bashboardAPI();

  if (result.data) return result.data;
  return result;
});
