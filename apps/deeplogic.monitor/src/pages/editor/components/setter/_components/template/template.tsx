import { theme, Typography } from 'antd';
import Field from '../field';
import Popover from '../popover';
import { TemplatePicker } from './_components';
import cls from './_style';

function Template(props) {
  const { token } = theme.useToken();

  return (
    <Popover content={<TemplatePicker templates={props?.values} value={props?.value} onChange={props?.onChange} />}>
      <Field className={cls.box(token)}>
        <Typography.Text>模板</Typography.Text>
      </Field>
    </Popover>
  );
}

export default Template;
