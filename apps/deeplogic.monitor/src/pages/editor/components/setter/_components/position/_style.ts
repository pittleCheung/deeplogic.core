import { css } from '@emotion/css';

export const gradient = (token) => css`
  height: 5em;
  width: 5em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  opacity: 1;
  transition: all 0.3s ease 0s;
`;

export const gradientItem = (token) => css`
  height: ${token?.sizeMS}px;
  width: ${token?.sizeMS}px;
  border: ${token?.sizeXXS / 2}px solid transparent;
  position: relative;
  margin: auto;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover {
    &:before {
      opacity: 1;
    }
  }

  &:before {
    position: absolute;
    content: '';
    inset: 0;
    height: ${token?.sizeXXS + 2}px;
    width: ${token?.sizeXXS + 2}px;
    border-radius: 100%;
    background: ${token.colorBgSpotlight};
    transition: all 0.3s ease 0s;
    opacity: 0.25;
    margin: auto;
  }
`;

export const gradientItemActive = (token) => css`
  border-radius: 100%;
  border-color: ${token.colorPrimary};

  &:before {
    background: ${token.colorPrimary};
  }
`;
