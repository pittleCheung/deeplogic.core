import { theme } from 'antd';
import cls from 'classnames';
import CustomComponentItem from '../item';
import css from './_style';

function CustomItem({ items }) {
  const { token } = theme?.useToken() || {};

  return (
    <ul className={cls(css?.list(token))}>
      {items?.map((item) => {
        return (
          <li key={item?.key} className={cls(css?.item(token))}>
            <CustomComponentItem {...item} />
          </li>
        );
      })}
    </ul>
  );
}

export default CustomItem;
