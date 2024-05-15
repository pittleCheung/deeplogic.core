import {DatePicker as AntDatePicker} from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import weekday from "dayjs/plugin/weekday"
import localeData from "dayjs/plugin/localeData"
import customParseFormat from 'dayjs/plugin/customParseFormat';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';
import {craft} from '../../../_utils/utils';
import Drag from '../../../common/drag';
import {useComponent} from '../../../useComponent';
import {onChange} from '../_helper';
import meta from './meta';

dayjs.extend(customParseFormat);
dayjs.extend(weekday)
dayjs.extend(localeData)

function DatePicker(props) {
    const {state, setProps, connectDrag} = useComponent(props);

    if (!state) return null;

    const {events, displayName, range, ...rest} = state;

    const handelChange = (date) => {
        if (!state?.events?.onChange) return;
        const dateTime = dayjs(date)?.format();
        const {action, link} = state?.events?.onChange;

        if (action === 'linkTo' && link) {
            setProps(link.component, {[link.props]: dateTime});
        } else {
            onChange?.({state, value: dateTime});
        }
    };
    const now = dayjs().format('YYYY-MM-DD')
    return (
        <Drag connectDrag={connectDrag} style={{width: 'fit-content'}}>
            {range ? (
                <AntDatePicker.RangePicker onChange={handelChange} {...rest} locale={locale}/>
            ) : (
                <AntDatePicker onChange={handelChange} defaultValue={dayjs(now,'YYYY-MM-DD')} {...rest} locale={locale}/>
            )}
        </Drag>
    );
}

DatePicker.craft = craft(meta);

export default memo(DatePicker, equal);
