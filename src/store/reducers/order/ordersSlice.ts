import { createSlice } from "@reduxjs/toolkit";
import { IOrderSliceInitialState } from "./type";
import { getorder, postorder, postratorder } from "./service";

const initialState: IOrderSliceInitialState = {
  isLoading: false,
  data: null,
  orders: null,
  isError: false,
  isLoadingUser: false,
};

export const ordersSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getorder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getorder.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.orders = actions.payload.data;
      })
      .addCase(getorder.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(postorder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postorder.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postorder.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(postratorder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postratorder.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postratorder.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default ordersSlice.reducer;
