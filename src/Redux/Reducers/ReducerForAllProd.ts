import { createSlice } from '@reduxjs/toolkit';

let sliceForAllProducts = createSlice({
    name: 'allProd',
    initialState: {
        products: [],
    },
    reducers: {
        setProducts: (state: any, action: any) => {
            state.products = action.payload;
            console.log(state.products);
        },
    },
});

export const { setProducts } = sliceForAllProducts.actions;
export const AllProductsReducer = sliceForAllProducts.reducer;
