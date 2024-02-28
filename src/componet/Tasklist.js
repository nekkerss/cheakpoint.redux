import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'
const Tasklist = ({tasks}) => {
    // filter valu from redux store
    const filterValue = useSelector(state => state.taskreducer.filter)

    // function to get new tasks list by filter valie
    const filterTasksBy = (tasks, filterValue) => {
        switch (filterValue) {
            case "Done":
                return tasks.filter(task => task.done)
            case "Not Done":
                return tasks.filter(task => !task.done)
            default:
                return tasks
        }
    }

    // affect new tasks list to the variable filteredTasks
    const filteredTasks = filterTasksBy(tasks, filterValue)
return (
    <div>
       {filteredTasks.map((task)=>{return <Task key={task.id} task={task}/>} )}
    </div>
)
}
export default Tasklist