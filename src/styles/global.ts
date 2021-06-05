import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box
}

body {
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black_2};
  font: 400 16px Rubik, sans-serif;
}
`

export const Container = styled.div`
  width: 100vw;
  max-width: 90vw;

  margin: 50px auto 0;
  padding: 0 30px;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    padding: 0;
    margin-top: 30px;
  }
`
