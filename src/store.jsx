// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import cartReducer from "./features/cartSlice";

// Load persisted state if available
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
  preloadedState: persistedState, // 👈 load old state
});

// Save to localStorage whenever state changes
store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
    cart: store.getState().cart,
  });
});
