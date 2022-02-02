import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box
}

body[data-theme="dark"] {
  --color-text-primary: #fff;
  --color-text-secondary: #fff;
  --color-bg-primary: #242424;
  --color-bg-modal: #fff;
  --color-blue-1: #749bf7;
  --color-text-modal: #000;
  --color-bg-toggle: #1e90ff;
}

body,
body[data-theme="light"] {
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  font: 400 16px Rubik, sans-serif;

  --color-text-primary: #27201a;
  --color-text-secondary: #3A3A3A;
  --color-text-white: #fff;
  --color-bg-modal: #fff;
  --color-text-modal: #000;
  --color-blue-1: #AFC6FA;
  --color-blue-2: #4B81FA;
  --color-blue-3: #2567FA;
  --color-green-1: #06D261;
  --color-red-1: #d21605;
  --color-bg-primary: #fff;
  --color-bg-toggle: #a9a9a9;
}

textarea, input, button {
  font-family: Rubik, sans-serif;
}
`
