import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
    padding: 0;
  }

  `;

export default GlobalStyle;
