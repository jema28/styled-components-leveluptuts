import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { elevation } from '../utilities'

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: 0.5rem;
  `,
  cancel: () => `
    background: tomato;
  `
}

export const Button = styled.button`
  font-size: 1rem;
  color: white;
  padding: 5px 10px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  background: indigo;
  transition: 0.3s ease box-shadow;

  &:hover {
    ${elevation[2]};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`
