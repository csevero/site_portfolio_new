import styled, { css } from 'styled-components'

interface IButtonProps {
  width?: string
  backgroundColor?: string
}

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

export const ButtonStyleCSS = css<IButtonProps>`
  width: ${props => (props.width ? props.width : '')};
  text-decoration: none;
  border-radius: 10px;
  font-weight: 500;
  padding: 10px 25px;
  border: none;
  font-size: 18px;
  color: var(--color-text-white);
  background: ${props => props.backgroundColor || 'var(--color-blue-2)'};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover,
  &:active {
    filter: brightness(0.8);
  }
`

export const AnchorStyleCSS = css`
  text-decoration: none;
  color: initial;
  animation: pulse-text 2s ease-in-out infinite alternate;
  position: relative;

  &::after {
    content: '';
    width: 0;
    height: 1px;
    background: var(--color-blue-1);
    position: absolute;
    left: 0;
    bottom: 0;
    transition: all 0.2s;
  }

  &:hover {
    &::after {
      width: 100%;
      transition: all 0.4s;
    }
  }

  @keyframes pulse-text {
    to {
      color: var(--color-text-secondary);
    }
    from {
      color: var(--color-blue-1);
    }
  }
`

export const WrapperStyleCSS = css`
  display: flex;
  height: calc(100vh - 10rem);
  justify-content: space-evenly;
  align-items: center;
`
