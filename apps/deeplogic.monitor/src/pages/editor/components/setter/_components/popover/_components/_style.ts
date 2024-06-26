import { css } from '@emotion/css';

export default {
  title: (token) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${token?.colorSplit};
    padding: ${token.paddingXXS + 1}px ${token.padding}px ${token.paddingXXS}px;
    padding-right: ${token.paddingXXS - 2}px;
  `,

  btn: (token) => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
