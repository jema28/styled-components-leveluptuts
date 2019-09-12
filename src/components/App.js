import React from 'react'
import styled from 'styled-components'

const color = 'white'

const AppWrapper = styled.div`
  header {
    &:hover {
      background: tomato;
      color: white;
    }
  }
`

const Button = styled.button`
  font-size: 1rem;
  color: ${color};
  padding: 5px 10px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  background: ${({ type }) => (type === 'cancel' ? 'tomato' : 'indigo')};
`

const App = () => {
  return (
    <AppWrapper>
      <header>
        <h1>Starter</h1>
      </header>
      <Button>Save</Button>
      <Button type="cancel">Cancel</Button>
    </AppWrapper>
  )
}

export default App
