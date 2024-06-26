import { Form } from 'antd';
import useSetter from '../_hooks/useSetter';
import ArraySetter from '../array';

function Series({ values, name, setter, ...props }) {
  const { series } = values?.option;
  const setters = useSetter();

  return (
    <Form.Item name={name} noStyle>
      <ArraySetter {...props} {...setters} attribute={setter?.props} value={series} onChange={() => {}} />
    </Form.Item>
  );
}

export default Series;
