import { css } from '@emotion/css';

export default {
  item: (token) => css`
    display: flex;
    align-items: center;
    gap: ${token?.sizeXXS}px;
    margin-bottom: ${token?.marginXXS}px;
    padding: 0 ${token?.paddingXXS}px 0 ${token?.paddingSM}px;
  `,

  object: (token) => css`
    .ant-input,
    .ant-segmented,
    .ant-input-number,
    .ant-select-selector,
    .ant-input-number-affix-wrapper {
      border-radius: ${token?.borderRadius}px;
      border-color: ${token?.colorSplit} !important;
    }

    .ant-select {
      width: 100%;

      &-selector {
        height: 30px;
      }
    }

    .ant-input-number {
      width: 100%;

      &-disabled {
        background: transparent;
      }

      &-prefix {
        color: ${token?.colorTextTertiary};
      }

      &-handler {
        border-inline-start-color: transparent;

        &-wrap {
          transition: opacity 50ms linear 50ms;
          z-index: 1;
        }

        &-down {
          border-block-start-color: transparent;
        }
      }
    }

    .ant-segmented-item {
      &-icon,
      &-label {
        color: ${token?.colorTextTertiary};
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &-selected {
        .ant-segmented-item-label {
          color: ${token?.colorPrimary};
        }
      }
    }

    .ant-form-item {
      margin-bottom: 0;
    }

    .ant-btn {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,

  title: (token) => css`
    display: flex;
    align-items: center;
    gap: ${token?.sizeXXS}px;
  `,

  icon: (token) => css`
    color: ${token?.colorTextTertiary};
  `,

  formItem: css`
    flex: 1;
  `
};
