import React from 'react'
import styled from 'styled-components'
import { Heading } from '../elements'
import { purple, elevation, fixed } from '../utilities'

export const Header = ({ className }) => (
  <header className={className}>
    <Heading>Starter</Heading>
  </header>
)

export default styled(Header)`
  background: ${purple};
  padding: 10px 5%;
  ${fixed({ x: 0, y: 0 })}
  ${elevation[2]}
`
