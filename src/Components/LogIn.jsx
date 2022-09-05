import React from 'react'
import './LogIn.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import {userActions} from '../store/user-name'
import { useNavigate } from 'react-router-dom'


export default function LogIn() {
  const nav= useNavigate()
  const [temp,setTemp]=useState('')
  const [tempPass,setTempPass]=useState('')
  const dispatch= useDispatch()
  const [name,setName]=useState('')
  const [pass,setPass]=useState('')
  const checkUsers=useSelector(state=>state.userName.userList)



  const checkDetails=(name,pass)=>{
    if(name.length<4 || !/^[a-zA-Z]+$/.test(name)){
      setTempPass("")
      setTemp('username should have 4 characters, letters only')
      return false
    }
    if(pass.length<6){
      setTempPass('password must be more then 6 letter') 
      return false;
    }
    else{
      const existentUser =checkUsers.find((user)=>name==user.name&&pass==user.password)
      if(existentUser){
        let index=existentUser.index
        dispatch(userActions.putDetails({
          index
        }))  
        nav(`/home+${name}`)
      }
      else{
        setTempPass("incorrect details")
      }
    }}

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
      <button className='signIn' onClick={()=>{checkDetails(name,pass)}}>log in</button>
      <p style={{color : 'red'}}>{temp}<br/>{tempPass}</p>
      <button className='btnLogIn' onClick={getSignInPage}> sign in now</button>
    </div>
  )
}
