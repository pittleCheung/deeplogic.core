import { css } from '@emotion/css';

export default {
  template: (token) => css`
    width: 100%;
    max-height: ${token?.screenXS}px;
    overflow: hidden;
    overflow-y: scroll;
  `,

  list: (token) => css`
    width: ${token?.screenXS / 2}px;
    margin: 0;
    padding: 0;

    li:not(:last-child) {
      margin-bottom: ${token?.marginXXS}px;
    }
  `,

  item: (token) => css`
    position: relative;
    list-style: none;
    margin: 0;
    border-radius: ${token?.borderRadius}px;
    overflow: hidden;
    border: 1px solid ${token?.colorSplit};
    padding: ${token?.paddingXS}px;
    background: ${token?.colorBgContainer};
    cursor: pointer;
    transition: all 300ms linear;

    :hover {
      background: ${token?.colorFillAlter};
    }

    &.active {
      border-color: ${token?.colorPrimary};
      background: ${token?.colorInfoBg};
    }
  `,

  active: (token) => css`
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    padding: ${token?.sizeXXS}px;
    background: ${token?.colorPrimary};
  `,

  image: (token) => css`
    width: 100%;
    height: ${token?.sizeLG}px;

    img {
      width: 100%;
      height: auto;
    }
  `,
};
