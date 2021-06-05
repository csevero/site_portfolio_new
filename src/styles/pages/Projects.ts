import styled from 'styled-components'

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
