//import './App.css';
// import './style.css';
// import './components/todoList.css';
import { getCompletedTasksCount, getTasksCount } from './redux/todoList-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, clearCompletedTasks } from './redux/todoListReducer';
import { Field, Form, Formik } from 'formik';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import AllTodos from './components/AllTodos';
import ActiveTodos from './components/ActiveTodos';
import CompletedTodos from './components/CompletedTodos';
import { styled } from 'styled-components';
import { useState } from 'react';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f1f1f1;
`

const StyledTitle = styled.h1`
  color: #c272a2;
  font-family: FreeMono, monospace;
  font-weight: 100;
  font-size: 50px;
`
type StyledFlexPropsType = {
  direction?: string,
  align?: string,
  justify?: string,
  margin?: string,
} 

const StyledFlex = styled.div<StyledFlexPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${props => props.margin || '0'};
  position: relative;
  //padding-bottom: 50px;
`

const StyledTodos = styled.div`
  width: 500px;
  min-height: 150px;
  background: white; 
`

const StyledInputWrapper = styled.div`
  height: 50px;
  border-bottom: solid #f1f1f1;
  display: flex;
  flex-direction: row;
  align-items: center;
`
function InputField({...props}) {
  return <Field {...props}/> //type="text" component='input' name='newTask' placeholder='Add task'
}

const StyledInput = styled(InputField)`
  height: 40px;
  width: 400px;
  border: 2px solid #c272a2;
  margin: 0 0 0 30px;
  padding: 4px 8px;
  font-size: 20px;
  font-style: italic;
  font-family: sans-serif;
`
type StyledButtonPropsType = {
  fontSize?: string,
  height?: string,
  width?: string,
  margin?: string,
} 
const StyledButton = styled.button<StyledButtonPropsType>`
  height: ${props => props.height || '40px'};
  width: ${props => props.width || '40px'};
  margin: ${props => props.margin || '0'};
  border: none;
  background: #c272a2;
  font-size: ${props => props.fontSize || '20px'};
  color: white;
  cursor: pointer;
  font-family: sans-serif;
`

const StyledTodoBottom = styled.div`
  background: white;
  height: 50px;
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  //margin-bottom: 50px;
  position: absolute;
  //bottom: 50px;
  border-top: solid #f1f1f1;
`

const StyledNav = styled.div`
  width: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

function Navlink({...props}) {
  return <NavLink {...props} to={props.to}/>
} 

const StyledNavlink = styled(Navlink)`
  text-decoration: none;
  color: #787376;
  font-family: sans-serif;
  font-size: 14px;
  &:active, &:hover {
    font-weight: bold;
  }
  &.active{
    //border: 2px solid #c272a2;
    //border-radius: 4px;
    //padding: 2px;
    font-weight: bold;
  }
`
const StyledTasksCount = styled.span`
  color: #787376;
  font-family: sans-serif;
  font-size: 14px;
`

const NoTasksDiv = styled.div`
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  font-family: sans-serif;
  color: #787376;
`

function App() {
  const dispatch = useDispatch()
  const tasksLeft = useSelector(getTasksCount)
  const completedCount = useSelector(getCompletedTasksCount)
  // const [activeLink, setActiveLink] = useState(1)
  // const navMenu = document.getElementById('nav-menu')
  // const links = navMenu?.getElementsByTagName('NavLink')

  // for (let i=0; links?.length; i++) {
  //   if (links[i].to === window.location.href) {
  //     links[i].classList.add('active')
  //     break
  //   }
  // }

  const onAddClickHandler = (values: { newTask: string; }, actions: any) => {
    dispatch(addTask(values.newTask))
    actions.resetForm({values: {newTask: ''}})
  }

  const onClearClickHandler = () => {
    dispatch(clearCompletedTasks())
  }

  // const onLinkClick = (e: React.MouseEvent<HTMLSpanElement>) => {

  // }

  return (
    <BrowserRouter>
      <AppWrapper className="App">
        <StyledFlex align='center'>
          <StyledTitle className='app-title'>Just do it.</StyledTitle> 
          <StyledTodos className='todo-app'>

            {/* form for adding a new task */}
            <StyledInputWrapper>
              <Formik
                initialValues={{newTask: ''}}
                onSubmit={onAddClickHandler}
              >
                <Form>
                  <StyledInput type="text" component={'input'} name='newTask' placeholder='Add task'/>
                  <StyledButton margin='0 30px 0 0' type='submit' className='light-button'>+</StyledButton>
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
