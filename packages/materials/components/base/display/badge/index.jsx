import {Badge as AntdBadge} from 'antd';
import {craft} from '../../../_utils/utils';
import Drag from '../../../common/drag';
import {useComponent} from '../../../useComponent';
import css from './index.module.less';
import meta from './meta';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';

function Badge(props) {
    const {state, connectDrag} = useComponent(props);

    return (
        <Drag connectDrag={connectDrag} style={{width: 'fit-content'}}>
            <AntdBadge {...state}>{state?.children || <div className={css.normalize}>拖入内容</div>}</AntdBadge>
        </Drag>
    );
}

Badge.craft = craft(meta);

export default memo(Badge, equal);
