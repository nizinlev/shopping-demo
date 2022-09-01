import { createSlice } from "@reduxjs/toolkit";

const uiSlice=createSlice({
    name: 'ui',
    initialState: {notifiction: null},
    reducers:{
        shownotifi(state,action){
            state.notifiction={
                message: action.payload.message,
                type: action.payload.type,
                open: action.payload.open
            }
        }
    }
})
export const uiActions=uiSlice.actions;
export default uiSlice;