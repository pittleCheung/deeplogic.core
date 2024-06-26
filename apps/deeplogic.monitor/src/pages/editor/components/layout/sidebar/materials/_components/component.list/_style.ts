import { css } from '@emotion/css';

export default {
  list: (token) => css`
    flex: 1;
    overflow: hidden;
    overflow-y: scroll;
    height: calc(100vh - ${token?.sizeXL * 2 + token?.sizeXXL * 2 + token?.sizeXL}px);
  `,

  item: (token) => css`
    padding: ${token?.paddingXXS + 2}px ${token?.paddingSM}px;
    text-align: center;
    cursor: grab;
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
