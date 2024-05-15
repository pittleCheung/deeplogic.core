import { css } from '@emotion/css';

export default {
  row: (token) => css`
    outline: 1px dashed ${token.colorInfoBorder};
    outline-offset: -2px;
  `
};
