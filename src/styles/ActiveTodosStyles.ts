import styled from "styled-components"

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
