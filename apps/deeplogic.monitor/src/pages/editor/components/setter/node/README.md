# NodeSetter 组件文档

## 概述

`NodeSetter` 组件提供了一个配置界面，用于设置节点（例如图形元素）的样式属性，如层级（`zIndex`）、尺寸（`size`）、边框（`border`
）和填充色（`fill`）。它通过动态渲染指定的设置项，为用户提供了一个灵活的节点样式配置工具。

## 代码导入

```javascript
import NodeSetter from '路径/to/NodeSetter';
```

## 属性说明

| 属性名    | 类型    | 说明                                                        |
|--------|-------|-----------------------------------------------------------|
| `show` | array | 一个包含需要显示的设置项键名的数组。支持的键名包括`zIndex`、`size`、`border`和`fill`。 |

## 使用示例

```jsx
function ExampleComponent() {
  const settingsToShow = ['zIndex', 'size', 'border', 'fill'];

  return (
    <NodeSetter show={settingsToShow} />
  );
}
```

## 功能特性

- **灵活的设置项展示**：根据`show`属性中指定的键名动态渲染节点的设置项。
- **集成多种设置组件**：集成了`ZIndex`、`Size`、`Border`、`Fill`等多个设置组件，每个组件负责节点的一个具体样式属性。
- **支持自定义扩展**：可以轻松地扩展或替换内置的设置组件，以满足特定需求。

## 样式定制

由于`NodeSetter`组件主要作为设置项的容器，其样式定制主要集中于内嵌的设置组件（如`ZIndex`、`Size`
等）。每个设置组件的样式可以通过对应的`_style`文件进行定制。

## 注意事项

- 确保所有在`show`属性中引用的设置组件都已正确实现并可以使用。
- 考虑到组件的灵活性和可扩展性，建议维护好每个设置组件的接口一致性和样式一致性。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 官方文档](https://ant.design/)
