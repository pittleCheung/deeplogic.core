import Code from '@/components/code';
import { theme } from 'antd';
import { Field, Popover } from '../_components';
import cls from './_style';

function JSONSetter({ value, onChange }) {
  const { token } = theme.useToken();
  return (
    <Field>
      <Popover
        content={
          <Code
            value={value ? JSON.stringify(value, null, 2) : ''}
            onChange={onChange}
            style={{ width: 240, height: 240, minHeight: 240 }}
          />
        }
      >
        <div className={cls.text(token)}>查看数据</div>
      </Popover>
    </Field>
  );
}

export default JSONSetter;
