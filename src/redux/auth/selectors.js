import { createSelector } from "@reduxjs/toolkit";

export const SelectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const SelectUserName = (state) => state.auth.user.displayName;

export const SelectUserInfo = (state) => state.auth.user;

export const SelectUserId = (state) => {
  return state.auth.user ? state.auth.user.uid : null;
};

export const SelectFavorite = (state) => state.auth.user.favorites;

export const SelectIsLoading = (state) => state.auth.isLoading;

export const SelectError = (state) => state.auth.error;

export const SelectIsRefreshing = (state) => state.auth.isRefreshing;

export const SelectFavorites = createSelector(
  [SelectUserInfo],
  (user) => user?.favorites || []
);
