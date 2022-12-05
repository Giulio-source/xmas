import { createGlobalStyle } from "styled-components";
import { Colors } from "../components/commons/Theme";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Noto Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  
  a {
  color: inherit;
  text-decoration: none;
  } 

  button {
    background: white;
    padding: 16px 32px;
    border: 1px solid ${Colors.darkBlue};
    border-radius: 16px;
    font-family: inherit;
    cursor: pointer;
    margin: 16px 8px 0;
  }
`;
