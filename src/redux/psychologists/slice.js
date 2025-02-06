import { createSlice } from "@reduxjs/toolkit";
import { fetchPsychologists } from "./operations";

const initialState = {
  items: [],
  isFavorite: [],
  total: 0,
  isLoading: false,
  error: false,
};

const psychologistsSlice = createSlice({
  name: "psychologists",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const item = action.payload;
      const exists = state.isFavorite.find(
        (favorite) => favorite.id === item.id
      );
      if (exists) {
        state.isFavorite = state.isFavorite.filter(
          (favorite) => favorite.id !== item.id
        );
      } else {
        state.isFavorite.push(item);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPsychologists.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchPsychologists.fulfilled, (state, action) => {
        state.isLoading = false;

        state.items = action.payload;
      })
      .addCase(fetchPsychologists.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { toggleFavorite } = psychologistsSlice.actions;

export default psychologistsSlice.reducer;
