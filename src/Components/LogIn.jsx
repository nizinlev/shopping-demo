import React, { useEffect } from 'react'
import './LogIn.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import {userActions} from '../store/user-name'
import { useNavigate } from 'react-router-dom'

export default function LogIn() {
  const nav= useNavigate()
  const textCheck= useSelector(state=>state.userName.logInAlert)
  const [temp,setTemp]=useState('')
  const [tempPass,setTempPass]=useState('')
  const dispatch= useDispatch()
  const [name,setName]=useState('')
  const [pass,setPass]=useState('')
  const nextPage= (name,pass)=>{
    dispatch(userActions.checkUser({
      name,
      pass
    }))
  }
  const checkDetails=()=>{
    if(name.length<4 || !/^[a-zA-Z]+$/.test(name)){
      setTemp('user name contain 4 letter - only letters')
    }
    if(pass.length<6){
      setTempPass(' password mut be more then 6') 
    }
    else{
      nextPage(name,pass);
      setTempPass(textCheck);
      nav(`/home+${name}`)
    }
  }
  const getSignInPage=(e)=>{
    e.preventDefault();
    dispatch(userActions.signIn())
  }
  return (
    <div className='mainDivLog'>
      <h1>welcome</h1>
      <h3>name</h3>
      <input onChange={(e)=>{setName(e.target.value);setTemp('')}} placeholder='Enter your name'/>
      <h3>password</h3>
      <input type='password' onChange={(e)=>{setPass(e.target.value);setTempPass('')}} placeholder='Enter your password'/><br/>
      <button className='btnLogIn' onClick={checkDetails}>log in</button>
      <p style={{color : 'red'}}>{temp}<br/>{textCheck}</p>
      <a onClick={getSignInPage}> sign in now</a>
    </div>
  )
}
