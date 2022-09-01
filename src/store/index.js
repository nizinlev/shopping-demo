import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";
// import logInSlice from './Log-slice';
import userNameSlice from "./user-name";


const store= configureStore({
    reducer:{
        // log: logInSlice.reducer,
        cart: cartSlice.reducer,
        userName: userNameSlice.reducer,
        ui: uiSlice.reducer,

    }
})

export default store;