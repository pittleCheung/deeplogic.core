import {css} from '@emotion/css';

export default {
    tabs: (token) => css`
        .ant-tabs-tab + .ant-tabs-tab {
            margin-left: ${token?.margin}px !important;
        }
    `
};

