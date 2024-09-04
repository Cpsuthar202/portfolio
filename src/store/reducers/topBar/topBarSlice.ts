import { createSlice } from "@reduxjs/toolkit";
import { ItopBar } from "./type";

const initialState: ItopBar = {
  title: "",
  isLoading: false,
  isError: false,
};

export const topBarSlice = createSlice({
  name: "topBar",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder;
  // },
});

export const { setTitle } = topBarSlice.actions;
// export const title = (state: RootState) => state.topbar.title;

export default topBarSlice.reducer;
