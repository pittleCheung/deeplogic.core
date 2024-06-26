import { css } from '@emotion/css';

export default {
  icons: (token) => css`
    width: ${token?.screenXSMin / 2}px;
  `,

  items: (token) => css`
    height: ${token?.screenXSMin / 2}px;
    overflow: hidden;
    overflow-y: scroll;

    ul,
    li {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  `,

  iconList: (token) => css`
    display: flex;
    flex-wrap: wrap;
  `,

  icon: (token) => css`
    width: ${token?.sizeXL}px;
    height: ${token?.sizeXL}px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${token?.sizeXXS}px;
    font-size: ${token?.sizeMD}px;
  `,

  select: (token) => css`
    width: ${token?.sizeXXL * 2}px !important;
  `,

  label: (token) => css`
    padding: ${token?.paddingXXS}px 0;
    color: ${token?.colorTextSecondary};
  `
};
