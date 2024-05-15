import {Checkbox as AntCheckbox} from 'antd';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';
import {craft, isArray} from '../../../_utils/utils';
import Drag from '../../../common/drag';
import {useComponent} from '../../../useComponent';
import meta from './meta';

function Checkbox(props) {
    const {id, state, connectDrag, setProps} = useComponent(props);

    if (!state) return null;

    const {events, displayName, onChange, label, ...rest} = state;

    const handleChange = (value) => {
        // console.log('valuevaluevalue', value.target.checked, Number(value.target.checked))
        setProps(id, {value: Number(value.target.checked)});
        onChange?.({state, value: Number(value.target.checked)});
    };
    return (
        <Drag connectDrag={connectDrag} style={{width: 'fit-content'}}>
            <AntCheckbox {...rest} checked={Number(state.value) || false} onChange={handleChange}>{label}</AntCheckbox>
        </Drag>
    );
}

Checkbox.craft = craft(meta);

export default memo(Checkbox, equal);
