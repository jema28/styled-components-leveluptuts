import React from 'react'
import styled from 'styled-components'
import { Heading } from '../elements'

export const Header = () => (
  <AppHeader>
    <Heading>Starter</Heading>
  </AppHeader>
)

const AppHeader = styled.header`
  background: #524763;
  padding: 10px 5%;
`
