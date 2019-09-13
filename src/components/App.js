import React from 'react'
import styled, { css } from 'styled-components'

const sizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560
}

const device = Object.keys(sizes).reduce((acc, cur) => {
  acc[cur] = `(min-width: ${sizes[cur]}px)`
  return acc
}, {})

//  CSS Helper
const fixedTop = css`
  position: fixed;
  top: ${({ top }) => top + 'px'};
  left: 0;
`

const Button = styled.button`
  font-size: 1rem;
  color: white;
  padding: 5px 10px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  background: indigo;
`

const CancelButton = styled(Button)`
  background: tomato;
  ${fixedTop}
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
  @media ${device.laptop} {
    background: red;
  }
`

const App = () => (
  <AppWrapper>
    <header>
      <h1>Starter</h1>
    </header>
    <Button>Save</Button>
    <CancelButton top="100">Cancel</CancelButton>
  </AppWrapper>
)

export default App
