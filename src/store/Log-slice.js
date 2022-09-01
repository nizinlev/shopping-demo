import { createSlice } from "@reduxjs/toolkit";


const logInSlice=createSlice({
    name: 'log',
    initialState: {isLoggedIn: false},
    reducers:{
        logIn(state){
            state.isLoggedIn= true;
        },
        logOut(state){
            state.isLoggedIn= false;
        },
    }
})

export const logAction= logInSlice.actions;
export default logInSlice;