import { css } from '@emotion/css';

export default {
  menu: (token) => css`
    background: transparent;
    height: ${token?.sizeXL}px;

    &.ant-menu {
      line-height: ${token?.sizeXL}px !important;
      border-bottom: none;
    }
  `,
};
