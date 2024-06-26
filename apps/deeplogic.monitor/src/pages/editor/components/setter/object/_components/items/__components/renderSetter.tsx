import { Form } from 'antd';
import { createElement } from 'react';
import useObject from '../../../../_hooks/useObject';
import { setters } from '../../../../index';

function RenderSetter(props) {
  const params = useObject();
  const { setter, name, ...other } = props;

  return (
    <Form.Item name={name} noStyle>
      {createElement(setters[setter.component], {
        ...other,
        ...params,
        setter
      })}
    </Form.Item>
  );
}

export default RenderSetter;
