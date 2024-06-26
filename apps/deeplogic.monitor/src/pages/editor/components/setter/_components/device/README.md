# Device 组件文档

`Device` 组件基于 `antd` 的 `TreeSelect` 组件封装，旨在提供一个树形选择控件，允许用户从嵌套的数据结构中选择单个设备。该组件适用于需要用户绑定设备的场景，如设备管理或配置界面。

## 属性

| 属性         | 类型            | 默认值 | 描述                |
|------------|---------------|-----|-------------------|
| `value`    | string/number | -   | 当前选中的设备值。         |
| `items`    | object        | -   | 包含设备树数据的对象。       |
| `onChange` | function      | -   | 选中项变化时的回调函数。      |
| `parent`   | string/number | -   | 父节点的键值，用于定位子设备列表。 |

## 使用示例

```jsx
import React, { useState } from 'react';
import Device from './Device';

const deviceList = {
  children: [
    {
      title: '设备1',
      value: 'device1',
      children: [
        { title: '子设备1', value: 'subdevice1' },
        // 更多子设备...
      ],
    },
    // 更多设备...
  ],
};

const App = () => {
  const [selectedDevice, setSelectedDevice] = useState();

  return (
    <Device
      value={selectedDevice}
      items={deviceList}
      onChange={setSelectedDevice}
      parent="device1"
    />
  );
};

export default App;
```
