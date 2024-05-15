import {Layout} from 'antd';
import {craft} from '../../../_utils/utils';
import {useComponent} from '../../../useComponent';
import meta from './meta';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';

function Footer(props) {
    const {state, connectDrag} = useComponent(props);

    if (!state) return null;

    const {children, style, title, subTitle} = state;

    return (
        <Layout.Footer ref={connectDrag} style={{textAlign: 'center', ...style}}>
            {children || (
                <div>
                    {title && <div>{title}</div>}
                    {subTitle && <div>{subTitle}</div>}
                </div>
            )}
        </Layout.Footer>
    );
}

Footer.craft = craft(meta);

export default memo(Footer, equal);
