import { getTodoList } from '../redux/todoList-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { TaskType, addCompletedTask, removeTaskFromTodo } from '../redux/todoListReducer';
import { ChangeEvent } from 'react';
import styled from 'styled-components';
// import './todoList.css'
// import './todoItem.css'

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: none;
`
export const StyledListItem = styled.li`
  display: grid;
  width: 500px;
  grid-template-columns: 40px auto;
  //gap: ;
  height: 50px;
  padding: 5px 30px;
  border-bottom: 1px solid #f1f1f1;
`

export const StyledCheckbox = styled.input`
 width: 40px;
 height: 40px;
`

export const StyledTask= styled.span`
  margin: 0 0 0 30px;
  height: 40px;
  font-size: 20px;
  font-family: sans-serif;
  line-height: 40px;
  vertical-align: middle;
  text-align: left;
`

function ActiveTodos() {
  const dispatch = useDispatch()
  const todoList = useSelector(getTodoList)

  const onTaskChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addCompletedTask(e.currentTarget.id))
    dispatch(removeTaskFromTodo(e.currentTarget.id))
  }
  
  return (
    <StyledList className='todo-list'>
      {todoList && todoList.map((row: TaskType) => (
        <StyledListItem key={row.id} className='todo-item'>
          <StyledCheckbox className='check-btn' type="checkbox" checked={row.isDone} 
            onChange={onTaskChangeHandler} id={row.id}/>
          {/* <label htmlFor={row.id}></label> */}
          <StyledTask className='todo-title'>{row.title}</StyledTask>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

export default ActiveTodos;
