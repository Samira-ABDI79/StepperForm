import { configureStore } from "@reduxjs/toolkit";
import FormSlice from "./FormSlice";
import productSlice from "./ProductSlice";

export const store = configureStore({
  reducer: {
    User: FormSlice,
    products: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
