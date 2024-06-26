import { Form, theme } from 'antd';
import cls from 'classnames';
import { useEffect } from 'react';
import { EventForm } from './__components';
import { EventProvider } from './__hooks/useEvent';
import css from './_style';

function EventContent(props) {
  const { token } = theme.useToken();
  const [form] = Form.useForm();

  const onValuesChange = () => {
    props?.onChange?.(form.getFieldsValue());
  };

  useEffect(() => {
    if (props?.values && props?.values[props?.name]) {
      form.setFieldsValue(props?.values);
    }
  }, [props?.values]);

  return (
    <EventProvider {...props} form={form}>
      <Form form={form} className={cls(css.actions(token))} onValuesChange={(values) => onValuesChange(values)}>
        <EventForm />
      </Form>
    </EventProvider>
  );
}

export default EventContent;
