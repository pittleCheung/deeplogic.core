import {css} from '@emotion/css';

export default {
    enabled: (token) => css`
        //background: ${token?.colorInfoBg};
        padding: ${token?.padding}px ${token?.paddingXL}px;
        outline: 1px dashed ${token?.colorPrimary};
        outline-offset: -2px;
    `,

    content: css`
        //overflow: auto;
    `,

    tree: (token) => css`
        background: transparent;
        //min-width: ${token?.screenXS}px;
    `
};
