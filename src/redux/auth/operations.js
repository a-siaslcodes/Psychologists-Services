import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, ref, set } from "../../firebase";
import { setUser, clearUser } from "./slice";
import { database } from "../../firebase";
import { get, remove, update } from "firebase/database";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      /// create user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      /// update user to add name
      await updateProfile(user, {
        displayName: name,
      });

      const userRef = ref(database, "users/" + user.uid);
      // Set the user data at this location
      await set(userRef, {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      });

      /// return user data

      return {
        user: {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        },
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const loginUser = createAsyncThunk(
//   "auth/loginUser",
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );

//       return {
//         user: {
//           uid: userCredential.user.uid,
//           email: userCredential.user.email,
//           displayName: userCredential.user.displayName,
//         },
//       };
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userId = userCredential.user.uid;

      const favoritesRef = ref(database, `users/${userId}/favorites`);
      const snapshot = await get(favoritesRef);

      let favorites = [];
      if (snapshot.exists()) {
        favorites = Object.values(snapshot.val()); // Перетворюємо об'єкт у масив
      }

      return {
        user: {
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          displayName: userCredential.user.displayName,
          favorites,
        },
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  "auth/logOutUser",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const initializeAuthListener = () => {
  return (dispatch, getState) => {
    onAuthStateChanged(auth, (user) => {
      const { user: currentUser } = getState().auth;

      if (user && (!currentUser || currentUser.uid !== user.uid)) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            favorites: user.favorites || [],
          })
        );
      } else if (!user && currentUser) {
        dispatch(clearUser());
      }
    });
  };
};

// ----------------------------------------------------------- add and remove favs

export const addFavorite = createAsyncThunk(
  "auth/addFavorite",
  async ({ userId, psychologistId }, { rejectWithValue }) => {
    try {
      // 1. Отримуємо весь список психологів з `items`
      const itemsRef = ref(database, "items");
      const snapshot = await get(itemsRef);

      if (!snapshot.exists()) {
        throw new Error("No psychologists found!");
      }

      const itemsArray = snapshot.val(); // Масив об'єктів (0, 1, 2...)

      // 2. Знаходимо психолога за `id`
      const psychologist = Object.values(itemsArray).find(
        (psy) => psy.id === psychologistId
      );

      if (!psychologist) {
        throw new Error("Psychologist not found!");
      }

      // 3. Додаємо психолога в `favorites`
      const userFavoritesRef = ref(database, `users/${userId}/favorites`);
      await update(userFavoritesRef, {
        [psychologistId]: psychologist, // Додаємо знайдені дані
      });

      return psychologist; // Повертаємо доданого психолога для оновлення стану
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeFavorite = createAsyncThunk(
  "auth/removeFavorite",
  async ({ userId, psychologistId }, { rejectWithValue }) => {
    try {
      // 1. Посилання на психолога у favorites
      const favoriteRef = ref(
        database,
        `users/${userId}/favorites/${psychologistId}`
      );

      // 2. Перевіряємо, чи цей психолог є у favorites
      const snapshot = await get(favoriteRef);
      if (!snapshot.exists()) {
        throw new Error("Psychologist is not in favorites!");
      }

      // 3. Видаляємо психолога
      await remove(favoriteRef);
      return psychologistId; // Повертаємо ID видаленого психолога для оновлення стану
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getFavorites = createAsyncThunk(
  "auth/getFavorites",
  async (userId, { rejectWithValue }) => {
    try {
      // 1. Отримуємо список улюблених психологів користувача з бази даних
      const userFavoritesRef = ref(database, `users/${userId}/favorites`);
      const snapshot = await get(userFavoritesRef);

      if (!snapshot.exists()) {
        throw new Error("No favorites found!");
      }

      const favorites = snapshot.val(); // Отримуємо улюблених психологів

      return favorites; // Повертаємо список улюблених психологів для оновлення стану
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
