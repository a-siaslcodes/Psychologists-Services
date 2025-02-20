export const SelectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const SelectUserName = (state) => state.auth.user.displayName;

export const SelectUserInfo = (state) => state.auth.user;

export const SelectUserId = (state) => {
  return state.auth.user ? state.auth.user.uid : null;
};

export const SelectFavorite = (state) => state.auth.user.favorites;
