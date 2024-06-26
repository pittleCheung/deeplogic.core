import { Input } from 'antd';

function StringSetter({ value, onChange }) {
  return <Input value={value} onChange={onChange} placeholder='请输入' allowClear />;
}

export default StringSetter;
