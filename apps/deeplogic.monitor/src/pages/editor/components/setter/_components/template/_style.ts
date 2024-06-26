import { css } from '@emotion/css';

export default {
  box: (token) => css`
    cursor: pointer;
    padding: ${token?.paddingXXS}px ${token?.paddingSM - 1}px;
  `,
};
