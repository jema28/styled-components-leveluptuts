import React from 'react'
import styled from 'styled-components'
import { Heading } from '../elements'

export const Header = ({ className }) => (
  <header className={className}>
    <Heading>Starter</Heading>
  </header>
)

export default styled(Header)`
  background: #524763;
  padding: 10px 5%;
`
