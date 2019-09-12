import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  font-size: 2rem;
`

const Button = styled.button`
  font-size: 1rem;
  color: white;
  padding: 5px 10px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  background: ${({ type }) => (type === 'cancel' ? 'tomato' : 'indigo')};
`

const App = () => {
  return (
    <>
      <Heading>Starter</Heading>
      <Button>Save</Button>
      <Button type="cancel">Cancel</Button>
    </>
  )
}

export default App
