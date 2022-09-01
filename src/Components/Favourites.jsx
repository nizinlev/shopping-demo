import React from 'react'
import './Layout.css'
import { useSelector } from 'react-redux'
import Product from './Product'
import CartShow from './CartShow'
import Header from './Header'
import url from '../image/740-2.jpg'

export default function () {
    const showCart= useSelector(state=>state.userName.showCart)
    const favList=useSelector(state=>state.userName.userList[state.userName.choosenUser].userFavour)
    return (
        <div className='itemsMain'>
          <div className='itemsLayout'>
            {favList.map((item)=>{
              return <Product url={url} name={item.name} id={item.id} price={item.price}/>
            })}
          </div>
          {showCart && <CartShow/>}
        </div>
      )
    }
