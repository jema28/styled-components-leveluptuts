import React from 'react'
import styled from 'styled-components'

const color = 'white'

const Button = styled.button`
  font-size: 1rem;
  color: ${color};
  padding: 5px 10px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  background: indigo;
`

const CancelButton = styled(Button)`
  background: tomato;
`

const AppWrapper = styled.div`
  header {
    &:hover {
      background: tomato;
      color: white;
    }
  }
  ${Button} {
    margin-bottom: 2rem;
  }
`

const App = () => (
  <AppWrapper>
    <header>
      <h1>Starter</h1>
    </header>

    <Button>Save</Button>
    <CancelButton>Cancel</CancelButton>
  </AppWrapper>
)

export default App
