import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    background:floralwhite;
    font-family: 'Noto Sans KR', sans-serif;
    scroll-behavior: smooth; 
    margin: 0;
    padding: 0;
    font-size:16px;
  }

  `;

export default GlobalStyle;
