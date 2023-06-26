import { configureStore } from "@reduxjs/toolkit";
import FormSlice from "./FormSlice";
import productSlice from "./ProductSlice";
import LayoutSlice from "./LayoutSlice";

export const store = configureStore({
  reducer: {
    User: FormSlice,
    Layout: LayoutSlice,
    products: productSlice,
 

  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
