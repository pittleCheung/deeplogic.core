import { css } from '@emotion/css';

export default {
  input: (token) => css`
    .ant-input-group > .ant-input:first-child {
      border-start-end-radius: ${token.borderRadius}px;
      border-end-end-radius: ${token.borderRadius}px;
    }
    .ant-input-group > .ant-input-group-addon {
      display: none;
      padding: 2px;
    }
    .ant-input-group > .ant-input-group-addon:hover{
      display: table-cell;
    }
    .ant-input-wrapper:focus-within .ant-input-group-addon {
        display: table-cell;
    }
    .ant-input-wrapper:focus-within .ant-input{
      border-start-end-radius: 0px;
      border-end-end-radius: 0px;
    }
  `
};
