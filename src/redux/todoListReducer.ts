import {v1} from "uuid"
import { TaskType } from "../types/types"

const REMOVE_TASK_FROM_TODO = 'REMOVE-TASK-FROM-TODO'
const ADD_TASK = 'ADD-TASK'
const ADD_COMPLETED_TASK = 'ADD-COMPLETED-TASK'
const CLEAR_TASKS = 'CLEAR-TASKS'

let initialState = {
    todos: [],
    completedTasks: []
}

export const todoListReducer = (state: any = initialState, action: any) => {
    switch(action.type) {
        case REMOVE_TASK_FROM_TODO: {
            let newState = {...state}
            newState.todos = state.todos.filter((td: TaskType) => td.id !== action.id)
            return newState
        }
        case ADD_COMPLETED_TASK: {
            let newState = {...state}
            newState.completedTasks = state.todos
                .filter((td: TaskType) => td.id === action.id)
                .map((td: TaskType) => ({...td, isDone: true}))
            return {...state, completedTasks: [...state.completedTasks, newState.completedTasks[0]]}
        }
        case ADD_TASK: {
            let newTask = {id: v1(), title: action.title, isDone: false}
            return {...state, todos: [...state.todos, newTask]}
        }
        case CLEAR_TASKS: {
            return {...state, completedTasks: []}
        }
        default:
            return state
    }
}

export const removeTaskFromTodo = (id: string) => ({type: REMOVE_TASK_FROM_TODO, id})
export const addCompletedTask = (id: string) => ({type: ADD_COMPLETED_TASK, id})
export const addTask = (title: string) => ({type: ADD_TASK, title})
export const clearCompletedTasks = () => ({type: CLEAR_TASKS})
