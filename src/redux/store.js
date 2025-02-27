import { configureStore } from "@reduxjs/toolkit";
import psychologistsReducer from "./psychologists/slice";
import authReducer from "./auth/slice";
import { combineReducers } from "redux";

import favoritesReducer from "./favorites/slice";

import { initializeAuthListener } from "./auth/operations";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "psychologists",
  storage,
  whitelist: ["psychologists"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  psychologists: psychologistsReducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

initializeAuthListener(store.dispatch);

export const persistor = persistStore(store);
