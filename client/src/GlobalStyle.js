import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    background:ghostwhite;
    font-family: 'Noto Sans KR', sans-serif;
    scroll-behavior: smooth; 
    margin: 0;
    padding: 0;
    font-size:18px;
  }

  `;

export default GlobalStyle;
