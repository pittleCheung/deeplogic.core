import { css } from '@emotion/css';

export default {
  events: (token) => css`
    padding: ${token?.paddingXXS}px ${token?.paddingSM}px;

    .ant-btn {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,

  event: (token) => css`
    align-items: center;
    display: flex;
    gap: ${token?.paddingXXS}px;
    height: ${token?.controlHeight}px;
  `,

  title: (token) => css`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${token?.paddingXXS}px;
  `,

  input: (token) => css`
    flex: 1;
    color: ${token?.colorText} !important;
    background: ${token?.colorBgContainer} !important;
  `,

  question: (token) => css`
    color: ${token?.colorTextQuaternary};
  `,

  icon: (token) => css`
    color: ${token?.colorTextSecondary};
    font-size: ${token?.fontSize}px;
  `,
};
