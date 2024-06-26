import { Form, Input, theme } from 'antd';
import cls from 'classnames';
import { useEffect } from 'react';
import css from './_style';

function CreateCategory({ onChange }) {
  const [form] = Form.useForm();
  const { token } = theme.useToken();

  useEffect(() => {
    onChange?.(form);
  }, [form]);

  return (
    <Form form={form} className={cls(css.content(token))} onValuesChange={() => onChange?.(form)}>
      <Form.Item name='name' rules={[{ required: true, message: '请输入分类名称' }]}>
        <Input placeholder='请输入分类名称' />
      </Form.Item>
    </Form>
  );
}

export default CreateCategory;
