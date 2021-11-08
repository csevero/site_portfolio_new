import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 0;
  background: ${props => props.theme.colors.white};

  a {
    font-weight: 400;
    font-size: 18px;
    color: ${props => props.theme.colors.black_1};
    position: relative;
    text-decoration: none;
    margin: 0 15px;

    transition: all 0.2s;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: -30px;
      left: 45%;
      width: 5px;
      height: 0px;
      border-radius: 50px;
      background: ${props => props.theme.colors.blue_3};

      transition: all 0.5s;
    }

    &:hover {
      color: ${props => props.theme.colors.blue_2};

      &::after {
        height: 30px;
        transition: all 0.5s;
      }
    }
  }

  .active {
    color: ${props => props.theme.colors.blue_1};
    font-weight: 500;
    position: relative;

    transition: all 0.2s;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: -30px;
      left: 45%;
      width: 5px;
      height: 30px;
      border-radius: 100px;
      background: ${props => props.theme.colors.blue_3};
    }
  }
`
