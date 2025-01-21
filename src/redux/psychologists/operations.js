import { createAsyncThunk } from "@reduxjs/toolkit";
import { database, ref, get } from "../../firebase";
import { nanoid } from "nanoid";

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

// export const fetchPsychologists = createAsyncThunk( //////////////////////////// this is with the nanoID for proper ID value for each card
//   "psychologists/getAll",
//   async (_, thunkAPI) => {
//     try {
//       const itemsRef = ref(database, "items");
//       const snapshot = await get(itemsRef);

//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         const dataWithIds = Object.keys(data).map((key) => ({
//           ...data[key],
//           id: nanoid(),
//         }));

//         return dataWithIds;
//       } else {
//         console.log("No items found!");
//         return thunkAPI.rejectWithValue("No items found!");
//       }
//     } catch (error) {
//       console.error("Error fetching items:", error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchPsychologists = createAsyncThunk(
//   "psychologists/getAll",
//   async ({ page, pageSize }, thunkAPI) => {
//     try {
//       const itemsRef = ref(database, "items");
//       const snapshot = await get(itemsRef);
//       console.log(snapshot.val());

//       if (snapshot.exists()) {
//         // Отримання всіх даних
//         const data = snapshot.val();
//         console.log("data", data);

//         // Додаємо унікальні ID для кожного запису
//         let dataWithIds = Object.keys(data).map((key) => ({
//           ...data[key],
//           id: nanoid(),
//         }));

//         // Логіка пагінації
//         const startIndex = (page - 1) * pageSize;
//         const paginatedData = dataWithIds.slice(
//           startIndex,
//           startIndex + pageSize
//         );

//         // Перевірка, чи є наступна сторінка
//         const hasNextPage = startIndex + pageSize < dataWithIds.length;

//         return { data: paginatedData, hasNextPage };
//       } else {
//         console.log("No items found!");
//         return thunkAPI.rejectWithValue("No items found!");
//       }
//     } catch (error) {
//       console.error("Error fetching items:", error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
