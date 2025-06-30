import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  selected: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCartFromLocalStorage: (state) => {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("cart");
        state.items = stored ? JSON.parse(stored) : [];
        state.selected = state.items.map((item) => item.id);
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
      state.selected = state.items.map((item) => item.id);
    },

    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      state.selected = state.selected.filter((sid) => sid !== id);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) item.quantity = quantity;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items = [];
      state.selected = [];
      localStorage.setItem("cart", JSON.stringify([]));
    },

    toggleSelectItem: (state, action) => {
      const id = action.payload;
      state.selected = state.selected.includes(id)
        ? state.selected.filter((itemId) => itemId !== id)
        : [...state.selected, id];
    },

    selectAllItems: (state) => {
      state.selected = state.items.map((item) => item.id);
    },

    deselectAllItems: (state) => {
      state.selected = [];
    },

    selectBySeller: (state, action) => {
      const seller = action.payload;
      const sellerItemIds = state.items
        .filter((item) => item.seller === seller)
        .map((item) => item.id);

      const allSelected = sellerItemIds.every((id) =>
        state.selected.includes(id)
      );

      state.selected = allSelected
        ? state.selected.filter((id) => !sellerItemIds.includes(id))
        : [...new Set([...state.selected, ...sellerItemIds])];
    },
  },
});

export const {
  loadCartFromLocalStorage,
  addToCart,
  removeItem,
  updateQuantity,
  clearCart,
  toggleSelectItem,
  selectAllItems,
  deselectAllItems,
  selectBySeller,
} = cartSlice.actions;

export default cartSlice.reducer;
