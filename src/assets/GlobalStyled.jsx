import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: "Poppins", sans-serif;
} 

html {
    font-size: 100%;
}
`;

export default GlobalStyled;