import { getCompletedTasksCount, getTasksCount } from './redux/todoList-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, clearCompletedTasks } from './redux/todoListReducer';
import { Field, Form, Formik } from 'formik';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import AllTodos from './components/AllTodos';
import ActiveTodos from './components/ActiveTodos';
import CompletedTodos from './components/CompletedTodos';
import { AppWrapper, StyledFlex, StyledTitle, StyledTodos, StyledInputWrapper, StyledInput, StyledButton, NoTasksDiv, StyledTodoBottom, 
  StyledTasksCount, StyledNav, StyledNavlink } from './styles/AppStyles';

export function InputField({...props}) {
  return <Field {...props}/>
}
export function Navlink({...props}) {
  return <NavLink {...props} to={props.to}/>
} 

function App() {
  const dispatch = useDispatch()
  const tasksLeft = useSelector(getTasksCount)
  const completedCount = useSelector(getCompletedTasksCount)

  const onAddClickHandler = (values: { newTask: string; }, actions: any) => {
    dispatch(addTask(values.newTask))
    actions.resetForm({values: {newTask: ''}})
  }

  const onClearClickHandler = () => {
    dispatch(clearCompletedTasks())
  }

  return (
    <BrowserRouter>
      <AppWrapper>
        <StyledFlex align='center'>
          <StyledTitle>Just do it.</StyledTitle> 
          <StyledTodos>

            {/* form for adding a new task */}
            <StyledInputWrapper>
              <Formik
                initialValues={{newTask: ''}}
                onSubmit={onAddClickHandler}
              >
                <Form>
                  <StyledInput type="text" component={'input'} name='newTask' placeholder='Add task'/>
                  <StyledButton margin='0 30px 0 0' type='submit'>+</StyledButton>
                </Form>
              </Formik>
            </StyledInputWrapper>
            {(tasksLeft+completedCount) === 0
              ? <NoTasksDiv>There will be tasks</NoTasksDiv>
              : /* routes */
              <div>
                <Routes>
                  <Route path='/' 
                    element={<AllTodos/>}>
                  </Route>
                  <Route path='/active'
                    element={<ActiveTodos/>}>
                  </Route>
                  <Route path='/completed'
                    element={<CompletedTodos/>}>
                  </Route>
                </Routes>
              </div>
            }

            {/* task navigation */}
            <StyledTodoBottom>
              <StyledTasksCount>{tasksLeft} tasks left</StyledTasksCount>
              <StyledNav>
                <span>
                  <StyledNavlink to='/'>All</StyledNavlink>
                </span>
                <span>
                  <StyledNavlink to='/active'>Active</StyledNavlink>
                </span>
                <span>
                  <StyledNavlink to='/completed'>Completed</StyledNavlink>
                </span>
              </StyledNav>

              {/* clear all completed tasks */}
              <StyledButton fontSize='14px' height='20px' width='110px' onClick={onClearClickHandler}>Clear completed</StyledButton>
            </StyledTodoBottom>
          </StyledTodos>
        </StyledFlex>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
