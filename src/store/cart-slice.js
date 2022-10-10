import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalAmount: 0
};
const cartSlice = createSlice({
    name: `cart`,
    initialState,
    reducers: {
        addItem(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.amount = existingItem.amount + action.payload.amount;
                existingItem.totalPrice = existingItem.price * existingItem.amount;
            } else {
                state.items.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    amount: action.payload.amount,
                    totalPrice: +action.payload.price * +action.payload.amount
                });
            }

            state.totalAmount = state.items.reduce((acc, cur) => acc + cur.amount, 0);
        },
        removeItem(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            state.totalAmount = state.items.reduce((acc, cur) => acc + cur.amount, 0);
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;