import { createGlobalStyle } from "styled-components";
import px2vw from "./px2vw";

const Global = createGlobalStyle`
*, body {
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
    font-size: ${px2vw(48)};

    @media (min-width: 400px) {
      font-size: ${px2vw(40)};
    }

    @media (min-width: 500px) {
      font-size: ${px2vw(34)};
    }

    @media (min-width: 600px) {
      font-size: ${px2vw(28)};
    }

    @media (min-width: 700px) {
      font-size: ${px2vw(24)};
    }

    @media (min-width: 800px) {
      font-size: ${px2vw(22)};
    }

    @media (min-width: 900px) {
      font-size: ${px2vw(20)};
    }

    @media (min-width: 1000px) {
      font-size: ${px2vw(18)};
    }

    @media (min-width: 1200px) {
      font-size: ${px2vw(16)};
    }

    @media (min-width: 1400px) {
      font-size: ${px2vw(14)};
    }

    @media (min-width: 1600px) {
      font-size: ${px2vw(12)};
    }
} 

input {
  outline: thin;
}
`;

export default Global;
