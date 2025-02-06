import { configureStore } from "@reduxjs/toolkit";
import psychologistsReducer from "./psychologists/slice";
import authReducer from "./auth/slice";
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

const psychologistsPersistConfig = {
  key: "psychologists",
  storage,
  whitelist: ["items"],
};

const persistedPsychologistsReducer = persistReducer(
  psychologistsPersistConfig,
  psychologistsReducer
);

export const store = configureStore({
  reducer: {
    psychologists: persistedPsychologistsReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

initializeAuthListener(store.dispatch);

export const persistor = persistStore(store);
