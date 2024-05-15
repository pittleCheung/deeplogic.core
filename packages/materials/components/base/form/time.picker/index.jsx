import {TimePicker as AntTimePicker} from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';
import {craft} from '../../../_utils/utils';
import Drag from '../../../common/drag';
import {useComponent} from '../../../useComponent';
import {onChange} from '../_helper';
import meta from './meta';

dayjs.extend(customParseFormat);

function TimePicker(props) {
    const {state, setProps, connectDrag} = useComponent(props);

    if (!state) return null;

    const {events, displayName, ...rest} = state;

    const handleChange = (date) => {
        if (!state?.events?.onChange) return;

        const {action, link} = state?.events?.onChange;
        if (action === 'linkTo' && link) {
            setProps(link.component, {[link.props]: dayjs(date)?.format()});
        } else {
            onChange?.({state, value: dateTime});
        }
    };

    return (
        <Drag connectDrag={connectDrag} style={{width: 'fit-content'}}>
            <AntTimePicker defaultValue={dayjs('00:00:00', 'HH:mm:ss')} locale={locale}
                           onChange={handleChange} {...rest} />
        </Drag>
    );
}

TimePicker.craft = craft(meta);

export default memo(TimePicker, equal);
