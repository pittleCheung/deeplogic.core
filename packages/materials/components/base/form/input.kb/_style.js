import { css } from '@emotion/css';

export default {
  input: (token) => css`
      // min-width: 220px;
      font-size: 18px;

      & .ant-popover-inner-content {
          padding: 0;
      }

      & .hg-theme-default {
          background-color: unset;
          padding: 12px !important;
      }

      & .hg-theme-default .hg-button {
          height: unset;
          padding: 20px 32px;
          background-color: ${token.colorBgLayout};
          border-bottom-color: ${token.colorBgBase};
      }

      & .hg-theme-default .hg-row .hg-button-container,
      & .hg-theme-default .hg-row .hg-button:not(:last-child) {
          margin-right: 8px;
      }

      & .hg-theme-default .hg-row:not(:last-child) {
          margin-bottom: 8px;
      }

      & .hg-button-escape {
          max-width: 122px;
      }
  `
};
