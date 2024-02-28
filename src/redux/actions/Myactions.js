import { Add_task, CHANGE_FILTER, Done_task, Edit_task, Filter_task } from "../constans/actionstypes"


export const addtask=(task)=>{
    return {
        type: Add_task,
        payload : task

    }
}
export const done=(task)=>{
    return {
        type :  Done_task,
        payload : task

    }
}
export const edit=(task)=>{
    return {
        type :  Edit_task,
        payload : task

    }

}
// export const filter=(task)=>{
//     return {
//         type :  Filter_task,
//         payload : task

//     }
    
// }

export const changeFilter=(filter)=>{
    return {
        type :  CHANGE_FILTER,
        payload : filter

    }
    
}