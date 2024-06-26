import { css } from '@emotion/css';

export default {
  content: (token) => css`
    width: ${token.screenXS / 2}px;
    height: 100%;

    .ant-form-item {
      margin-bottom: ${token.paddingSM}px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  `,

  right: css`
    text-align: right;
  `,
};
