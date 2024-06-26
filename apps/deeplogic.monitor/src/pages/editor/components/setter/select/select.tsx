import { Select } from 'antd';
import { object2Options } from '../_helper/utils';

function SelectSetter() {
  return <Select options={object2Options(item?.values)} allowClear />;
}

export default SelectSetter;
