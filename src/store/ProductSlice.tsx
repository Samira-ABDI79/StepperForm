const initialState: ProductState = {
  products: [],
};

import { createSlice } from "@reduxjs/toolkit";
import { ProductState } from "./types";

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    createProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { createProduct } = productSlice.actions;

export default productSlice;
