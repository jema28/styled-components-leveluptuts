/* eslint-disable no-unused-vars */

import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyle from '../Global'
import Header from '../layouts/Header'
import { Card, Button } from '../elements'

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <main
      css={`
        */ add styles */
      `}
    >
      <Card>
        <h2>Card Heading</h2>
        <Card.Button as="a" modifiers="cancel">
          Say Hello
        </Card.Button>
      </Card>
      <Button modifiers="small">Save</Button>
      <Button modifiers={['small', 'cancel']}>Cancel</Button>
    </main>
  </>
)

export default App
