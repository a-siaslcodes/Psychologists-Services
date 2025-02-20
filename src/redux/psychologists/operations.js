import { createAsyncThunk } from "@reduxjs/toolkit";
import { database, ref, get } from "../../firebase";

export const fetchPsychologists = createAsyncThunk(
  "psychologists/getAll",
  async (_, thunkAPI) => {
    try {
      const itemsRef = ref(database, "items");
      const snapshot = await get(itemsRef);

      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("no items");

        return thunkAPI.rejectWithValue("No items found!");
      }
    } catch (error) {
      console.error("Error fetching items:");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
