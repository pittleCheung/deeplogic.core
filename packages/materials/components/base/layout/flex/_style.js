import { css } from '@emotion/css';

export default {
  flex: (token, enabled, children, selected) => css`
      //display: flex;
      //overflow: hidden;
      outline: ${(enabled && !selected) ? 1 : 0}px dashed ${token.colorPrimaryActive};
      outline-offset: -1px;
      padding: ${enabled ? (children ? '' : '12px !important') : ''};
  `
};
