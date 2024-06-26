import { css } from '@emotion/css';

export default {
  field: (token) => css`
    display: flex;
    align-items: center;
    border-radius: ${token?.borderRadius}px;
    margin-bottom: ${token?.sizeXXS}px;
    position: relative;

    .ant-input,
    .ant-segmented,
    .ant-input-number,
    .ant-select-selector,
    .ant-input-number-affix-wrapper {
      border-radius: ${token?.borderRadius}px;
      border-color: ${token?.colorSplit};
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

  bordered: (token) => css`
    border: 1px solid ${token?.colorSplit};
  `,

  label: (token) => css`
    line-height: 0;
    font-size: ${token?.fontSizeLG}px;
    color: ${token?.colorTextTertiary};
    padding-inline-start: ${token?.sizeXXS}px;
  `,

  text: (token) => css`
    font-size: ${token?.fontSizeSM}px;
  `,

  content: (token) => css`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,

  value: (token) => css`
    padding: ${token?.paddingXXS}px ${token?.paddingSM - 1}px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,

  action: (token) => css`
    position: absolute;
    right: 0;
    top: 0;
  `
};
