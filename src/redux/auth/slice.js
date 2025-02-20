import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, logOutUser } from "./operations";

import { addFavorite, removeFavorite } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = null;
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
      .addCase(addFavorite.fulfilled, (state, action) => {
        if (state.user) {
          state.user.favorites.push(action.payload);
        }
      })
      .addCase(addFavorite.rejected, (state) => {
        state.error = true;
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        if (state.user) {
          state.user.favorites = state.user.favorites.filter(
            (psychologist) => psychologist.id !== action.payload
          );
        }
      })
      .addCase(removeFavorite.rejected, (state) => {
        state.error = true;
      }),
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
