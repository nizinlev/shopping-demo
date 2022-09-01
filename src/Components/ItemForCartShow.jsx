import React from 'react'
import { userActions } from '../store/user-name';
import './ItemForCartShow.css'
import { useDispatch} from "react-redux";

const ItemForCartShow = ({price,quantity,total,name}) => {
  const dispatch=useDispatch();
  const deleteFromCart=()=>{
    dispatch(userActions.removeFromCart({
      name,quantity,price
    }))
  }
  const addQnt=()=>{
    dispatch(userActions.addToCart({
      name,price
    }))
  }
  return (
    <div className='ItemForCartShow'>
        <h2>{name}</h2>
        <h3>price: ${price}</h3><br/>
        <h3>qut: {quantity}</h3><br/>
        <h3>total: {total}</h3>
        <button className='btnList' onClick={addQnt}>+</button>
        <button className='btnList' onClick={deleteFromCart}>-</button>
    </div>
  )
}

export default ItemForCartShow