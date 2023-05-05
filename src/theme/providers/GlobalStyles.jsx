import { css, Global } from '@emotion/react';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }
        body {
          border-top: 5px solid #90e0ef;
          font-family: 'Open Sans';
        }
        li {
          list-style: none;
        }
      `}
    />
  );
};

export default GlobalStyle;
