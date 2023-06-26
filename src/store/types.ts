export interface Product {
  id?: number;
  name: string;
  price: number;
}

export interface ProductState {
  products: Product[];

}

export type ProductAction =
  | { type: "ADD_PRODUCT"; payload: Product }
  | { type: "GET_PRODUCTS"; payload: Product[] };
