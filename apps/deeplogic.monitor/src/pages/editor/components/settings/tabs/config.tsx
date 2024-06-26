import { IconColorPalette, IconConnectionPoint1, IconServer } from '@douyinfe/semi-icons';
import { Space } from 'antd';

export const tabs = [
  {
    label: (
      <Space>
        <IconColorPalette />
        属性
      </Space>
    ),
    key: 'props'
  },
  {
    label: (
      <Space>
        <IconServer />
        样式
      </Space>
    ),
    key: 'style'
  },
  {
    label: (
      <Space>
        <IconConnectionPoint1 />
        事件
      </Space>
    ),
    key: 'events'
  }
];
