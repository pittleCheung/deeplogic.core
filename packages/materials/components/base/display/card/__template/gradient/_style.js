import { css } from '@emotion/css';

export const main = (token) => css`
  place-content: center flex-start;
  align-items: center;
  align-self: stretch;
  background: linear-gradient(189deg, ${token.colorPrimaryHover} 0%, ${token.colorBorderSecondary} 55%);
  overflow: hidden;
  padding: 1px;
  border: none;
  position: relative;
  border-radius: ${token.borderRadius}px;

  .ant-card-body {
    position: relative;
    z-index: 1;
  }

  .ant-card-head {
    position: relative;
    z-index: 1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    border-radius: ${token.borderRadius}px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    overflow: hidden;
    background: linear-gradient(182deg, ${token.colorPrimaryHover} -60%, ${token.colorBgContainer} 14%);
    z-index: 0;
  }
`;
