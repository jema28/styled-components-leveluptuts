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
  padding: 2px 2%;
  width: 100%;
  ${fixed()}
  ${elevation[2]}
`
