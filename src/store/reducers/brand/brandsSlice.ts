import { createSlice } from "@reduxjs/toolkit";
import { IBrandsSliceInitialState } from "./type";
import { getbrands } from "./service";

const initialState: IBrandsSliceInitialState = {
  isLoading: false,
  data: null,
  brands: null,
  isError: false,
  isLoadingUser: false,
};

export const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getbrands.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getbrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.brands = action.payload.data;
      })
      .addCase(getbrands.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default brandsSlice.reducer;
