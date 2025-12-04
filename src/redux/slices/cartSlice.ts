import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "@/redux/slices/productsSlice";

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  } catch {
    return [];
  }
}

function saveCart(cart: any) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

type CartItem = {
  productId: string;
  title: string;
  price: number;
  quantity: number;
};

type State = {
  items: CartItem[];
};

const initialState: State = { items: loadCart() };

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const existing = state.items.find(
        (i) => i.productId === action.payload.id
      );
      if (existing) existing.quantity++;
      else
        state.items.push({
          productId: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          quantity: 1,
        });
      saveCart(state.items);
    },
    updateQty(
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) {
      const item = state.items.find(
        (i) => i.productId === action.payload.productId
      );
      if (item) item.quantity = action.payload.quantity;
      state.items = state.items.filter((i) => i.quantity > 0);
      saveCart(state.items);
    },
  },
});

export const { addToCart, updateQty } = slice.actions;
export default slice.reducer;
