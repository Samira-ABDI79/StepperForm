import { configureStore } from "@reduxjs/toolkit";
import { formSlice } from "./formSlice";
const RootReducer = {
  form: formSlice.reducer,
};

const store = configureStore({
  reducer: RootReducer,
});

export default store;
