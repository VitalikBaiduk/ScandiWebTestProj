import {combineReducers, createStore} from "redux";
import {reducerForAllProd} from "./Reducers/ReducerForAllProd";

const rootReducer = combineReducers({
    reducerForAllProd: reducerForAllProd,
})

const store = createStore(rootReducer)

export default store;

//@ts-ignore
window.store = store

export type AppStoreType = ReturnType<typeof rootReducer>;

