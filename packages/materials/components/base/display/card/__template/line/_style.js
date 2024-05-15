import {css} from '@emotion/css';

export const main = css`
  border: 2px solid transparent;
  box-shadow: none;
  background: transparent;

  .ant-card-body {
    position: relative;
    padding: 1px;
  }
`;

export const module = (token) => css`
  width: 100%;
  clip-path: polygon(24px 0%,
  calc(100% - 24px) 0%,
  100% 24px,
  100% calc(100% - 24px),
  calc(100% - 24px) 100%,
  24px 100%,
  0% calc(100% - 24px),
  0% 24px);
  padding: ${token.padding}px;
  position: relative;
  background: ${token.colorBgBase};
  z-index: 1;
`;

export const border = (token) => css`
  clip-path: polygon(24px 0%,
  calc(100% - 24px) 0%,
  100% 24px,
  100% calc(100% - 24px),
  calc(100% - 24px) 100%,
  24px 100%,
  0% calc(100% - 24px),
  0% 24px);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${token.colorPrimary};
  overflow: hidden;
  z-index: 0;
`;
