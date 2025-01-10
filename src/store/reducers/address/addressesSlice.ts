import { createSlice } from "@reduxjs/toolkit";
import { IAddressSliceInitialState } from "./type";
import { createaddress, deleteaddress, getaddresses, setdefaultaddress, updateaddress } from "./service";

const initialState: IAddressSliceInitialState = {
  isLoading: false,
  data: null,
  addresses: null,
  isError: false,
  isLoadingUser: false,
};

export const addressesSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getaddresses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getaddresses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addresses = action.payload.data;
      })
      .addCase(getaddresses.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteaddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteaddress.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteaddress.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(setdefaultaddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setdefaultaddress.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(setdefaultaddress.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(createaddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createaddress.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createaddress.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(updateaddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateaddress.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateaddress.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default addressesSlice.reducer;
