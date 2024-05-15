import {Radio as AntRadio} from 'antd';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';
import {craft} from '../../../_utils/utils';
import Drag from '../../../common/drag';
import {useComponent} from '../../../useComponent';
import {onChange} from '../_helper';
import meta from './meta';

function Radio(props) {
    const {state, connectDrag} = useComponent(props);

    if (!state) return null;

    const {events, displayName, ...rest} = state;

    return (
        <Drag connectDrag={connectDrag} style={{width: 'fit-content'}}>
            <AntRadio.Group onChange={(value) => onChange?.({state, value})} {...rest} />
        </Drag>
    );
}

Radio.craft = craft(meta);

export default memo(Radio, equal);
