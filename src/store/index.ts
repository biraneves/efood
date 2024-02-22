// Libraries
import { configureStore } from '@reduxjs/toolkit';

// Store
import cartReducer from './reducers/cart';

// Services
import api from '../services/api';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootReducer = ReturnType<typeof store.getState>;
