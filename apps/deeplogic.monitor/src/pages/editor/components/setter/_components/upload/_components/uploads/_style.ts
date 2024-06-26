import { css } from '@emotion/css';

export default {
  img: (token) => css`
    width: 100%;
    height: 100%;
    background: none no-repeat 50%;
    background-size: contain;
  `,

  preview: (token) => css`
    width: ${token?.screenXS / 2}px;
    height: ${token?.screenXS / 4 - 20}px;
    border-radius: ${token?.borderRadius}px;
    position: relative;
    overflow: hidden;

    &:hover [data-id='overlay'] {
      display: flex;
    }
  `,

  thumb: (token) => css`
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        45deg,
        ${token?.colorBorder} 25%,
        transparent 0
      ),
      linear-gradient(-45deg, ${token?.colorBorder} 25%, transparent 0),
      linear-gradient(45deg, transparent 75%, ${token?.colorBorder} 0),
      linear-gradient(-45deg, transparent 75%, ${token?.colorBorder} 0);
    background-position:
      0 0,
      0 ${token?.sizeXS + 2}px,
      ${token?.sizeXS + 2}px -${token?.sizeXS + 2}px,
      -${token?.sizeXS + 2}px 0;
    background-size: ${token?.sizeMD}px ${token?.sizeMD}px;
  `,

  overlay: (token) => css`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${token?.colorFill};
    backdrop-filter: blur(5px);
    justify-content: center;
    align-items: center;
  `,

  upload: css`
    & .ant-upload.ant-upload-select {
      width: 100% !important;
      margin: 0 !important;
    }
  `,

  button: (token) => css`
    width: ${token?.screenXS / 2}px;
  `,
};
