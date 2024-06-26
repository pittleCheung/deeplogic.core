import { css } from '@emotion/css';

export default {
  pages: (token) => css`
      border-inline-end: none !important;

      .ant-menu-item,
      .ant-menu-submenu-title {
          height: ${token?.controlHeight}px;
          line-height: ${token?.controlHeight}px;
          padding-inline: ${token?.paddingXS}px;
          border-radius: ${token?.borderRadius}px;
      }

      .ant-menu-title-content {
          line-height: 0;
      }

      .ant-menu-item-group {

          &-list {
              .ant-menu-item {
                  padding-left: ${token?.padding}px !important;
                  margin-inline-start: 0;
              }
          }

          &-title {
              padding-inline: ${token?.paddingXS}px;
              padding-block: ${token?.paddingXXS}px;
              padding-inline-end: ${token?.paddingXS - 2}px;
          }
      }

      .ant-menu-item .ant-menu-item-icon {
          color: ${token.colorTextTertiary};
      }

      .ant-space-item {
          display: flex;
          align-items: center;
      }

      .ant-menu-item-selected {
          color: ${token?.colorPrimary};

          .ant-input {
              color: ${token?.colorPrimary};
          }
      }
  }
  `,

  page: (token) => {
    const { controlHeight, sizeLG } = token;
    const height = 64 + 48 + 48 + controlHeight + sizeLG;

    return css`
      height: calc(100vh - ${height}px);
      overflow: hidden;
      overflow-y: scroll;
    `;
  },

  primary: (token) => css`
    color: ${token?.colorPrimary} !important;
  `
};
