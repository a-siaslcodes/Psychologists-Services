import { createSlice } from "@reduxjs/toolkit";
import { fetchPsychologists } from "./operations";

const initialState = {
  items: [],
  favorites: [],
  total: 0,
  isLoading: false,
  error: false,
  //   hasNextPage: false,
  //   limit: 4,
  //   page: 1,
};

const psychologistsSlice = createSlice({
  name: "psychologists",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPsychologists.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchPsychologists.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPsychologists.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default psychologistsSlice.reducer;
