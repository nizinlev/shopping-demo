import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const userNameSlice= createSlice({
    name: 'userName',
    initialState: {
        userList:[
        {name:'aaaa',password:'123456',cartList:[],index: 0,totalQuantity: 0,totalPrice: 0,userFavour:[]},
        {name:'bbbb',password:'111111',cartList:[],index: 1,totalQuantity: 0,totalPrice: 0,userFavour:[]}],
        choosenUser: 0,
        flagCheck:false,
        flagReg: false,
        logInAlert:'',
        showCart: false,
        typeItems: 'home',
        showBurger: 'none',
    },
    reducers: {
        replaceData(state,action){
                state.userList=action.payload.userList
                state.choosenUser=action.payload. choosenUser
                state.flagCheck=action.payload.flagCheck
                state.flagReg=action.payload.flagReg
                state.logInAlert=action.payload.logInAlert
                state.showCart=action.payload.showCart
                state.typeItems=action.payload.typeItems
                state.showBurger=action.payload.showBurger
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
        checkUser(state,action){
            const userDetail= action.payload;
            const exsistenUser =state.userList.find((item)=>userDetail.name==item.name||userDetail.password==item.password)
            if(exsistenUser){
                state.choosenUser=exsistenUser.index
                state.flagCheck=true;
            }
            else{
                state.logInAlert='incurrect details'
                return false;
            }
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
            const existingItem= state.userList[state.choosenUser].cartList.find((item)=>item.name==newItem.name)
            if(existingItem){
                existingItem.quantity+=1;
                existingItem.totalPrice += newItem.price;
            }
            else{
                state.userList[state.choosenUser].cartList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1, 
                    totalPrice: newItem.price,
                    name: newItem.name,
                })
                
            }
            state.userList[state.choosenUser].totalQuantity++;
            state.userList[state.choosenUser].totalPrice += newItem.price;
        },
        addToFavour(state,action){
            debugger
            const newItemFav=action.payload;
            const existingItem= state.userList[state.choosenUser].userFavour.find((item)=>item.name==newItemFav.name)
            if(existingItem){
                state.userList[state.choosenUser].userFavour=state.userList[state.choosenUser].userFavour.filter((item)=>item.name!==newItemFav.name)
            }
            else{
                state.userList[state.choosenUser].userFavour.push({
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
            const existingItem = state.userList[state.choosenUser].cartList.find((item)=>item.name==id.name);
            if(existingItem.quantity===1){
                state.userList[state.choosenUser].cartList=state.userList[state.choosenUser].cartList.filter((item)=>item.name!==id.name)
            }
            else{
                existingItem.quantity--;
                existingItem.totalPrice-= existingItem.price;
            }
            state.userList[state.choosenUser].totalQuantity--;
            state.userList[state.choosenUser].totalPrice -= id.price;
        },
        setShowCart(state){
            state.showCart=!state.showCart;
        },
        
    }
})


export const userActions= userNameSlice.actions;
export default userNameSlice;


