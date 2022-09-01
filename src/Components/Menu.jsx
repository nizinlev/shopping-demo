import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { userActions } from '../store/user-name'
import './Menu.css';
import Burgermenu from './Burgermenu';
import Rightmenu from './Rightmenu';



const Menu = () => {
  const dispatch=useDispatch()
  const [colorLine,setColorLine]= useState(false)

  const showBurger=()=>{
    setColorLine(!colorLine)
    dispatch(userActions.showBurgerMenu())
  }
  
 
  return (
        <div className='mainMenu'>
          <Rightmenu showBurger={showBurger}  colorLine={colorLine}/>
          <Burgermenu showBurger={showBurger}  colorLine={colorLine}/>
        </div>
  )
}

export default Menu