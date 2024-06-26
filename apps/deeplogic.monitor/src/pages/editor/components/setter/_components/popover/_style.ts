import { css } from '@emotion/css';

export default {
  overlay: (token) => css`
    z-index: ${token?.zIndexPopupBase};

    .ant-popover-inner-content {
      padding: 0;
      //5px 16px 4px
    }

    .ant-form-item {
      margin-bottom: ${token?.paddingXXS}px;

      .ant-form-item-label {
        label {
          color: ${token?.colorTextSecondary};
        }
      }
    }

    .ant-popconfirm-description {
      padding: 0 ${token.paddingSM}px;
      margin-top: ${token.paddingXS}px !important;
    }

    .ant-popconfirm-buttons {
      display: flex;
      justify-content: end;
      padding: 0 ${token.paddingSM}px ${token.paddingSM}px;
    }
  `,
};
