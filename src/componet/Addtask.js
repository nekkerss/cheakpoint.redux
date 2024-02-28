import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtask, changeFilter, filter } from '../redux/actions/Myactions'

const Addtask = () => {
    const [task1, settask1] = useState("")
    const dispatch = useDispatch()
    const handle = () => {
        dispatch(addtask(task1))
        settask1("")
    }
    // const fil=()=>{
    //     dispatch(filter())
    // }
    const filterValue = useSelector(state => state.taskreducer.filter)
    console.log(filterValue);
    return (
        <div className='done'>
            <div>
                <input type="text" value={task1}
                    onChange={(e) => settask1(e.target.value)} />
                <button onClick={handle}> + </button>
                <button onClick={() => {dispatch(changeFilter("All"))}}>All</button>
                <button onClick={() => {dispatch(changeFilter("Done"))}}>done </button>
                <button onClick={() => {dispatch(changeFilter("Not Done"))}}>not done</button>
            </div>
        </div>
    )
}

export default Addtask