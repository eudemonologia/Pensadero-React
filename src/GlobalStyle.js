import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --primaryColor: #5C2DBF;
    --primaryColorHover: rgba(92, 45, 191, 0.2);
    --secundaryColor: #15181c;
    --textColor: #d9d9d9;
    --primaryFont: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    --secundaryFont: 'Caveat', cursive;
  }

  body {
    margin: 0;
    background-color: black;
    font-size: 16px;
    color: var(--textColor);
    font-family: var(--primaryFont);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  hr {
    border: none;
    border-top: 1px solid rgba(100,100,100, 0.4);
    width: 100%;
    margin: 0;
  }

  #root {
    display: flex;
    justify-content: center;
    height: 100vh;
    max-width: 1250px;
    margin: 0 auto;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  .App {
    display: flex;
    height: 100vh;
    max-width: 1250px;
    margin: 0 auto;
  }
`;