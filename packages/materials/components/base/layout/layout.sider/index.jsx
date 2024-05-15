import {Layout} from 'antd';
import {craft} from '../../../_utils/utils';
import {useComponent} from '../../../useComponent';
import meta from './meta';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';

function Sider(props) {
    const {state, connectDrag} = useComponent(props);

    if (!state) return null;

    const {children, style, ...other} = state;

    return (
        <Layout.Sider ref={connectDrag} style={style} {...other}>
            {children}
        </Layout.Sider>
    );
}

Sider.craft = craft(meta);

export default memo(Sider, equal);
