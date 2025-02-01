import { configureStore } from "@reduxjs/toolkit";
import psychologistsReducer from "./psychologists/slice";
import authReducer from "./auth/slice";

export const store = configureStore({
  reducer: {
    psychologists: psychologistsReducer,
    auth: authReducer,
  },
});

export default store;
