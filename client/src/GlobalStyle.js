import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500&family=Rubik+Puddles&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }
  html, body {
    background:ghostwhite;
    // font-family: 'Noto Serif KR', serif;
    scroll-behavior: smooth; 
    margin: 0;
    padding: 0;
    font-size:18px;
  }
  h1 {
    font-size:3rem;
    margin:0px;
  }
  h2 {
    font-size:2.5rem;
    margin:0px;
  }

  h3 {
    font-size : 2.1rem;
    margin:0px;
  }
  `;

export default GlobalStyle;
