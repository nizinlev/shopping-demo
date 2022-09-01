import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { userActions } from '../store/user-name'
import './Menu.css';

function Rightmenu(props) {
  const dispatch=useDispatch()
  const link=useSelector(state=>state.userName.userList[state.userName.choosenUser].name)
  const changeType=(e)=>{
    dispatch(userActions.changeType(e))
    props.showBurger();
  }
  const showMenu=useSelector((state)=>state.userName.showBurger)
  const displayFlag=()=>{
    if( showMenu=='none')return 'none'
    else return 'flex'
  }


  return (
    <div className='optionMenu' style={{display: displayFlag()}}>
        <ul className='ulMenu' >
         <li className='liMenu'><Link to={`/home+${link}`}><h2 onClick={()=>changeType('home')}>home</h2></Link></li>
         <li className='liMenu'><Link to={`/headphones+${link}`}><h2 onClick={()=>changeType('headphones')}>headphones</h2></Link></li>
         <li className='liMenu'><Link to={`/cameras+${link}`}><h2 onClick={()=>changeType('cameras')}>cameras</h2></Link></li>
         <li className='liMenu'><Link to={`/favorites+${link}`} onClick={()=>{props.showBurger()}}><h2>my favorites</h2></Link></li>
        </ul>
    </div>
  )
}

export default Rightmenu