import { BringForward, BringToFront, SendBackward, SendToBack } from '@/components/icons';
import { Tooltip } from 'antd';
import { createElement } from 'react';

const create = (title, icon) => {
  return createElement(Tooltip, { title }, createElement(icon, { style: { fontSize: 16 } }));
};

export default [
  {
    label: create('置于顶层', BringToFront),
    value: 'Top',
  },
  {
    label: create('上移一层', BringForward),
    value: 'MoveUp',
  },
  {
    label: create('下移一层', SendBackward),
    value: 'MoveDown',
  },
  {
    label: create('至于底层', SendToBack),
    value: 'Bottom',
  },
];
