import React from 'react'
import './ItemForCartShow.css'
import { useSelector } from 'react-redux'
import ItemForCartShow from './ItemForCartShow'

const CartShow = () => {
    const itemList=useSelector(state=>state.userName.userList[state.userName.choosenUser].cartList)
  return (
    <div className='mainCartDiv'>
        <h2>my cart</h2> 
        <ul className='il'>    
            {itemList.map((item)=>{
                return(
                    <il >
                        {" "}
                        <ItemForCartShow 
                        name={item.name} 
                        price={item.price}
                        quantity={item.quantity}
                        total={item.totalPrice}/> 
                        {" "}
                    </il>)
                
            })}
        </ul>
        
    </div>
  )
}

export default CartShow