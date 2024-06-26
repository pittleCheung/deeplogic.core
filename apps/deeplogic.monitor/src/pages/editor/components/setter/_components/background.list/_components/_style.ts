import { css } from '@emotion/css';

export const content = (token) => css`
  flex: 1;
  display: flex;
  color: ${token?.colorText};
  gap: ${token?.sizeXXS}px;
`;

export const disable = css`
  pointer-events: none;
  opacity: 0.5;
`;

export const button = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
