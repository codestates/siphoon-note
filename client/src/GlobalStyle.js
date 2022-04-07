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
    font-size:3rem;
    margin:0px;
    font-family: 'Coming Soon', cursive;

  }
  h2 {
    font-size:2.5rem;
    margin:0px;
    font-family: 'Coming Soon', cursive;

  }

  h3 {
    font-size : 2.1rem;
    margin:0px;
    font-family: 'Coming Soon', cursive;

  }
  `;

export default GlobalStyle;
