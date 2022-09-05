import React from 'react'
import './LogIn.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {userActions} from '../store/user-name'
import { useRef } from 'react'


const Registe = () => {
    const myRef=useRef()
    const confirmRef=useRef()
    const [textAlert,setTextAlert]=useState('');
    const [pass,setPass]=useState('')
    const [newName,setNewName]=useState('')
    const [conPass,setConPass]=useState('')
    const dispatch=useDispatch();
    const addUserName=()=>{
        if(newName.length<4 || !/^[a-zA-Z]+$/.test(newName)){
            setTextAlert('Name should have 6 characters, letters only');
            myRef.current.value='';
            confirmRef.current.value='';
            console.log(myRef.current.value)
            return false
        }
        if(pass.length<6||conPass.length<6){
          setTextAlert('Password should be longer than 6 characters');
          myRef.current.value='';
          confirmRef.current.value='';
          return false
        }
        if(conPass!=pass){
          setTextAlert('Password and password verification do not match');
          myRef.current.value='';
          confirmRef.current.value='';
          return false          
        }
        dispatch(userActions.addUser({
          newName,
          pass
        }))
        dispatch(userActions.logOut())
    }
  return (
    <div className='mainDivLog'>
        <h2> sign in</h2>
        <p>name</p>
        <input onChange={(e)=>{setNewName(e.target.value)}} placeholder='name'/>
        <p>password</p>
        <input ref={myRef} onChange={(e)=>{setPass(e.target.value)}} placeholder='password'/>
        <p>comfirm password</p>
        <input ref={confirmRef} onChange={(e)=>{setConPass(e.target.value)}} placeholder='confirm password'/>
        <p style={{color:'red'}}>{textAlert}</p><br/>
        <button className='signIn' onClick={addUserName}>register now</button>
    </div>
  )
}

export default Registe