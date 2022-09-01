import React from "react";
import './Header.css'
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cart-slice";
import {userActions} from '../store/user-name';

const CartIcon=()=>{
    const quantity = useSelector((state)=> state.userName.userList[state.userName.choosenUser].totalQuantity);
    const dispatch= useDispatch();
    const showCart=()=>{
        dispatch(userActions.setShowCart())
    }
    
    return(
        <div className="cartQty" onClick={showCart}>
            <h3 className="pCart"><span className="material-symbols-outlined">shopping_cart</span>{quantity} items</h3>
        </div>
    )
}
export default CartIcon;
