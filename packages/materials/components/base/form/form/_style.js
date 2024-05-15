import {css} from '@emotion/css';

export default {
    enabled: (token) => css`
        background: ${token?.colorInfoBg};
        padding: ${token?.paddingXXS}px ${token?.paddingMD}px !important;
        outline: 1px dashed ${token?.colorPrimary};
        outline-offset: -2px;
        min-height: ${token?.sizeXL * 2}px;
    `
};
