import { css } from '@emotion/css';

export const button = css`
  position: relative;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 86px;
  height: 32px;
`;

export const text = css`
  position: relative;
  z-index: 2;
`;

export const svg = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const navigationWrapper = css`
  position: relative;
  text-align: center;
  width: 80px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const navigationBg = css`
  position: absolute; 
  width: 100%;
  height: 60px; 
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
export const navigationButtonNormal = css`
  font-size: 14px;
  font-weight: 400;
  color: #75FDF4;
  &.ant-btn-text:not(:disabled):not(.ant-btn-disabled):hover{
    background-color: transparent;
  }
`
export const navigationIconNormal = css`
  margin-top: -15px;
  font-size: 14px;
  color: #75FDF4;
`

export const navigationButton = css`
  color: #75FDF4;
  font-size: 14px;
  font-weight: bold;
  padding-bottom:40px;
  &.ant-btn-text:not(:disabled):not(.ant-btn-disabled):hover{
    background-color: transparent;
  }
`

export const navigationIcon = css`
  margin-top: -28px;
  font-size: 28px;
  color: #75FDF4;
`
