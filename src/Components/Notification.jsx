import React from 'react'
import {Alert} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../store/ui-slice'

function Notification({type,message}) {
    const dispatch=useDispatch
    const note=useSelector(state=>state.ui.notifiction)
    const handler=()=>{
        dispatch(uiActions.shownotifi({
            open:false
    }))
    }
  return (
    <div>
        {note.open && <Alert onClose={handler} severity={type}>{message}</Alert>}
    </div>
  )
}

export default Notification