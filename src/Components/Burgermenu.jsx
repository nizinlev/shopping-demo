import React from 'react'
import { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { userActions } from '../store/user-name'
import './Menu.css'

function Burgermenu(props) {
  // const dispatch=useDispatch()
  // const [colorLine,setColorLine]= useState(false)

  // const showBurger=()=>{
  //   setColorLine(!colorLine)
  //   dispatch(userActions.showBurgerMenu())
  // }
  return (
    <div onClick={()=>{props.showBurger()}} className='burgerMain'>
    <div className='burgerLine' style={{backgroundColor: props.colorLine ? 'white': 'black'}}/>
    <div className='burgerLine' style={{backgroundColor: props.colorLine ? 'white': 'black'}}/>
    <div className='burgerLine' style={{backgroundColor: props.colorLine ? 'white': 'black'}}/>

    </div>
  )
}

export default Burgermenu