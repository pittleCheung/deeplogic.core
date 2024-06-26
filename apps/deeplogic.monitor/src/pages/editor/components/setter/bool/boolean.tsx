import { Switch } from 'antd';

function BooleanSetter({ value, onChange }) {
  return <Switch checked={!!value} onChange={onChange} />;
}

export default BooleanSetter;
