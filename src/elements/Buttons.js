import styled from 'styled-components'
import { fixedTop } from '../utilities'

export const Button = styled.button`
  font-size: 1rem;
  color: white;
  padding: 5px 10px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  background: indigo;
`

export const CancelButton = styled(Button)`
  background: tomato;
  ${fixedTop}
`
