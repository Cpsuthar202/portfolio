import { createSlice } from "@reduxjs/toolkit";
import { ICartsSliceInitialState } from "./type";
import { getcart, postcart, postremovecart } from "./service";

const initialState: ICartsSliceInitialState = {
  isLoading: false,
  data: null,
  carts: null,
  isError: false,
  isLoadingUser: false,
};

export const cartsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getcart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getcart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carts = action.payload.data;
      })
      .addCase(getcart.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(postcart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postcart.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postcart.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(postremovecart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postremovecart.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postremovecart.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default cartsSlice.reducer;
