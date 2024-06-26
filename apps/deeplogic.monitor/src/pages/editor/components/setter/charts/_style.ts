import { css } from '@emotion/css';

export default {
  charts: (token) => css`
    &.ant-tabs {
      background-color: ${token?.colorFillQuaternary};
    }

    .ant-tabs-content {
      background: ${token?.colorBgContainer};
      border-top-left-radius: ${token?.borderRadius}px;
      border-bottom-left-radius: ${token?.borderRadius}px;
      height: 100%;

      &-holder {
        border: none;
        padding: ${token?.paddingXS}px 0;

        .ant-tabs-tabpane {
          padding-left: 0 !important;
        }
      }
    }

    .ant-tabs-ink-bar {
      background: transparent;
    }

    .ant-tabs-nav {
      &-list {
        background-color: ${token?.colorFillQuaternary};
        padding: ${token?.paddingXS}px 0;
      }

      .ant-tabs-tab {
        padding: ${token?.paddingXS}px 0;
        writing-mode: vertical-rl;
        text-orientation: upright;
        border-top-left-radius: ${token?.borderRadiusSM}px;
        border-bottom-left-radius: ${token?.borderRadiusSM}px;

        &-active {
          background-color: ${token?.colorBgContainer};
        }
      }

      .ant-tabs-tab:first-child,
      .ant-tabs-tab + .ant-tabs-tab {
        margin-top: ${token?.paddingXXS}px;
        margin-left: ${token?.paddingXXS}px;
      }
    }
  `
};
