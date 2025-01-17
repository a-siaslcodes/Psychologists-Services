import { createSlice } from "@reduxjs/toolkit";
import { fetchPsychologists } from "./operations";

const initialState = {
  items: [],
  favorites: [],
  total: 0,
  isLoading: false,
  isFavorite: [],
  error: false,
  hasNextPage: false,
  limit: 4,
  page: 1,
};

const psychologistsSlice = createSlice({
  name: "psychologists",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const item = action.payload;
      const exists = state.isFavorite.find(
        (favorite) => favorite.name === item.name
      );

      if (exists) {
        state.isFavorite = state.isFavorite.filter(
          (favorite) => favorite.name !== item.name
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
        // console.log("Payload in fulfilled:", action.payload);
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPsychologists.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { toggleFavorite } = psychologistsSlice.actions;

export default psychologistsSlice.reducer;
