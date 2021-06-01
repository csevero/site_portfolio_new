import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  max-width: 90vw;

  margin: 50px auto 0;
  padding: 0 30px;
  display: flex;
  flex-direction: column;

  .projects {
    display: flex;
    flex-wrap: wrap;
  }

  @media(max-width: 800px) {
    padding: 0;
  }
`
