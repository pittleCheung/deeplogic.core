import { css } from '@emotion/css';

export default {
  color: (token, color) => css`
    width: ${token?.size}px;
    height: ${token?.size}px;
    border-radius: ${token.borderRadius}px;
    background-color: ${color || 'translate'};
    border: 1px solid ${color || token.colorSplit};
  `,

  input: (token) => css`
    &.ant-input {
      border-color: transparent !important;
    }
  `,

  inputColor: (token) => css`
    &.ant-input {
      padding-left: 0;
    }
  `,

  space: (token) => css`
    padding-left: ${token?.paddingSM - 1}px;
  `,
};
