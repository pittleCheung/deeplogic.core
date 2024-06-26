[# SortableList 组件文档

## 概述

`SortableList` 组件是一个基于`@dnd-kit/core`和`@dnd-kit/sortable`
构建的可排序列表组件。它允许用户通过拖拽操作来重新排序列表项。该组件支持键盘和鼠标（或指针）两种排序方式，并提供了平滑的拖拽动画效果。

## 类型定义

```typescript
interface BaseItem {
  id: UniqueIdentifier;
}

interface Props<T extends BaseItem> {
  items: T[];

  onChange(items: T[]): void;

  renderItem(item: T, index: number): ReactNode;
}
```

- `BaseItem`: 基础项接口，每个项都应有一个唯一标识符`id`。
- `Props`: 组件属性，泛型`T`继承自`BaseItem`。

## 代码导入

```javascript
import { SortableList } from '路径/to/SortableList';
```

## 属性

| 属性名          | 类型                                      | 说明                                 |
|--------------|-----------------------------------------|------------------------------------|
| `items`      | `T[]`                                   | 列表项数据，每个项应包含一个唯一标识符`id`。           |
| `onChange`   | `(items: T[]) => void`                  | 在列表项重新排序后的回调函数，参数为重新排序后的列表项数组。     |
| `renderItem` | `(item: T, index: number) => ReactNode` | 渲染列表项的函数，接受当前项和索引作为参数，返回一个React节点。 |

## 使用示例

```jsx
const items = [
  { id: 'item1', content: 'Item 1' },
  { id: 'item2', content: 'Item 2' }
];

function renderItem(item, index) {
  return (
    <SortableList.Item id={item.id} key={item.id}>
      <SortableList.DragHandle />
      {item.content}
    </SortableList.Item>
  );
}

function handleOnChange(newItems) {
  console.log('Sorted items:', newItems);
}

<SortableList items={items} onChange={handleOnChange} renderItem={renderItem} />;
```

## 功能特性

- **拖拽排序**：通过拖拽操作来重新排序列表项。
- **键盘排序**：支持使用键盘操作进行排序，提高无障碍性。
- **自定义渲染**：通过`renderItem`函数自定义每个列表项的渲染。
- **动画效果**：使用`SortableOverlay`展示拖拽时的动画效果。

## 样式定制

组件的样式可以通过修改`sortable.less`文件来定制。通过使用`classnames`库，可以方便地添加或修改CSS类来调整样式。

## 注意事项

- 确保已正确安装`@dnd-kit/core`和`@dnd-kit/sortable`库。
- 列表项的唯一标识符`id`在整个列表中必须是唯一的。

## 扩展阅读

- [@dnd-kit/core 官方文档](https://dndkit.com/)
- [@dnd-kit/sortable 官方文档](https://dndkit.com/docs/presets/sortable)
