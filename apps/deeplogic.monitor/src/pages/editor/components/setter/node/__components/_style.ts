import { css } from '@emotion/css';

export default {
  space: (token) => css`
    display: flex;
    align-items: center;
    gap: ${token?.sizeXXS}px;

    .ant-input-number-affix-wrapper {
      width: 100%;
      padding-left: ${token?.sizeXXS + 2}px;
    }
  `,
};
