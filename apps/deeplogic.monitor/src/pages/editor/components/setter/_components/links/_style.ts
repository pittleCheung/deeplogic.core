import { css } from '@emotion/css';

export default {
  link: (token) => css`
    padding: ${token?.paddingXXS}px;
    padding-left: ${token?.paddingSM - 1}px;
    display: flex;
    align-items: center;
    overflow: hidden;
  `,

  text: (token) => css`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 65px;
  `
};
