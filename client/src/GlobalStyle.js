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

    .logo {
    font-family:'Coming Soon', cursive;

    }
  }
  h1 {
    font-size:3rem;
    margin:0px;
    display:inline;


  }
  h2 {
    font-size:2.5rem;
    margin:0px;
    display:inline;


  }

  h3 {
    font-size : 1.8rem;
    margin:0px;
    display:inline;

  }
  `;

export default GlobalStyle;
