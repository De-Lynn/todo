import { getTodoList } from '../redux/todoList-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addCompletedTask, removeTaskFromTodo } from '../redux/todoListReducer';
import { ChangeEvent } from 'react';
import { TaskType } from '../types/types';
import { StyledCheckbox, StyledList, StyledListItem, StyledTask } from '../styles/ActiveTodosStyles';

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
        <StyledListItem key={row.id}>
          <StyledCheckbox type="checkbox" checked={row.isDone} 
            onChange={onTaskChangeHandler} id={row.id}/>
          <StyledTask>{row.title}</StyledTask>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

export default ActiveTodos;
