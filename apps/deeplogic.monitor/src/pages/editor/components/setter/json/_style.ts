import { css } from '@emotion/css';

export default {
  text: (token) => css`
    padding: ${token?.paddingXXS}px;
  `,
};