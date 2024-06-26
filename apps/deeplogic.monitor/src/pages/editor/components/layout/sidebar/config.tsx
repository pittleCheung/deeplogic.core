import { LayoutFill, LayoutLine, PagesFill, PagesLine, StackFill, StackLine } from '@/components/icons';
import { Space } from 'antd';

export function tabs(active) {
  return [
    {
      label: (
        <Space>
          {active === 'pages' ? <PagesFill /> : <PagesLine />}
          <div>页面</div>
        </Space>
      ),
      value: 'pages'
    },
    {
      label: (
        <Space>
          {active === 'layers' ? <StackFill /> : <StackLine />}
          <div>图层</div>
        </Space>
      ),
      value: 'layers'
    },
    {
      label: (
        <Space>
          {active === 'components' ? <LayoutFill /> : <LayoutLine />}
          <div>组件</div>
        </Space>
      ),
      value: 'components'
    }
  ];
}
