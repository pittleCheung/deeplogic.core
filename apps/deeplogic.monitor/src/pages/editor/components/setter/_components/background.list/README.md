# BackgroundList 组件文档

`BackgroundList` 是一个React组件，用于展示和管理一个可排序的背景项列表。它利用了 `SortableList`
组件实现拖放功能，并通过 `BackgroundItem` 组件来渲染单个项。当用户需要在图形编辑器或设置面板中组织或优先级排序一系列元素时，此组件尤为适用。

## 属性

| 属性             | 类型       | 默认值  | 描述                                            |
|----------------|----------|------|-----------------------------------------------|
| `items`        | array    | `[]` | 要显示的项列表。每个项对象应包含 `BackgroundItem` 需要的所有属性。    |
| `onDragChange` | function | -    | 当项的顺序由于拖放操作而改变时调用的回调函数。                       |
| `onChange`     | function | -    | 传递给每个 `BackgroundItem` 的回调函数，当某个项改变时调用。       |
| `onDisable`    | function | -    | 传递给每个 `BackgroundItem` 的回调函数，当某个项的禁用状态被切换时调用。 |
| `onRemove`     | function | -    | 传递给每个 `BackgroundItem` 的回调函数，当某个项被移除时调用。      |

## 使用示例

以下是如何使用 `BackgroundList` 组件的示例：

```jsx
import React, { useState } from 'react';
import BackgroundList from './BackgroundList';

function MyComponent() {
  const [backgrounds, setBackgrounds] = useState([
    { id: 'bg1', name: '背景1', enabled: true },
    { id: 'bg2', name: '背景2', enabled: false },
    // 根据需要添加更多背景
  ]);

  const handleDragChange = (newItems) => {
    setBackgrounds(newItems);
  };

  const handleChange = (id, newProps) => {
    const updatedBackgrounds = backgrounds.map((item) =>
      item.id === id ? { ...item, ...newProps } : item
    );
    setBackgrounds(updatedBackgrounds);
  };

  const handleDisable = (id) => {
    // 禁用切换的实现
  };

  const handleRemove = (id) => {
    const filteredBackgrounds = backgrounds.filter(item => item.id !== id);
    setBackgrounds(filteredBackgrounds);
  };

  return (
    <BackgroundList
      items={backgrounds}
      onDragChange={handleDragChange}
      onChange={handleChange}
      onDisable={handleDisable}
      onRemove={handleRemove}
    />
  );
}

export default MyComponent;
