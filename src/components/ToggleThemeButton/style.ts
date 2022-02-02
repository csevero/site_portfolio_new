import styled from 'styled-components'

export const ToggleButton = styled.button`
  --toggle-width: 70px;
  --toggle-height: 28px;
  --toggle-padding: 1px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.0rem;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: var(--color-bg-toggle);
  transition: all 0.25s ease-in-out;
  margin-left: 10px;

  transition: all 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover {
    box-shadow: 0 0 5px 2px var(--color-bg-toggle);
  }
`

export const ToggleThumb = styled.span<{ activeTheme?: string }>`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: white;

  transition: transform 0.25s ease-in-out;
  transform: ${p =>
    p.activeTheme === 'dark'
      ? 'translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)'
      : 'none'};
`
