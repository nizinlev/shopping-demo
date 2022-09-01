import React from 'react'
import './Layout.css'
import { useSelector } from 'react-redux'
import Product from './Product'
import CartShow from './CartShow'
import Header from './Header'
import url from '../image/740-2.jpg'



export default function Layout() {
  const showCart= useSelector(state=>state.userName.showCart)
  const typeItems=useSelector(state=>state.userName.typeItems)
  const totalPrice= useSelector(state=>state.userName.userList[state.userName.choosenUser].totalPrice)
  const itemsArry= [{name:'MacBook',id:'1', price:25, type:'home',},
  {name:'Lenovo',id:'2', price:25, type:'home'},
  {name:'Dell',id:'3', price:25, type:'home'},
  {name:'HP',id:'4', price:25, type:'home'},
  {name:'Acer',id:'5', price:25, type:'home'},
  {name:'xauimi',id:'6', price:26, type:'headphones'},
  {name:'canon',id:'7', price:26, type:'cameras'},
]


  return (
    <div className='itemsMain'>
      <div className='itemsLayout'>
        {itemsArry.filter((item)=>item.type==typeItems).map((item)=>{
          return <Product url={url} name={item.name} id={item.id} price={item.price}/>
        })}
      </div>
      {showCart && <CartShow/>}
      <h2 className='totalP'>total :  {totalPrice} $<br/>
      <button className='btnBuy'>place order</button></h2>
    </div>
  )
}
