import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  max-width: 90vw;

  margin: 50px auto 0;
  padding: 0 30px;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    padding: 0;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 800px) {
    .main-gif {
      display: none;
    }
  }
`

export const FirstSection = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 10px;
  }

  h2 {
    font-weight: 500;
    max-width: 400px;
  }

  span {
    font-weight: 500;
    font-size: 20px;
    margin-top: 20px;
  }

  a {
    text-decoration: none;
    color: initial;
    font-size: 18px;
    animation: pulse-text 2s ease-in-out infinite alternate;
  }

  .social-networks {
    margin-top: 20px;

    .links {
      display: flex;
      align-items: center;
      margin-top: 10px;

      a {
        width: 35px;
        height: 35px;
        margin: 0 10px;

        svg {
          width: 35px;
          height: 35px;
        }

        &:first-of-type {
          margin-left: 0;
        }
      }
    }
  }

  @keyframes pulse-text {
    to {
      color: ${props => props.theme.colors.black_2};
    }
    from {
      color: ${props => props.theme.colors.blue_1};
    }
  }
`
