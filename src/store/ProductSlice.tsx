import { createSlice } from "@reduxjs/toolkit";
import { ProductState } from "./types";
import axios from "axios";

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    createProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

// export const { createProduct } = productSlice.actions;

export function createProduct(product: any) {
  return async (dispatch: any) => {
    dispatch({ type: "products/createProduct", payload: product });
    try {
      const response = await axios.post(
        "http://localhost:3004/products",
        product
      );
    } catch (error) {
      console.error(error);
    }
  };
}

export default productSlice;
