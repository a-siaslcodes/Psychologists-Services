import { createSlice } from "@reduxjs/toolkit";
import { addFavorite, removeFavorite } from "./operations";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
    loading: false,
    error: null,
  },
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addFavorite.pending, (state) => {
        state.loading = true;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.loading = false;
        state.favorites.push(action.payload);
      })
      .addCase(addFavorite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeFavorite.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        state.loading = false;
        state.favorites = state.favorites.filter(
          (fav) => fav.id !== action.payload
        );
      })
      .addCase(removeFavorite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFavorites, clearFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
