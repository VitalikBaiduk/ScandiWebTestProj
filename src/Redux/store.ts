import { combineReducers, createStore } from 'redux';

import { configureStore } from '@reduxjs/toolkit';
import { AllProductsReducer } from './Reducers/ReducerForAllProd';

export const store = configureStore({
    reducer: {
        allProd: AllProductsReducer,
    },
});

export default store;

//@ts-ignore
window.store = store;
export type RootState = ReturnType<typeof store.getState>;
