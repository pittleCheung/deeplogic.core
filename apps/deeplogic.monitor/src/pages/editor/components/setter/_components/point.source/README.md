# PointSource 组件文档

## 概述

`PointSource` 组件提供了一个基于`Popover`的点源选择器。它利用`PointPicker`
组件来允许用户从一个列表中搜索并选择一个点。这个组件主要用于在用户界面上提供一个简洁的入口，点击后弹出详细的点选择器。

## 代码导入

```javascript
import PointSource from '路径/to/PointSource';
```

## 属性

| 属性名        | 类型       | 默认值 | 说明                           |
|------------|----------|-----|------------------------------|
| `value`    | string   | -   | 当前选中的点的值。                    |
| `projId`   | string   | -   | 项目ID，用于`PointPicker`搜索时作为参数。 |
| `onChange` | function | -   | 当选中的点发生变化时的回调函数。             |

## 使用示例

```jsx
<PointSource
  value="selectedValue"
  projId="yourProjectId"
  onChange={(newValue) => console.log('选中的点:', newValue)}
/>
```

## 功能特性

- **集成点选择器**：通过点击字段来激活`Popover`，其中嵌入了`PointPicker`组件，实现点的搜索和选择功能。
- **简洁的界面展示**：在界面上以`Field`组件形式展示当前选中的点，点击后提供完整的搜索和选择功能。
- **自定义点选改变事件**：支持`onChange`事件，当点选发生变化时，可执行回调函数。

## 样式定制

组件的样式可以通过相应的CSS文件(`Field`和`Popover`的样式)来进行定制。通过调整`Popover`的`align`属性，可以控制弹出层的位置。

## 注意事项

- 该组件作为`PointPicker`的触发器使用，确保`PointPicker`组件已正确实现并能在`Popover`中正常工作。
- 保证`projId`属性正确传递给`PointPicker`，以便于正确执行搜索操作。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 组件库](https://ant.design/)
