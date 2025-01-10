import { createSlice } from "@reduxjs/toolkit";

import { postforgetPassword, postlogin, postregister, postresetPassword, postsendOtp } from "./service";
import { IauthSliceInitialState } from "./type";

const initialState: IauthSliceInitialState = {
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
      .addCase(postsendOtp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postsendOtp.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postsendOtp.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(postlogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postlogin.fulfilled, (state) => {
        state.isLoading = false;
        // state.data = action.payload.data;
      })
      .addCase(postlogin.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(postregister.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postregister.fulfilled, (state) => {
        state.isLoading = false;
        // state.data = action.payload.data;
      })
      .addCase(postregister.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(postforgetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postforgetPassword.fulfilled, (state) => {
        state.isLoading = false;
        // state.data = action.payload.data;
      })
      .addCase(postforgetPassword.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(postresetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postresetPassword.fulfilled, (state) => {
        state.isLoading = false;
        // state.data = action.payload.data;
      })
      .addCase(postresetPassword.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { setLoginDetailPreserve, setRegisterDetailPreserve } = authSlice.actions;

export default authSlice.reducer;
