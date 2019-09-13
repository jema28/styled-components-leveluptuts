import React from 'react'
import GlobalStyle from '../Global'
import Header from '../layouts/Header'
import { Button } from '../elements'

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Button size="small">Save</Button>
    <Button type="cancel" top="20">
      Cancel
    </Button>
  </>
)

export default App
