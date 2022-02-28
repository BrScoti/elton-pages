import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  /* @font-face {
      font-family: 'Raleway-Regular';
      src: url('../fonts/Raleway-Regular.ttf') format('truetype');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Raleway-Medium';
      src: url('../fonts/Raleway-Medium.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Raleway-Black';
      src: url('../fonts/Raleway-Black.ttf') format('truetype');
      font-weight: 900;
      font-style: normal;
      font-display: swap;
  } */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &::before,
  &::after{
    box-sizing: inherit;
  }
}

${({ theme }) => css`
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }
  a {
    text-decoration: none;
  }
  p {
    line-height: ${theme.spacings.small};
  }
  li {
    list-style: none;
  }
  body {
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    //overflow-x: hidden;
    color: ${theme.colors.textColor};

    background-color: ${theme.colors.lightGray};
  }
`}

`

export default GlobalStyle
