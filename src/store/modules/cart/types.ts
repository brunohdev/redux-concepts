export enum ActionTypes {
  addProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
  addProductToCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
  addProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE',
}

export type Product = {
  id: number;
  title: string;
  price: number;
}

export type CartItem = {
  product: Product;
  quantity: number;
}

export type CartState = {
  items: CartItem[];
  failedStockCheck: number[];
}
