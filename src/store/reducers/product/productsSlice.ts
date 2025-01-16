import { createSlice } from "@reduxjs/toolkit";
import { IProductsSliceInitialState } from "./type";
import { getproductbyid, getproducts } from "./service";

const initialState: IProductsSliceInitialState = {
  isLoading: false,
  data: null,
  products: null,
  product: null,
  isError: false,
  isLoadingUser: false,
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearProductsList: (state) => {
      state.products = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getproducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getproducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.data;
      })
      .addCase(getproducts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getproductbyid.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getproductbyid.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload.data;
      })
      .addCase(getproductbyid.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});
export const { clearProductsList } = productsSlice.actions;
export default productsSlice.reducer;
