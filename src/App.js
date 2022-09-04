import React, { useEffect , useState} from 'react';
import  {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import LogIn from './Components/LogIn';
import Layout from './Components/Layout';
import Registe from './Components/Registe';
import Menu from './Components/Menu';
import './App.css';
import Favourites from './Components/Favourites';
import Header from './Components/Header';
import Notification from './Components/Notification';
import { uiActions } from './store/ui-slice';
import { userActions } from './store/user-name';

let isFirstRender=0;

function App() {
  const dispatch=useDispatch()
  const note=useSelector(state=>state.ui.notifiction)
  const userList= useSelector(state=>state.userName.userList)
  const flag= useSelector( state => state.userName.flagCheck)
  const flagReg= useSelector(state=> state.userName.flagReg)
  const link=useSelector(state=>state.userName.userList[state.userName.choosenUser].name)
  
  const showMenu =()=>{
    if(flag==true){return <Header/>}
  }

useEffect(()=>{
  const fetchData=async()=>{
      const fetchHandler = async()=>{
        const res = await fetch ('https://shooping-app-19137-default-rtdb.firebaseio.com/usercart.json');
        const data= await res.json();
        return data;
      }
      try{
        debugger
        const userData=await fetchHandler();
        dispatch(userActions.replaceData(userData))
      }catch(err){
        dispatch(uiActions.shownotifi({
          open:true,
          type: 'error',
          message: 'sending failed failed failed'
        }))        
    }
  }
  fetchData()
},[dispatch])

  // useEffect(() =>{
  //   debugger
  //   const fetchData= async()=>{
  //     debugger
  //     return  (dispatch)=>{
  //       debugger
  //     const fetchHandle=async()=>{
  //       debugger
  //       const result=await fetch('https://shooping-app-19137-default-rtdb.firebaseio.com/usercart.json');
  //       const data=await result.json();
  //       return data;
  //     };      
  //     try{
  //       debugger
  //       const userData= fetchHandle();
  //       dispatch(userActions.replaceData(userData))
  //     }
  //     catch(err){
  //       dispatch(
  //         uiActions.shownotifi({
  //         open:true,
  //         type: 'error',
  //         message: 'sending failed'
  //       }));
  //     }
  //   }}
  //   fetchData()

  // },[isFirstRender,dispatch])


  useEffect(()=>{
    if(isFirstRender<2){
      isFirstRender++;
      return;
    }
    const sendRequst= async()=>{
      dispatch(uiActions.shownotifi({
        open:true,
        type: 'warning',
        message: 'sending request'
      }))
      const res=await fetch('https://shooping-app-19137-default-rtdb.firebaseio.com/usercart.json',{
        method: 'PUT',
        body: JSON.stringify(userList)
      });
      const data= await res.json()
      dispatch(uiActions.shownotifi({
        open:true,
        type: 'success',
        message: 'send to DB seccess'
      }))
    }
    sendRequst().catch(err=>{
      dispatch(uiActions.shownotifi({
        open:true,
        type: 'error',
        message: 'sending failed'
      }))
    });
  },[userList])

  return (
    <div className="App">
      {note &&<Notification type={note.type} message={note.message}/>}
      <BrowserRouter basename='/shopping-demo'>
      {showMenu()}
        <Routes>
          <Route path='/' element={flagReg ? <Registe/> : <LogIn/>}></Route>
          <Route path={`/home+${link}`} element={<Layout/>}></Route>
          <Route path={`/headphones+${link}`} element={<Layout/>}></Route>
          <Route path={`/cameras+${link}`} element={<Layout/>}></Route>
          <Route path={`/favorites+${link}`} element={<Favourites/>}></Route>


        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
