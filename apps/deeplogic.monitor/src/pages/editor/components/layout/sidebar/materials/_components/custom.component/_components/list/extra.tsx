import { More2Line } from '@/components/icons';
import { Dropdown } from 'antd';
import { useSidebar } from '../../../../../../../hooks';
import { rightMenu } from '../_config';

function CustomItem({ uid }) {
  const { materials } = useSidebar();
  const { onRemoveCategory } = materials?.custom;

  const onClick = ({ key }) => {
    switch (key) {
      case 'delete':
        onRemoveCategory({ uctid: uid });
        break;
      default:
        return;
    }
  };

  return (
    <Dropdown menu={{ items: rightMenu, onClick }}>
      <More2Line />
    </Dropdown>
  );
}

export default CustomItem;
