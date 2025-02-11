import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./api/services/pokemonApi.ts";
import { uiSlice } from "./slices/uiSlice.ts";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
