import React from 'react'
import './Menu.css'

function Burgermenu(props) {
  return (
    <div onClick={()=>{props.showBurger()}} className='burgerMain'>
    <div className='burgerLine' style={{backgroundColor: props.colorLine ? 'white': 'black'}}/>
    <div className='burgerLine' style={{backgroundColor: props.colorLine ? 'white': 'black'}}/>
    <div className='burgerLine' style={{backgroundColor: props.colorLine ? 'white': 'black'}}/>

    </div>
  )
}

export default Burgermenu