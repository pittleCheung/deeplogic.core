import { css } from '@emotion/css';

export default {
  group: (token) => css`
    display: flex;
    padding: 0 ${token?.paddingXXS}px;
    gap: ${token?.paddingXXS}px;
    align-items: center;
  `,

  space: (token) => css`
    flex: 1;
  `,

  btn: (token) => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  icon: (token) => css`
    font-size: ${token?.sizeMD}px;
    height: ${token?.sizeXL}px;
    color: ${token?.colorTextSecondary};
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
