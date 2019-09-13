import styled from 'styled-components'
import { device } from '../utilities'

export const Heading = styled.h1`
  font-size: 1.5rem;
  @media ${device.laptop} {
    background: red;
  }
`
