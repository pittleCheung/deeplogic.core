import { css } from '@emotion/css';
import { px2Num } from '../../../../../_utils/utils';

export default {
  bordered: (token, style) => css`
    width: ${px2Num(style?.width) || 86}px;
    height: ${px2Num(style?.height) || 32}px;
    position: relative;
    clip-path: polygon(
      0 8px,
      8px 0,
      calc(100% - 0px) 0,
      100% 20px,
      100% calc(100% - 8px),
      calc(100% - 8px) 100%,
      20px 100%,
      0 calc(100% - 0px)
    );

    &:before {
      width: ${style?.width ? px2Num(style?.width) - 4 : 80}px;
      height: ${style?.height ? px2Num(style?.height) - 4 : 28}px;
      position: absolute;
      top: 1px;
      right: 1px;
      z-index: 0;
      background-color: ${token.colorPrimary};
      content: '';
      clip-path: polygon(
        0 8px,
        8px 0,
        calc(100% - 0px) 0,
        100% 20px,
        100% calc(100% - 8px),
        calc(100% - 8px) 100%,
        20px 100%,
        0 calc(100% - 0px)
      );
    }

    &:after {
      position: absolute;
      top: -2px;
      bottom: -2px;
      left: -2px;
      right: -2px;
      background: ${token.colorPrimary};
      border: 1px solid;
      content: '';
      z-index: -1;
    }
  `,

  text: css`
    position: relative;
    z-index: 1;
  `,

  line1: (token) => css`
    &:before,
    &:after {
      position: absolute;
      width: calc(100% - 13px);
      height: 1px;
      background: ${token.colorPrimary};
      content: '';
    }

    &:before {
      top: 0;
      left: 13px;
    }

    &:after {
      bottom: 0;
      right: 13px;
    }
  `,

  line2: (token) => css`
    &:before,
    &:after {
      position: absolute;
      width: 1px;
      height: calc(100% - 13px);
      background: ${token.colorPrimary};
      content: '';
    }

    &:before {
      bottom: 0;
      left: 0;
    }

    &:after {
      top: 0;
      right: 0;
    }
  `
};
