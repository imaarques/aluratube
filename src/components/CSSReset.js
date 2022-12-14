import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.backgroundBase};
    color: ${({ theme }) => theme.textColorBase};
    overflow-x: hidden;
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow-x: hidden;
  }
  html::-webkit-scrollbar-track {
    background-color: #202020;
  }
  html::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: #202020;
  }
  html::-webkit-scrollbar-thumb {
    background: #404040;
  }
  body {
    display: flex;
    flex: 1;
    overflow-x: hidden;
  }
  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;
