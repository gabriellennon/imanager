import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background-login: #F7F8FD;
        --background: #ECF0F3;

        --blue-400: #134E87;
        --blue-500: #114871;
        --blue-700: #05032E;

        --grey-300: #EAEEF0;
        --grey-300: #B0B6BB;
        --grey-400: #50555A;
        --grey-600: #303030;

        --orange-600: #F56C00;

        --red-600: #FF5C5C
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    input {
        border-radius: 6px;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }
`;