import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            name: `Autumn Limited Edition...`,
            id: "p1",
            initPrice: 250.00,
            discount: 50,
            get price() {
                return (this.initPrice - (this.discount / 100 * this.initPrice));
            }
        }
    ]
};

const storeSlice = createSlice({
    name: "store",
    initialState,
    reducers: {

    }
});

export const storeActions = storeSlice.actions;
export default storeSlice;