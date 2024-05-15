import {css} from '@emotion/css';

export default {
    header: (token) => css`
      position: relative;
      padding: 0 ${token?.paddingXL * 2}px;
      background: transparent;
    `,

    body: (token) => css`
      display: flex;
      position: relative;
      z-index: 1;
      width: 100%;
      align-items: center;
      height: ${token?.sizeXL * 2}px;
    `,

    svg: (token) => css`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: ${token?.sizeXL * 2}px;
      z-index: 0;
    `,
};
