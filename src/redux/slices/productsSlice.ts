import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import productsData from "@/data/products.json";
import { Product } from "@/type/Product";

type State = {
  items: Product[];
  search: string;
  category: string | null;
  page: number;
  pageSize: number;
};

const initialState: State = {
  items: productsData,
  search: "",
  category: null,
  page: 1,
  pageSize: 6,
};

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
      state.page = 1;
    },
    setCategory(state, action: PayloadAction<string | null>) {
      state.category = action.payload;
      state.page = 1;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const { setSearch, setCategory, setPage } = slice.actions;
export default slice.reducer;

export const selectFilteredProducts = (state: { products: State }) => {
  const { items, search, category, page, pageSize } = state.products;

  let filtered = items;

  if (category) filtered = filtered.filter((p) => p.category === category);
  if (search)
    filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );

  const start = (page - 1) * pageSize;
  return {
    products: filtered.slice(start, start + pageSize),
    total: filtered.length,
  };
};
