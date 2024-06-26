import { DatePicker as AntDatePicker } from 'antd';
import dayjs from 'dayjs';
import { isArray } from '../../_helper/utils';

function DatePicker(props) {
  const picker = props?.relatedProps ? props?.form.getFieldValue(props?.relatedProps) : '';

  const params = {
    value: isArray(props?.value)
      ? props?.value?.map((item) => (item ? dayjs(item) : ''))
      : props?.value
        ? dayjs(props?.value)
        : '',
    picker,
    onChange: (date) => {
      if (isArray(date)) {
        const day = date?.map((item) => (item ? dayjs(item)?.format() : ''));
        console.log(day);
        props?.onChange?.(day);
      } else {
        const day = date ? dayjs(date)?.format() : '';
        props?.onChange?.(day);
      }
    },
    showTime: props?.showTime
  };

  return props?.isRange ? <AntDatePicker.RangePicker {...params} /> : <AntDatePicker {...params} />;
}

export default DatePicker;
