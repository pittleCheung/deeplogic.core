import {Breadcrumb as AntdBreadcrumb} from 'antd';
import {craft} from '../../../_utils/utils';
import Drag from '../../../common/drag';
import {useComponent} from '../../../useComponent';
import meta from './meta';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';

function Breadcrumb(props) {
    const {state, connectDrag} = useComponent(props);

    return (
        <Drag connectDrag={connectDrag}>
            <AntdBreadcrumb {...state} />
        </Drag>
    );
}

Breadcrumb.craft = craft(meta);

export default memo(Breadcrumb, equal);
