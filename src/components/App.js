import React from 'react'
import GlobalStyle from '../Global'
import Header from '../layouts/Header'
import { Button } from '../elements'

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Button modifiers="small">Save</Button>
    <Button modifiers={['small', 'cancel']}>Cancel</Button>
  </>
)

export default App
