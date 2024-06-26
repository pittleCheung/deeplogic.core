import { css } from '@emotion/css';

export default {
  upload: (token) => css`
    width: ${token?.screenXS / 2}px;
  `,

  segmented: (token) => css`
    text-align: center;
    margin-bottom: ${token?.marginXXS}px;
  `,
};
