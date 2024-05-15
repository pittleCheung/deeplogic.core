import {Select as AntSelect} from 'antd';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';
import {craft} from '../../../_utils/utils';
import Drag from '../../../common/drag';
import {useComponent} from '../../../useComponent';
import {onChange} from '../_helper';
import meta from './meta';

function Select(props) {
    const {state, query, connectDrag} = useComponent(props);

    if (!state) return null;

    const {events, displayName, ...rest} = state;

    return (
        <Drag connectDrag={connectDrag}>
            <AntSelect style={{width: '100%'}} onChange={(value) => onChange?.({state, value})} {...rest} />
        </Drag>
    );
}

Select.craft = craft(meta);

export default memo(Select, equal);
