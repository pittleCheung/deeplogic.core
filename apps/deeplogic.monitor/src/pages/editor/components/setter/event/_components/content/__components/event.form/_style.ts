import { css } from '@emotion/css';

export default {
  contract: (token) => css`
    display: flex;
    align-items: flex-start;
    gap: ${token?.paddingXXS}px;
  `,

  container: (token) => css`
    width: 100%;
    min-height: ${token?.screenXSMin / 2}px;
    overflow: hidden;
    overflow-y: scroll;
  `,

  icon: (token) => css`
    font-size: ${token?.fontSizeLG}px;
    color: ${token?.colorTextQuaternary};
    padding: ${token?.paddingXS}px;
  `,

  item: (token) => css`
    flex: 1;
    margin-bottom: 0;
  `
};
