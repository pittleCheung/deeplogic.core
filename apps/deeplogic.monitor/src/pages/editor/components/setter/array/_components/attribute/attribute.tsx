import { Form, theme } from 'antd';
import { useEffect } from 'react';
import ObjectSetter from '../../../object';
import useArray from '../../_hooks/useArray';
import cls from './_style';

function Attribute({ value, onChange }) {
  const [form] = Form.useForm();
  const { token } = theme.useToken();
  const { pages, attribute, ...other } = useArray();

  useEffect(() => {
    if (value) form.setFieldsValue(value);
  }, [value]);

  return (
    <Form form={form} onValuesChange={() => onChange?.(form.getFieldsValue())} className={cls.formContent(token)}>
      <ObjectSetter {...other} items={attribute} pages={pages} />
    </Form>
  );
}

export default Attribute;
