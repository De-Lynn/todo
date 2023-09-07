import styled from "styled-components"
import { StyledButtonPropsType, StyledFlexPropsType } from "../types/types"
import { InputField, Navlink } from "../App"

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f1f1f1;
`

export const StyledTitle = styled.h1`
  color: #c272a2;
  font-family: FreeMono, monospace;
  font-weight: 100;
  font-size: 50px;
`

export const StyledFlex = styled.div<StyledFlexPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${props => props.margin || '0'};
  position: relative;
`

export const StyledTodos = styled.div`
  width: 500px;
  min-height: 150px;
  background: white; 
`

export const StyledInputWrapper = styled.div`
  height: 50px;
  border-bottom: solid #f1f1f1;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const StyledInput = styled(InputField)`
  height: 40px;
  width: 400px;
  border: 2px solid #c272a2;
  margin: 0 0 0 30px;
  padding: 4px 8px;
  font-size: 20px;
  font-style: italic;
  font-family: sans-serif;
`

export const StyledButton = styled.button<StyledButtonPropsType>`
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

export const StyledTodoBottom = styled.div`
  background: white;
  height: 50px;
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  position: absolute;
  border-top: solid #f1f1f1;
`

export const StyledNav = styled.div`
  width: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const StyledNavlink = styled(Navlink)`
  text-decoration: none;
  color: #787376;
  font-family: sans-serif;
  font-size: 14px;

  &:active, &:hover {
    font-weight: bold;
  }

  &.active{
    font-weight: bold;
  }
`
export const StyledTasksCount = styled.span`
  color: #787376;
  font-family: sans-serif;
  font-size: 14px;
`

export const NoTasksDiv = styled.div`
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  font-family: sans-serif;
  color: #787376;
`