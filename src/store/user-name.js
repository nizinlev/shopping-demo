import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const userNameSlice= createSlice({
    name: 'userName',
    initialState: {
        userList:[
        {name:'aaaa',password:'123456',cartList:[],index: 0,totalQuantity: 0,totalPrice: 0,userFavour:[],},
        {name:'bbbb',password:'111111',cartList:[],index: 1,totalQuantity: 0,totalPrice: 0,userFavour:[],}],
        chosenUser: 0,
        flagCheck:false,
        flagReg: false,
        logInAlert:false,
        showCart: false,
        typeItems: 'home',
        showBurger: 'none',
    },
    reducers: {
        replaceData(state,action){
            state.userList=action.payload;
            for(let i=0;i<state.userList.length;i++){
                if(!state.userList[i].userFavour){
                    state.userList[i].userFavour=[];
                }
                if(!state.userList[i].cartList){
                    state.userList[i].cartList=[];
                }                  
            }

        },
        showBurgerMenu(state,action){
            if(state.showBurger=='none'){
                state.showBurger='flex'
            }
            else state.showBurger='none'
        },
        addUser(state,action){
            const newUserName = action.payload;
            state.userList.push({
                name: newUserName.newName,
                password: newUserName.pass,
                cartList:[],
                index: state.userList.length,
                totalQuantity: 0,
                totalPrice: 0,
                userFavour:[],
            })
        },
        putDetails(state,action){
                state.chosenUser=action.payload.index
                state.flagCheck=true;
                state.logInAlert=false
        },
        signIn(state){
            state.flagReg=true
        },
        logOut(state){
            state.flagReg=false
            state.flagCheck=false;
        },
        addToCart(state,action){
            const newItem= action.payload;
            const existingItem= state.userList[state.chosenUser].cartList.find((item)=>item.name==newItem.name)
            if(existingItem){
                existingItem.quantity+=1;
                existingItem.totalPrice += newItem.price;
            }
            else{
                state.userList[state.chosenUser].cartList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1, 
                    totalPrice: newItem.price,
                    name: newItem.name,
                })
                
            }
            state.userList[state.chosenUser].totalQuantity++;
            state.userList[state.chosenUser].totalPrice += newItem.price;
        },
        addToFavor(state,action){
            const newItemFav=action.payload;
            const existingItem= state.userList[state.chosenUser].userFavour.find((item)=>item.name==newItemFav.name)
            if(existingItem){
                state.userList[state.chosenUser].userFavour=state.userList[state.chosenUser].userFavour.filter((item)=>item.name!==newItemFav.name)
            }
            else{
                state.userList[state.chosenUser].userFavour.push({
                    id: newItemFav.id,
                    price: newItemFav.price,
                    name: newItemFav.name,
                    flagFav: 'yellow'
    
            })}},
        changeType(state,action){
            state.typeItems=action.payload
        },
        removeFromCart(state,action){
            const id=action.payload
            const existingItem = state.userList[state.chosenUser].cartList.find((item)=>item.name==id.name);
            if(existingItem.quantity===1){
                state.userList[state.chosenUser].cartList=state.userList[state.chosenUser].cartList.filter((item)=>item.name!==id.name)
            }
            else{
                existingItem.quantity--;
                existingItem.totalPrice-= existingItem.price;
            }
            state.userList[state.chosenUser].totalQuantity--;
            state.userList[state.chosenUser].totalPrice -= id.price;
        },
        setShowCart(state){
            state.showCart=!state.showCart;
        },
        
    }
})


export const userActions= userNameSlice.actions;
export default userNameSlice;


