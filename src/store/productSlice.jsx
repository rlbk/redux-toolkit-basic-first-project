import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload;
    },
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export function getProducts() {
  return async function getProductsThunk(dispatch, getState) {
    const data = await fetch(`${import.meta.env.VITE_PRODUCTS_API}`);
    const result = await data.json();
    dispatch(fetchProducts(result));
  };
}
