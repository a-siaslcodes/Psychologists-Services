import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, ref, set, database, get } from "../../firebase";
import { setUser, clearUser } from "./slice";

import { setFavorites, clearFavorites } from "../favorites/slice";

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
      /// Set the user data at this location
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

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue, dispatch }) => {
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
        favorites = Object.values(snapshot.val());
      }

      dispatch(setFavorites(favorites));

      return {
        user: {
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          displayName: userCredential.user.displayName,
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

export const initializeAuthListener = createAsyncThunk(
  "auth/initializeAuthListener",
  async (_, { dispatch }) => {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          try {
            const userId = user.uid;
            const userRef = ref(database, `users/${userId}`);
            const snapshot = await get(userRef);

            let userData = {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
            };

            let favorites = [];
            if (snapshot.exists()) {
              const data = snapshot.val();
              userData = { ...userData, ...data };
              favorites = data.favorites ? Object.values(data.favorites) : [];
            }

            dispatch(setUser(userData));
            dispatch(setFavorites(favorites));
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        } else {
          dispatch(clearUser());
          dispatch(clearFavorites());
        }
        resolve();
      });
    });
  }
);
