import { createGlobalStyle } from "styled-components";
import px2vw from "./px2vw";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  
  &::-webkit-scrollbar {
    height: 9px;
    width: 9px;
    }
  &::-webkit-scrollbar-track {
    border-radius: 6px;
    background-color: rgb(14, 43, 38, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: rgba(255, 254, 214, 0.6);
  }
}

:root {
    font-size: ${px2vw(24)};

    @media (min-width: 768px) {
      font-size: ${px2vw(18)};
    }

    @media (min-width: 1024px) {
      font-size: ${px2vw(16)};
    }
} 

input {
  outline: thin;
}
`;

export default Global;
