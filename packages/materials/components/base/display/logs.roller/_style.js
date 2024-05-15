import { css } from '@emotion/css';

export default {
  logroller:(state, token)=>css`
      & .ant-timeline .ant-timeline-item {
          padding-bottom: ${token.sizeXXS}px;
      }

      & .ant-timeline .ant-timeline-item-last > .ant-timeline-item-content {
          min-height: unset;
      }

      & .ant-timeline .ant-timeline-item-head {
        //   inset-block-start: 8px;
        background-color: transparent;
      }
      & .ant-timeline .ant-timeline-item-head-custom {
        inset-block-start: 9px;
        inset-inline-start: 7px
      }

      & .ant-timeline .ant-timeline-item-content {
          margin-inline-start: 16px;
          inset-block-start: unset;
      }
  `,
  title: (state, token) => css`
      color: ${state?.titleColor ?? token.colorText};
      padding: 0.5rem 0;
  `,
  list: (state, token)=>css`
      overflow: auto;
  `,
  log: (state, token) => css`
      color: ${state?.logColor ?? token.colorText};
      margin-right: 4px;      
  `,
  time: (state, token) => css`
    color: ${state?.timeColor ?? token.colorTextTertiary};
  `,
  dot: (state, token) => css`
      background-color: ${state?.dotColor ?? token.colorPrimary};
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      -webkit-margin-end: 4px;
      margin-inline-end: 4px;
  `
};
