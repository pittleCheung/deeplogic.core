import { css } from '@emotion/css';

export default {
  icon: (token) => css`
    padding: 0 ${token?.paddingSM - 1}px;

    .anticon {
      width: ${token?.sizeXL - 2}px;
      height: ${token?.sizeXL - 2}px;
    }
  `
};
