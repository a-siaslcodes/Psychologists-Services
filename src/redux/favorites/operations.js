import { createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../../firebase";
import { ref, get, update, remove } from "firebase/database";

export const addFavorite = createAsyncThunk(
  "favorites/addFavorite",
  async ({ userId, psychologistId }, { rejectWithValue }) => {
    try {
      const itemsRef = ref(database, "items");
      const snapshot = await get(itemsRef);

      if (!snapshot.exists()) {
        throw new Error("No psychologists found!");
      }

      const itemsArray = snapshot.val();
      const psychologist = Object.values(itemsArray).find(
        (psy) => psy.id === psychologistId
      );

      if (!psychologist) {
        throw new Error("Psychologist not found!");
      }

      const userFavoritesRef = ref(database, `users/${userId}/favorites`);
      await update(userFavoritesRef, {
        [psychologistId]: psychologist,
      });

      return psychologist;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeFavorite = createAsyncThunk(
  "favorites/removeFavorite",
  async ({ userId, psychologistId }, { rejectWithValue }) => {
    try {
      const favoriteRef = ref(
        database,
        `users/${userId}/favorites/${psychologistId}`
      );

      const snapshot = await get(favoriteRef);
      if (!snapshot.exists()) {
        throw new Error("Psychologist is not in favorites!");
      }

      await remove(favoriteRef);
      return psychologistId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
