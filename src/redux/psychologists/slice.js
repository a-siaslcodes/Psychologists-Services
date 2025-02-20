import { createSlice } from "@reduxjs/toolkit";
import { fetchPsychologists } from "./operations";

const initialState = {
  items: [],
  total: 0,
  isLoading: false,
  error: false,
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
        state.isLoading = false;

        state.items = action.payload;
      })
      .addCase(fetchPsychologists.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default psychologistsSlice.reducer;
