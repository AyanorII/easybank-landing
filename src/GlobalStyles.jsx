import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    html {
        overflow-x: hidden;
        font-family: "Public Sans", sans-serif;
    }

    body {
        margin: 0;
        overflow-x: hidden;
    }

    .App {
        position: relative;
    }
`

export default GlobalStyle