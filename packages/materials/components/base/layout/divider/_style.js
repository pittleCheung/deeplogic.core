import { css } from '@emotion/css';

export default {
  enabled: (token) => css`
    padding-block: ${token.paddingXS}px;
  `,
};
