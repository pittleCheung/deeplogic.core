import { theme, Tooltip } from 'antd';
import cls from 'classnames';
import { QuestionLine } from '@/components/icons';
import css from '../_style';

function Label({ title }) {
  const { token } = theme.useToken();

  return (
    <div className={cls(css.title(token))}>
      <span>{title?.label || title}</span>
      <Tooltip title={title?.tip} placement='bottom'>
        <QuestionLine className={cls(css.icon(token))} />
      </Tooltip>
    </div>
  );
}

export default Label;
