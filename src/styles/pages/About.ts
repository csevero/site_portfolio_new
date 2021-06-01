import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  max-width: 90vw;
  margin: 50px auto 0;
  padding: 0 30px;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 20px;
  }

  @media (max-width: 800px) {
    justify-content: flex-start;
    padding: 0;
  }

  .about-infos {
    display: flex;

    img {
      width: 300px;
    }

    .infos {
      margin-left: 40px;
      max-width: 600px;

      span {
        font-weight: 700;
        font-size: 30px;
      }

      p {
        font-size: 20px;
        line-height: 25px;
      }

      .link {
        display: block;
        font-weight: 400;
        font-size: 18px;
        margin: 8px 0;

        &:nth-of-type(1) {
          margin-top: 20px;
        }

        a {
          text-decoration: none;
          color: initial;
          animation: pulse-text 2s ease-in-out infinite alternate;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .about-infos {
      flex-direction: column;
      .infos {
        margin: 10px 0;
        text-align: justify;
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
