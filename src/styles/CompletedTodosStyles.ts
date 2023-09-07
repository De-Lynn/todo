import styled from "styled-components"
import { StyledCheckbox, StyledTask } from "./ActiveTodosStyles"
import checked from '../img/check-mark.png'

export const StyledComletedTask = styled(StyledTask)`
  text-decoration: line-through;
  opacity: 0.5;
`
export const StyledCheckboxDisplay = styled.label``

export const StyledCheckboxInput = styled(StyledCheckbox)`
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