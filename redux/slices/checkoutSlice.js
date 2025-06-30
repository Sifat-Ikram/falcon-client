import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    loadCheckoutFromLocalStorage: (state) => {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("checkout_items");
        state.items = stored ? JSON.parse(stored) : [];
      }
    },

    setCheckoutItems: (state, action) => {
      state.items = action.payload;
      localStorage.setItem("checkout_items", JSON.stringify(state.items));
    },

    clearCheckoutItems: (state) => {
      state.items = [];
      localStorage.removeItem("checkout_items");
    },
  },
});

export const {
  loadCheckoutFromLocalStorage,
  setCheckoutItems,
  clearCheckoutItems,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
