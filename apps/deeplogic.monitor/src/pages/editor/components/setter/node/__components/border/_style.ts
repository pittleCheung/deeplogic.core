import { css } from '@emotion/css';

export default {
  border: (token) => css`
    .ant-select-single {
      height: ${token?.sizeXL - 2}px;
    }
  `,
  item: (token) => css`
    display: flex;
  `,

  color: (token) => css`
    flex: 1;
  `,
  width: (token) => css`
    margin-right: ${token?.sizeXXS + 2}px;
  `,
};
