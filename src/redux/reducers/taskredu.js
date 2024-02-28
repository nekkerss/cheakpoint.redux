import { Add_task, CHANGE_FILTER, Done_task, Edit_task, Filter_task } from "../constans/actionstypes";

const intialState = {
    tasks: [
        { id: Math.random(), mytask: "gym", done: true },
        { id: Math.random(), mytask: "working", done: false }
    ],
    filter: "All",
}

const taskreducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case Add_task:
            return {
                ...state, tasks: [...state.tasks, { id: Math.random(), mytask: payload, done: false }]
            }
        case Done_task:
            const tog = state.tasks.map(task =>
                task.id === payload.id
                    ? { ...payload, done: !payload.done } : task
            )
            return {
                ...state, tasks: tog
            }
        case Edit_task:
            const edited = state.tasks.map(task =>
                task.id === payload.id
                    ? { id: payload.id, mytask: payload.mytask, done: payload.done } : task
            )
            return {
                ...state, tasks: edited
            }
        // case Filter_task:
        //     const filter = state.tasks.filter(task => task.done === true)
        //     return {
        //         ...state, tasks: filter
        //     }
        case CHANGE_FILTER:
            return {
                ...state, filter: payload
            }
        default:
            return state
    }
}
export default taskreducer