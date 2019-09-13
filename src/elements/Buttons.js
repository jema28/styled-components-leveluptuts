import styled from 'styled-components'
import { lighten } from 'polished'
import { purple, elevation } from '../utilities'

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
    background: ${lighten(0.1, purple)};
    ${elevation[2]};
  }

  ${({ size }) => {
    if (size === 'small') {
      return `font-size: 0.5rem`
    }
  }}

  ${({ type }) => {
    if (type === 'cancel') {
      return `
      background: tomato;
      &:hover {
        background: ${lighten(0.1, 'tomato')};
        ${elevation[2]};
      `
    }
  }}
`
