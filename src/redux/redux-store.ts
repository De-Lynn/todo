import { useDispatch } from 'react-redux'
import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { todoListReducer } from './todoListReducer'

const rootReducer = combineReducers({
    todoList: todoListReducer,
})

const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store