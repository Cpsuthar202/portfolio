import { createSlice } from "@reduxjs/toolkit";
import { IShopsSliceInitialState } from "./type";
import { getshops, getshopsbyid } from "./service";

const initialState: IShopsSliceInitialState = {
  isLoading: false,
  data: null,
  shops: null,
  shop: null,
  isError: false,
  isLoadingUser: false,
};

export const shopsSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getshops.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getshops.fulfilled, (state, action) => {
        state.isLoading = false;
        state.shops = action.payload.data;
      })
      .addCase(getshops.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getshopsbyid.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getshopsbyid.fulfilled, (state, action) => {
        state.isLoading = false;
        state.shop = action.payload.data;
      })
      .addCase(getshopsbyid.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default shopsSlice.reducer;
