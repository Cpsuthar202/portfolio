import { createSlice } from "@reduxjs/toolkit";
import { IAuthSliceInitialState } from "./type";

import { forgetPassword, login, register, sendOtp } from "./service";

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
  extraReducers: (builder) => {
    builder
      .addCase(sendOtp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendOtp.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(sendOtp.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.isLoading = false;
        // state.data = action.payload.data;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
        // state.data = action.payload.data;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(forgetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgetPassword.fulfilled, (state) => {
        state.isLoading = false;
        // state.data = action.payload.data;
      })
      .addCase(forgetPassword.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { setLoginDetailPreserve, setRegisterDetailPreserve } = authSlice.actions;

export default authSlice.reducer;
