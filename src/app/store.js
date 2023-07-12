import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from '../features/Products/ProductSlice';
import CartSlice from '../features/cart/CartSlice';

export const store = configureStore({
  reducer: {
    Products: ProductSlice,
    carts: CartSlice
  },
});
