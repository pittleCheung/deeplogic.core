import {css} from '@emotion/css';

export default {
    status: (token) => css`
        display: flex;
        align-items: center;
        gap: ${token?.sizeXXS}px;
        width: fit-content;
    `,
    'state-text-wrapper': css`
        min-width: 44px;
    `,
    'state-text-title':css`
        min-width: 14px;
    `,
};
