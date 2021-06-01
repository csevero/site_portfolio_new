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
  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;

    .button-github {
      font-size: 18px;
      padding: 10px 25px;
      font-weight: 500;
      background: ${props => props.theme.colors.green};
    }
  }
`
