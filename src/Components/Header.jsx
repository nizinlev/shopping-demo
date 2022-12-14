import React from 'react'
import Cart from './Cart'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../store/user-name'
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';



const Header = () => {
  const nav=useNavigate()
  const userName= useSelector((state)=>state.userName.userList[state.userName.chosenUser].name)
    const dispatch= useDispatch()
    const backPage= (e)=>{
      e.preventDefault();
      nav('/')
      dispatch(userActions.logOut())
    }
  
  return (
    <div className='headDiv'>
      <div>
        <Menu/>
        <h1>Nice to see you {userName} - good trip</h1>
        </div>
        <div className='rightHed'>
        <Cart/>
        <button className='button' onClick={backPage}>log out</button>
        </div>
    </div>
  )
}

export default Header