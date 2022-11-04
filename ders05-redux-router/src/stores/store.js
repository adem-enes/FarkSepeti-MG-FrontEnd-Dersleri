import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./slices/counterSlice";
import productSlice from "../components/Product/productSlice";
import checkoutSlice from "./slices/checkoutSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productSlice,
    cardItems: checkoutSlice
  },
});
