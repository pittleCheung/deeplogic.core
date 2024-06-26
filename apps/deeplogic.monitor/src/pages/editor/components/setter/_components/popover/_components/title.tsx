import { theme } from 'antd';
import cls from 'classnames';
import css from './_style';

function PopoverTitle({ title }) {
  const { token } = theme.useToken();

  return (
    <div className={cls(css.title(token))}>
      <div>{title}</div>
    </div>
  );
}

export default PopoverTitle;
