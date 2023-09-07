import { getCompletedTasks } from '../redux/todoList-selectors';
import { useSelector } from 'react-redux';
import { TaskType } from '../types/types';
import { StyledList, StyledListItem } from '../styles/ActiveTodosStyles';
import { StyledCheckboxInput, StyledCheckboxDisplay, StyledComletedTask } from '../styles/CompletedTodosStyles';

function CompletedTodos() {
  const completedTasks = useSelector(getCompletedTasks)

  return (
    <StyledList className='todo-list'>
      {completedTasks && completedTasks.map((row: TaskType) => (
        <StyledListItem key={row.id}>
          <StyledCheckboxInput type="checkbox" checked={row.isDone} id={row.id}/>
          <StyledCheckboxDisplay htmlFor={row.id}></StyledCheckboxDisplay>
          
          <StyledComletedTask>{row.title}</StyledComletedTask>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

export default CompletedTodos;
