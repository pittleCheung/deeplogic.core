import {css} from '@emotion/css';

export default {
    loading: css`
        width: 100%;
        height: 100%;

        .ant-spin-container {
            width: 100%;
            height: 100%;
            text-align: center;
        }
    `,

    layout: (token) => css`
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
        transform-origin: 0 0;
        overflow-x: auto;
        overflow-y: auto;
    `,

    grids: (token) => css`
        background: conic-gradient(from 90deg at 1.1px 1.1px, transparent 25%, ${token?.colorBorderSecondary} 0);
        background-size: ${token?.size}px ${token?.size}px;
    `,

    moveable: (token) => css`
        z-index: ${token?.zIndexPopupBase - 99} !important;
    `,

    selector: (token) => css`
        z-index: ${token?.zIndexPopupBase - 99} !important;
    `,

    zoomshow: (token) => css`
        z-index: ${token?.zIndexPopupBase - 99} !important;
    `,

    zoomdisplay: (token) => css`
        z-index: ${token?.zIndexPopupBase - 99} !important;
    `
};
