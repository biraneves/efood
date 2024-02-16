import { createGlobalStyle } from 'styled-components';

export const colors = {
  white: '#fff',
  primary: '#e66767',
  yellow: '#ffb930',
  secondary: '#ffebd9',
  bgcolor: '#fff8f2',
};

export const GlobalCSS = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        list-style-type: none;
    }

    body {
        background-color: ${colors.bgcolor};
        color: ${colors.primary};
        font-weight: 400;
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`;
