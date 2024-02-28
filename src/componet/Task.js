import React, { useState } from 'react'
import '../App.css';
import { useDispatch } from 'react-redux';
import { done, edit } from '../redux/actions/Myactions';

const Task = ({task}) => {
  const dispatch=useDispatch()
const [edite,setedite]=useState(false)
const[willedit,setwilledit]=useState(task.mytask)
const handle=()=>{
  const editetas={
    id :task.id,
    mytask :willedit,
    done :false
  }
  dispatch(edit(editetas))
  setedite(false)
}
  return (
    <div className={task.done ? 'done':null}>
      {
        edite ?  (<div><input type='text'
        value={willedit} 
        onChange={(e)=>setwilledit(e.target.value)}/>
        <button onClick={handle}>save</button>
        </div>
        
        ) : ( <p onClick={()=>dispatch(done(task))}>{task.mytask}<button onClick={()=>setedite(true)}>Edit</button></p> )
      }
   </div>
  )
}

export default Task