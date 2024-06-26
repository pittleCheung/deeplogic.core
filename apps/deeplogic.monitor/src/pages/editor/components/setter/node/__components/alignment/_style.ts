import { css } from '@emotion/css';

export default {
  group: (token) => css`
    padding: 0 ${token?.paddingXXS}px;
    padding-left: ${token?.paddingXS}px;

    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
      background: transparent;
      border-color: transparent;

      &:active,
      &:hover {
        background: transparent;
        border-color: transparent;

        &:before {
          background: transparent;
        }
      }

      &:hover {
        background: ${token?.colorSplit};
        border-radius: ${token?.borderRadius}px;
      }
    }
  `,

  radio: (token) => css`
    padding: 0 ${token?.paddingXXS}px;
    border-color: transparent;

    &:first-child {
      border-color: transparent;
    }

    &:not(:first-child):before {
      background: transparent;
    }
  `,

  icon: (token) => css`
    font-size: ${token?.sizeMD}px;
    height: ${token?.sizeXL}px;
    color: ${token?.colorTextSecondary};
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
