import React from 'react'
import './LogIn.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {userActions} from '../store/user-name'
import { useRef } from 'react'


const Registe = () => {
    const myRef=useRef()
    const [textAlert,setTextAlert]=useState('');
    const [pass,setPass]=useState('')
    const [newName,setNewName]=useState('')
    const [conPass,setConPass]=useState('')
    const dispatch=useDispatch();
    const addUserName=()=>{
        if(pass.length<6||newName.length<4 || !/^[a-zA-Z]+$/.test(newName)|| conPass!=pass){
            setTextAlert('error');
            myRef.current.value='';
            console.log(myRef.current.value)
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
        <input  onChange={(e)=>{setConPass(e.target.value)}} placeholder='confirm password'/>
        <p style={{color:'red'}}>{textAlert}</p><br/>
        <button onClick={addUserName}>register now</button>
    </div>
  )
}

export default Registe