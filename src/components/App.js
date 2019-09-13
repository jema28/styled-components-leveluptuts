import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../Global'
import { Heading, Button, CancelButton } from '../elements'

const AppWrapper = styled.div`
  header {
    &:hover {
      background: tomato;
      color: white;
    }
  }
`

const App = () => (
  <AppWrapper>
    <GlobalStyle />
    <header>
      <Heading>Starter</Heading>
    </header>
    <Button>Save</Button>
    <CancelButton top="100">Cancel</CancelButton>
  </AppWrapper>
)

export default App
