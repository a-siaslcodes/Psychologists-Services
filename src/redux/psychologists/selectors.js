import { createSelector } from "@reduxjs/toolkit";

export const selectPsychologists = (state) => state.psychologists.items;

export const selectIsLoading = (state) => state.psychologists.isLoading;

export const selectFilter = (state) => state.psychologists.currentFilter;

export const selectFilteredPsychologists = createSelector(
  [selectPsychologists, selectFilter],
  (psychologists, filter) => {
    switch (filter) {
      case "A to Z":
        return [...psychologists].sort((a, b) => a.name.localeCompare(b.name));
      case "Z to A":
        return [...psychologists].sort((a, b) => b.name.localeCompare(a.name));
      case "Less than 10$":
        return [...psychologists].sort(
          (a, b) => Number(a.price_per_hour) - Number(b.price_per_hour)
        );
      case "Greater than 10$":
        return [...psychologists].sort(
          (a, b) => Number(b.price_per_hour) - Number(a.price_per_hour)
        );
      case "Popular":
        return [...psychologists].sort(
          (a, b) => Number(b.rating) - Number(a.rating)
        );
      case "Not Popular":
        return [...psychologists].sort(
          (a, b) => Number(a.rating) - Number(b.rating)
        );
      default:
        return psychologists;
    }
  }
);
