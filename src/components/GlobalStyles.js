import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgray;
    }
}

body {
    font-family: "Montserrat", sans-serif;
    color: #333;
    width: 100%;
}

h2 {
    font-size: 3rem;
}

h3 {
    font-size: 1.3rem;
    padding: 1rem;
}

p {
    font-size: 1rem;
    line-height: 200%;
    color: #696969;
}

a {
    color: #333;
    text-decoration: none;
}
`;

export default GlobalStyles;
