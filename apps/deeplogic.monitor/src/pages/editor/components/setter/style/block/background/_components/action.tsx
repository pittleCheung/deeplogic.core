import image from '@/assets/building.png';
import { AddLine, BrushLine, ImageLine } from '@/components/icons';
import { Dropdown } from 'antd';
import { nanoid } from 'nanoid';
import { Panel } from '../../../../_components';

const items = [
  {
    label: '图片',
    key: 'image',
    icon: <ImageLine />
  },
  {
    label: '纯色',
    key: 'color',
    icon: <BrushLine />
  }
];

const values = {
  image,
  color: 'rgba(255, 255, 255, 1)'
};

function AddAction({ onAdd }) {
  return (
    <Dropdown
      menu={{
        items,
        onClick: ({ key }) => {
          const id = nanoid(10);
          onAdd({
            id,
            type: key,
            key: id,
            value: values[key],
            disabled: false
          });
        }
      }}
      trigger={['click']}
      placement='bottomLeft'
    >
      <Panel.Action>
        <AddLine />
      </Panel.Action>
    </Dropdown>
  );
}

export default AddAction;
