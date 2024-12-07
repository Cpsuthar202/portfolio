import { createSlice } from "@reduxjs/toolkit";
import { IAuthSliceInitialState } from "./type";

const initialState: IAuthSliceInitialState = {
  isLoading: false,
  data: null,
  isError: false,
  isLoadingUser: false,
  loginDetailPreserve: null,
  registerDetailPreserve: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginDetailPreserve: (state, action) => {
      state.loginDetailPreserve = action.payload;
    },
    setRegisterDetailPreserve: (state, action) => {
      state.registerDetailPreserve = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder

  // },
});

export const { setLoginDetailPreserve, setRegisterDetailPreserve } = authSlice.actions;

export default authSlice.reducer;
