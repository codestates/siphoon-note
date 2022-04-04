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
  h1 {
    font-size:4rem;
    margin:0px;
  }
  h2 {
    font-size:2.5rem;
    margin:0px;
  }
  `;

export default GlobalStyle;
