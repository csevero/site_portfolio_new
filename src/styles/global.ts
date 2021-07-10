import { createGlobalStyle } from 'styled-components'

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

textarea, input, button {
  font-family: Rubik, sans-serif;
}
`
