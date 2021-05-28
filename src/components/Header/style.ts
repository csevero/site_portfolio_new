import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 10px;
`

export const HeaderLinks = styled.a`
  font-weight: 400;
  font-size: 20px;
  color: ${props => props.theme.colors.black_1};
  text-decoration: none;
  margin: 0 15px;
`
