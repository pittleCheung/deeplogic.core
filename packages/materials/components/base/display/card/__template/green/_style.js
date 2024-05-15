import { css } from '@emotion/css';

export const main = (token) => css`
  .ant-card-body {
    padding: 1px;
    overflow: hidden;
    background: linear-gradient(
      326deg,
      ${token.colorPrimaryHover} 0%,
      ${token.colorBorderSecondary} 4%,
      ${token.colorBorderSecondary} 90%,
      ${token.colorPrimaryHover} 100%
    );
    height: 400px;
  }
`;

export const content = (token) => css`
  width: 100%;
  height: 100%;
  background: ${token.colorBgContainer};
`;
