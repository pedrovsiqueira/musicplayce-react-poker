import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  button {
    cursor: pointer;
  }

  html, body {
    width: 100vw;
    max-width: 100%;
    min-height: 100vh;
  }

  html {
    font-size: 10px;
  }

  body {
    background: -webkit-linear-gradient(top, #1A4A1C, #308834 600px);
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    color: #fff;
  }

  ul {
    list-style: none;
  }
`;
