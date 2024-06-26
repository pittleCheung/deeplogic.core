import { Form, InputNumber } from 'antd';
import { Color, Panel } from '../_components';
import ThemeCheckBox from './_components/checkbox';

const defaultItem = {
  labelCol: { span: 8 },
  labelAlign: 'left',
  colon: false
};

function ThemeSetter({ title, setProp, value }) {
  return (
    <Panel title={title?.label || title} open>
      <Form.Item {...defaultItem} label='主题风格' name={['theme', 'algorithm']}>
        <ThemeCheckBox setProp={setProp} />
      </Form.Item>
      <Form.Item {...defaultItem} label='主题色' name={['theme', 'token', 'colorPrimary']}>
        <Color />
      </Form.Item>
      <Form.Item {...defaultItem} label='圆角' name={['theme', 'token', 'borderRadius']}>
        <InputNumber
          min={0}
          style={{
            width: '100%'
          }}
        />
      </Form.Item>
    </Panel>
  );
}

export default ThemeSetter;
