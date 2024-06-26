import { css } from '@emotion/css';

export default {
  customs: (token) => css`
    flex: 1;
    padding: ${token?.paddingXS}px 0;
    overflow: hidden;
    overflow-y: scroll;
    width: 100%;
    height: calc(100vh - ${token?.sizeXL * 2 + token?.sizeXXL * 2 + token?.sizeXL}px);
  `,

  add: (token) => css`
    margin-bottom: ${token?.marginXS}px;
  `,
};
