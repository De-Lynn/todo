import { getCompletedTasks } from '../redux/todoList-selectors';
import { useSelector } from 'react-redux';
import { TaskType } from '../redux/todoListReducer';
import { StyledCheckbox, StyledList, StyledListItem, StyledTask } from './ActiveTodos';
import styled from 'styled-components';
import checked from '../img/check-mark.png'
// import './todoList.css'
// import './todoItem.css'

const StyledComletedTask = styled(StyledTask)`
  text-decoration: line-through;
  opacity: 0.5;
`

const StyledCheckboxDisplay = styled.label``

const StyledCheckboxInput = styled(StyledCheckbox)`
  display: none;
  & + ${StyledCheckboxDisplay} {
    width: 40px;
    height: 40px;
    border: 2px solid #e1e1e1;
    background-size: 40px 40px;
    background-image: url('${checked}');
    opacity: 0.5;
  }

`

function CompletedTodos() {
  const completedTasks = useSelector(getCompletedTasks)

  return (
    <StyledList className='todo-list'>
      {completedTasks && completedTasks.map((row: TaskType) => (
        <StyledListItem key={row.id} className='todo-item completed'>
          <StyledCheckboxInput className='check-btn' type="checkbox" checked={row.isDone} id={row.id}/>
          <StyledCheckboxDisplay htmlFor={row.id}></StyledCheckboxDisplay>
          <StyledComletedTask className='todo-title'>{row.title}</StyledComletedTask>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

export default CompletedTodos;
