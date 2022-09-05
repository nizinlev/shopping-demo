import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import userNameSlice from "./user-name";


const store= configureStore({
    reducer:{
        userName: userNameSlice.reducer,
        ui: uiSlice.reducer,
    }
})

export default store;