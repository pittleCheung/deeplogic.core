import { css } from '@emotion/css';

export const content = (token) => css`
  display: flex;
  align-items: center;
  gap: ${token?.sizeXXS}px;
`;

export const img = (token) => css`
  flex: 0 0 ${token?.sizeMD}px;
  width: ${token?.sizeMD}px;
  height: ${token?.sizeMD}px;
  border-radius: ${token?.borderRadius}px;
  background-size: cover;
  background-position: center center;
  border: 1px solid ${token?.colorSplit};
`;

export const field = (token) => css`
  flex: 1;
  cursor: pointer;
  padding: ${token?.paddingXXS}px ${token?.paddingSM - 1}px
    ${token?.paddingXXS}px ${token?.paddingXXS}px;
`;

export const text = (token) => css`
  flex: 1;
  overflow: hidden;
  width: 0;
`;
