import { css } from '@emotion/css';

export default {
  image: (token) => css`
    width: 100%;
    height: 100%;
  `,

  container: (token) => css`
    width: 100%;

    .ant-image {
      width: 100%;
    }
  `,

  carousel: css`
    overflow: hidden;
  `
};
