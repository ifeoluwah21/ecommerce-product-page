import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import storeSlice from "./store-slice";

const store = configureStore({
    reducer: { store: storeSlice.reducer, cart: cartSlice.reducer }
});

export default store;