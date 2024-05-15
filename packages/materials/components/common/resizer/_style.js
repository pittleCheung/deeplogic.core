import {css} from '@emotion/css';
import {rgba} from 'emotion-rgba';

export default {
    resizer: css`
        position: relative;
    `,

    handle: (token) => css`
        z-index: ${token?.zIndexPopupBase - 7};
        display: flex;
        align-items: center;
        justify-content: center;
    `,

    point: (token) => css`
        width: 10px;
        height: 10px;
        background: ${token?.colorWhite};
        border: 1px solid ${token?.colorPrimary};
        border-radius: 50%;

        &:hover {
            box-shadow: 0 0 10px 1px ${rgba(token?.colorPrimary, 0.5)};
        }
    `,

    normalize: (token) => css`
        flex: 1;
        width: 100%;
        height: 100%;
        padding: ${token.paddingXS}px;
        color: ${token?.colorTextTertiary};
        background: ${token?.colorFillTertiary};
        text-align: center;
    `
};
