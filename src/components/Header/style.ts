import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  .navbar-desktop {
    width: 100%;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    margin: 10px 0;
    background: var(--color-bg-primary);

    a {
      font-weight: 400;
      font-size: 18px;
      color: var(--color-text-primary);
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
        background: var(--color-blue-3);

        transition: all 0.5s;
      }

      &:hover {
        color: var(--color-blue-1);

        &::after {
          height: 30px;
          transition: all 0.5s;
        }
      }
    }

    .active {
      color: var(--color-blue-2);
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
        background: var(--color-blue-3);
      }
    }

    @media (max-width: 996px) {
      display: none;
    }
  }

  .navbar-mobile {
    display: none;

    .bx {
      width: 40px;
      height: 40px;

      position: fixed;
      right: 10px;

      z-index: 999;

      &::after,
      &::before {
        content: '';
        width: 75%;
        height: 2px;

        position: absolute;
        background: var(--color-text-primary);

        transition: all 0.5s;
      }

      &::after {
        top: 35%;
        left: 12%;
      }

      &::before {
        top: 57%;
        left: 12%;
      }
    }

    .bx-active {
      width: 36px;
      height: 36px;

      position: fixed;
      right: 10px;

      z-index: 999;

      &::after,
      &::before {
        content: '';
        position: absolute;
        top: 45%;

        background: $white;

        transition: all 0.5s;
      }

      &::after {
        transform: rotate(-135deg);
      }

      &::before {
        transform: rotate(315deg);
      }
    }

    @media (max-width: 996px) {
      display: flex;
    }
  }

  .menu-mobile {
    width: 100vw;
    height: 100vh;

    background: var(--color-bg-primary);

    position: fixed;
    top: 0;

    z-index: -10;
    opacity: 0;

    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: all 0.5s;

    a {
      font-weight: 400;
      font-size: 22px;
      color: var(--color-text-primary);
      position: relative;
      text-decoration: none;
    }

    div,
    a,
    button {
      margin: 20px 0;
    }

    @media (max-width: 996px) {
      display: flex;
    }
  }

  .active-menu-mobile {
    opacity: 1;
    z-index: 998;
  }
`
