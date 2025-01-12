import { createSlice } from "@reduxjs/toolkit";
import { IWishsSliceInitialState } from "./type";
import { getwish, posttogglewish } from "./service";

const initialState: IWishsSliceInitialState = {
  isLoading: false,
  data: null,
  wishs: null,
  isError: false,
  isLoadingUser: false,
};

export const wiahsSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getwish.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getwish.fulfilled, (state, action) => {
        state.isLoading = false;
        state.wishs = action.payload.data;
      })
      .addCase(getwish.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(posttogglewish.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(posttogglewish.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(posttogglewish.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default wiahsSlice.reducer;
