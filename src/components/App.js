import React from 'react'
import GlobalStyle from '../Global'
import { Header } from '../layouts'
import { Button, CancelButton } from '../elements'

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Button>Save</Button>
    <CancelButton top="20">Cancel</CancelButton>
  </>
)

export default App
