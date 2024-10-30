import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItopBar } from "./type";

// Define the initial state based on ItopBar
const initialState: ItopBar = {
  title: "",
  searchTitle: "",
  isLoading: false,
  isError: false,
};

export const topBarSlice = createSlice({
  name: "topBar",
  initialState,
  reducers: {
    setSearchTitle: (state: ItopBar, action: PayloadAction<string>) => {
      state.searchTitle = action.payload;
    },
  },
  // Uncomment and customize extraReducers as needed
  // extraReducers: (builder) => {
  //   builder;
  // },
});

export const { setSearchTitle } = topBarSlice.actions;

// Typing the state in the selector
export const searchTitle = (state: { topBar: ItopBar }) => state.topBar.searchTitle;

export default topBarSlice.reducer;
