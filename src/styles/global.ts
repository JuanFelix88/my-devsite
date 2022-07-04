import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
    font: 400 16px 'Mulish', sans-serif, 'Segoe UI', Tahoma, Geneva, Verdana;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6, span, p, a, button, input, textarea {
    font-family: 'Mulish', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,
  }
`;
