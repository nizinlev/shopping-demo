import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Layout.css'
import {cartAction} from '../store/cart-slice'
import { userActions } from '../store/user-name';
import { useState } from 'react';



    const Product=({name,id,price,url})=>{
      const existItm=useSelector(state=>state.userName.userList[state.userName.choosenUser].userFavour.find(item=>item.name==name))
      const [favColor,setFavColor]=useState('black')
      const dispatch= useDispatch()
      
      const returnClr=()=>{
        debugger
        if(existItm){
          return existItm.flagFav
        }
        else return 'black'
      }
      const addTo=()=>{
        dispatch(userActions.addToCart({
          name,
          id,
          price
        }))
      }
      const addToFavourit=()=>{
        debugger
        if(existItm)setFavColor('black')
        else {setFavColor('yellow')}
        dispatch(userActions.addToFavour({
          name,
          id,
          price
        }));


      }
  return (
    <div className='product'>
      <div className='starDiv'> 
      <span class="material-symbols-outlined" style={{color:favColor }} onClick={addToFavourit}>grade</span>
      </div>
      <div >
        <img src={url} alt={'img'} className='img'/>
        <h2>{name}</h2>
        <p className='containerPro'>$ {price}</p>
        <button className='btnPro' onClick={addTo}>add to cart</button>
      </div>
    </div>
  )};
  export default  Product
