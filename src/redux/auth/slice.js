import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  loginUser,
  logOutUser,
  initializeAuthListener,
} from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
    isRefreshing: true,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    clearUser: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = null;
      state.isRefreshing = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || { message: "Unexpected error" };
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.user = null;
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logOutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logOutUser.rejected, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(initializeAuthListener.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(initializeAuthListener.fulfilled, (state) => {
        state.isRefreshing = false;
      }),
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
