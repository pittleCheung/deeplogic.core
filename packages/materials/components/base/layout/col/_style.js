import { css } from '@emotion/css';

export default {
	col: (token, children) => {
        return css`
		//background: ${token.colorInfoBg};
		outline: 1px dashed ${token.colorInfoBorder};
		outline-offset: -2px;
		min-height: ${children ? token.sizeSM : token.sizeXL}px;
	`}
};
