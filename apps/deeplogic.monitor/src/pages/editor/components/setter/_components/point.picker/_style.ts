import { css } from '@emotion/css';

export default {
  picker: (token) => css`
    width: ${token?.screenXSMin / 2}px;
    height: ${token?.screenSM / 2}px;
    overflow: scroll;
    margin: ${token?.marginSM}px 0;
  `,

  selected: (token) => css`
    margin-top: ${token?.marginSM}px;
    padding: ${token?.paddingXXS}px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  `
};
