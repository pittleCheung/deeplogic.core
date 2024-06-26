import { css } from '@emotion/css';

export default {
  segmented: (token) => css`
    .ant-segmented-item-label {
      padding: 0 ${token?.paddingSM - 2}px;
    }
  `,
};
