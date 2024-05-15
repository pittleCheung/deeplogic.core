import {css} from '@emotion/css';

export default {
    container: (token) => css`
        padding: ${token?.paddingXS}px;
        outline: 1px dashed ${token?.colorInfoBgHover};
        background: ${token?.colorInfoBg};
    `
};
