import { css } from '@emotion/css';

export default {
  menu: (token) => css`
    display: flex;
    height: 100%;

    .ant-layout-sider,
    .ant-menu {
      overflow: hidden;
      height: calc(100vh - ${token?.sizeXL * 2 + token?.sizeXXL * 2 + token?.sizeLG}px);
    }

    .ant-menu-light.ant-menu-root.ant-menu-vertical {
      //border-right: 1px solid ${token?.colorSplit};
    }
  `,

  item: (token) => css`
    flex: 0;
  `,

  sider: (token) => css`
      .ant-menu-item {
          min-width: ${token.sizeXXL}px;
      }
      .ant-menu-inline-collapsed {
          & > .ant-menu-item {
              padding-inline: 0 !important;
              height: auto !important;
              line-height: 1;
              text-align: center;

              .anticon {
                  line-height: 1;
              }
          }
      }

      .ant-menu-title-content {
          display: none;
      }
  `,

  label: (token) => css`
    width: 100% !important;
    display: flex;
    padding-block: ${token?.paddingXS}px;
    justify-content: center;
    align-items: center;
  `,

  text: (token) => css`
    font-size: ${token?.fontSizeSM}px;
  `,

  submenu: (token) => css`
      position: relative;

      .ant-menu-item {
          min-width: ${token.sizeXXL}px;
          text-align: center;
          padding: 0 !important;
          height: ${token?.sizeXL}px !important;
          line-height: ${token?.sizeXL}px !important;
      }
      .ant-menu-title-content{
          padding: 0 ${token.sizeXXS}px;
      }
  `
};
