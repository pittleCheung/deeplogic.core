import { Collapse, theme } from 'antd';
import cls from 'classnames';
import { useSidebar } from '../../../../../../../hooks';
import css from './_style';
import ComponentItem from './item';
import { formatCustomComponents } from './utils';

function CustomList(props) {
  const { materials } = useSidebar();
  const { customs } = materials?.custom;
  const { token } = theme?.useToken() || {};

  const items = formatCustomComponents(customs, ComponentItem);

  return (
    <Collapse
      ghost
      size="small"
      border={false}
      items={items}
      bordered={false}
      showArrow={false}
      collapsible="header"
      className={cls(css?.collapse(token))}
    />
  );
}

export default CustomList;
