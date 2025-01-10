import { createSlice } from "@reduxjs/toolkit";
import { ICategoriesSliceInitialState } from "./type";
import { getcategories } from "./service";

const initialState: ICategoriesSliceInitialState = {
  isLoading: false,
  data: null,
  categories: null,
  isError: false,
  isLoadingUser: false,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getcategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getcategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload.data;
      })
      .addCase(getcategories.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default categoriesSlice.reducer;
