import { css } from '@emotion/css';

export default {
  collapse: (token) => css`
    background: ${token?.colorBgContainer};
    margin-bottom: ${token?.marginXXS}px;

    .ant-collapse-header {
      background: ${token?.colorFillQuaternary};
    }

    .ant-collapse-content-box {
      padding: 0 !important;
    }
  `,

  list: (token) => css`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `,

  item: (token) => css`
    margin: 0;
    list-style: none;
    flex: 0 0 50%;
    padding: ${token?.paddingXXS}px;
  `,

  image: (token) => css`
    width: 100%;
    height: 60px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${token?.borderRadius}px;
    margin-bottom: ${token?.marginXS}px;
    box-shadow: 0 0 ${token?.size}px 1px ${token?.colorFillSecondary};

    svg {
      font-size: ${token?.fontSizeHeading2}px;
    }
  `,

  label: (token) => css`
    color: ${token?.colorTextSecondary};
  `,
};
