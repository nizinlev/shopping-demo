import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Layout.css'
import { userActions } from '../store/user-name';



    const Product=({name,id,price,url})=>{
      const existItm=useSelector((state=>state.userName.userList[state.userName.chosenUser].userFavour.find(item=>item.name==name)))
      console.log(existItm)
      const dispatch= useDispatch()
    
      const addTo=()=>{
        dispatch(userActions.addToCart({
          name,
          id,
          price
        }))
      }
      const addToFavorite=()=>{
        dispatch(userActions.addToFavor({
          name,
          id,
          price
        }));


      }
  return (
    <div className='product'>
      <div className='starDiv'> 
      <span class="material-symbols-outlined" style={{color:existItm ? 'yellow' : 'black' }} onClick={addToFavorite}>grade</span>
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
