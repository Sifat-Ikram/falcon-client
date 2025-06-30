import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCartFromLocalStorage: (state) => {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("cart");
        state.items = stored ? JSON.parse(stored) : [];
      }
    },
    addToCart: (state, action) => {
      const { id, color, size } = action.payload;
      const existing = state.items.find(
        (item) => item.id === id && item.color === color && item.size === size
      );

      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeFromCart: (state, action) => {
      state.items.splice(action.payload, 1);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    updateQuantity: (state, action) => {
      const { index, quantity } = action.payload;
      state.items[index].quantity = quantity;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const {
  loadCartFromLocalStorage,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
