import { createSlice } from "@reduxjs/toolkit";
import { IProfilesSliceInitialState } from "./type";
import { getprofile, putprofile } from "./service";

const initialState: IProfilesSliceInitialState = {
  isLoading: false,
  data: null,
  profile: null,
  isError: false,
  isLoadingUser: false,
};

export const profilesSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getprofile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getprofile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload.data;
      })
      .addCase(getprofile.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(putprofile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(putprofile.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(putprofile.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default profilesSlice.reducer;
