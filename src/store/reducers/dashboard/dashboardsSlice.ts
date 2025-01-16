import { createSlice } from "@reduxjs/toolkit";
import { getdashboards } from "./service";
import { IDashboardsSliceInitialState } from "./type";

const initialState: IDashboardsSliceInitialState = {
  isLoading: false,
  data: null,
  dashboards: null,
  isError: false,
  isLoadingUser: false,
};

export const dashboardsSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getdashboards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getdashboards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dashboards = action.payload.data;
      })
      .addCase(getdashboards.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default dashboardsSlice.reducer;
