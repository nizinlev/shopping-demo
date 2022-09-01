import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
        name: 'cart',
    initialState: {
        itemList:[],
        totalQuantity: 0, 
        totalPrice: 0,
        showCart: false,
    },
    reducers: {
        addToCart(state,action){
            const newItem= action.payload;
            const existingItem= state.itemList.find((item)=>item.name==newItem.name)
            if(existingItem){
                existingItem.quantity+=1;
                existingItem.totalPrice += newItem.price;
            }
            else{
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1, 
                    totalPrice: newItem.price,
                    name: newItem.name,
                })
                
            }
            state.totalQuantity++;
            state.totalPrice += newItem.price;
        },
        removeFromCart(state,action){
            const id=action.payload
            const existingItem = state.itemList.find((item)=>item.name==id.name);
            if(existingItem.quantity===1){
                state.itemList=state.itemList.filter((item)=>item.name!==id.name)
            }
            else{
                existingItem.quantity--;
                existingItem.totalPrice-= existingItem.price;
            }
            state.totalQuantity--;
            state.totalPrice -= id.price;
        },
        setShowCart(state){
            state.showCart=!state.showCart;
        },
    }
})
export const cartAction= cartSlice.actions;
export default cartSlice;