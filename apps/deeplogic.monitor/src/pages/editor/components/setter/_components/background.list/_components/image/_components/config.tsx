import background from '@/assets/building.png';
import { Form, Segmented, Select, theme } from 'antd';
import { isObject } from 'lodash-es';
import { useEffect } from 'react';
import useSetter from '../../../../../_hooks/useSetter';
import Position from '../../../../position';
import Upload from '../../../../upload';
import config from './_config.jsx';
import { imageForm, segmented } from './_style';

const { useToken } = theme;
const initValues = {
  backgroundImage: background,
  backgroundPosition: 'centerCenter',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'scroll'
};

function ImageConfig({ value, onChange }) {
  const { token } = useToken();
  const [form] = Form.useForm();
  const { onUpload } = useSetter();

  useEffect(() => {
    if (value) {
      if (isObject(value)) {
        form?.setFieldsValue(value);
      } else {
        form?.setFieldsValue({
          ...initValues,
          backgroundPosition: '50% 50%',
          backgroundImage: value
        });
      }
    }
  }, [value]);

  return (
    <Form
      form={form}
      labelCol={{ span: 8 }}
      colon={false}
      labelAlign={'left'}
      onValuesChange={() => onChange(form?.getFieldsValue())}
      initialValues={initValues}
      className={imageForm(token)}
    >
      <Form.Item name='backgroundImage'>
        <Upload onUpload={onUpload} />
      </Form.Item>
      <Form.Item label='重复方式' name='backgroundRepeat'>
        <Select options={config?.repeat} />
      </Form.Item>
      <Form.Item label='大小' name='backgroundSize'>
        <Segmented
          value={value?.backgroundSize || initValues?.backgroundSize}
          options={config?.size}
          className={segmented(token)}
        />
      </Form.Item>
      <Form.Item label='位置' name='backgroundPosition'>
        <Position />
      </Form.Item>
    </Form>
  );
}

export default ImageConfig;
