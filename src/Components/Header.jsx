import React from 'react'
import Cart from './Cart'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../store/user-name'
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';



const Header = () => {
  const nav=useNavigate()
  const userName= useSelector((state)=>state.userName.userList[state.userName.choosenUser].name)
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
        <h1>nice to see you {userName} - shooping</h1>
        </div>
        <div className='rigthHed'>
        <Cart/>
        <button className='button' onClick={backPage}>log out</button>
        </div>
    </div>
  )
}

export default Header