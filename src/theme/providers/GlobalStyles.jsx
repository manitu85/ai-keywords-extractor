import { css, Global } from '@emotion/react';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: 'Open Sans';
          background-color: #3f0843;
          border-top: 5px solid #ff4d05;
          color: #fff;
        }
        ul {
          list-style: none;
        }
      `}
    />
  );
};

export default GlobalStyle;
