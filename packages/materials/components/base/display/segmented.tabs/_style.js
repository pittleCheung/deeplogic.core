import {css} from '@emotion/css';

export default {
    tabs: (token) => css`
        display: flex;
        align-items: center;
        gap: ${token?.sizeXS}px;
        margin-bottom: ${token?.marginXS}px;
    `,

    title: css`
        flex: 1;
    `,

    left: css`
        justify-content: flex-start;
    `,

    right: css`
        justify-content: flex-end;
    `
};
