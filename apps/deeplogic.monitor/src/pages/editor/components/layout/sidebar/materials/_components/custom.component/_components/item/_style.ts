import { css } from '@emotion/css';

export default {
  item: (token) => css`
    padding: ${token?.paddingXXS}px ${token?.paddingXXS}px;
    text-align: center;
    cursor: pointer;
  `,

  image: (token) => css`
    width: 100%;
    height: 60px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${token?.borderRadius}px;
    margin-bottom: ${token?.marginXS}px;
    box-shadow: 0 0 ${token?.size}px 1px ${token?.colorFillSecondary};

    svg {
      font-size: ${token?.fontSizeHeading2}px;
    }
  `,

  label: (token) => css`
    color: ${token?.colorTextSecondary};
  `
};
