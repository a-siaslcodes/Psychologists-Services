import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";
import { setUser, clearUser } from "./slice";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password, name }, { rejectWithValue }) => {
    // const auth = getAuth();
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
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

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
          })
        );
      } else if (!user && currentUser) {
        dispatch(clearUser());
      }
    });
  };
};

// onAuthStateChanged(auth, (user) => {
//   console.log("user status changed", user);
// });
