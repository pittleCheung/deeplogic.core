import { css } from '@emotion/css';

export default {
  primary: css`
    text-decoration: none;
    position: relative;
    border: none;
    background: transparent;

    &:hover,
    &:active {
      background: transparent !important;
    }

    &:before,
    &:after {
      position: absolute;
      width: 10px;
      height: 1px;
      content: '';
    }

    &:before {
      top: 0;
      left: -3px;
      transform: rotate(-45deg);
      transform-origin: top right;
      background: linear-gradient(to right, #fb6e53 0%, #fb7454 100%);
    }

    &:after {
      bottom: 0;
      right: -3px;
      transform: rotate(-45deg);
      transform-origin: bottom left;
      background: linear-gradient(to right, #74e79a 0%, #74e79a 100%);
    }
  `,

  lines1: css`
    &:before,
    &:after {
      position: absolute;
      width: calc(100% - 8px);
      height: 1px;
      content: '';
    }

    &:before {
      top: 0;
      left: 7px;
      background: linear-gradient(to right, #fb7454 0%, #bcda68 100%);
    }

    &:after {
      bottom: 0;
      right: 7px;
      background: linear-gradient(to right, #6072e2 0%, #74e79a 100%);
    }
  `,

  lines2: css`
    &:before,
    &:after {
      position: absolute;
      width: 1px;
      content: '';
    }

    &:before {
      bottom: 0;
      left: 0;
      height: 56%;
      background: linear-gradient(to bottom, #6e52e5 0%, #6072e2 100%);
    }

    &:after {
      top: 0;
      right: 0;
      height: calc(100% - 7px);
      background: linear-gradient(to bottom, #bcda68 0%, #74e79a 100%);
    }
  `,

  text: (token) => css`
    color: ${token.colorText};
    text-transform: uppercase;
    padding-left: 1.4375rem;
    line-height: 1;
    text-decoration: none;
    display: block;
    position: relative;

    &:hover {
      color: ${token.colorTextSecondary} !important;

      &:before,
      &:after {
        background-color: ${token.colorTextSecondary};
      }
    }

    &:active {
      color: ${token.colorTextTertiary} !important;

      &:before,
      &:after {
        background-color: ${token.colorTextTertiary};
      }
    }

    &:before,
    &:after {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto 0;
      width: 0.25rem;
      height: 0.25rem;
      background-color: ${token.colorText};
      border-radius: 50%;
      content: '';
    }

    &:before {
      left: 0;
    }

    &:after {
      left: 0.4375rem;
    }
  `
};
