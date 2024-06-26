# IconPicker 组件文档

## 概述

`IconPicker` 组件允许用户从预设的图标库中选择一个图标。该组件集成了`Popover`来展示图标选择界面，以及`Field`
来显示当前选中的图标或提示信息。

## 代码导入

```javascript
import IconPicker from '路径/to/IconPicker';
```

## 属性

| 属性名        | 类型       | 默认值 | 说明              |
|------------|----------|-----|-----------------|
| `value`    | string   | -   | 当前选中的图标标识。      |
| `onChange` | function | -   | 当选中的图标变化时的回调函数。 |

## 使用示例

```jsx
<IconPicker
  value="icon-name"
  onChange={(key) => console.log('选中的图标:', key)}
/>
```

## 功能特性

- **图标选择**：点击`Field`组件将打开`Popover`，显示可供选择的图标列表。
- **动态图标显示**：根据`value`属性动态显示当前选中的图标。
- **回调函数**：选中图标后，`onChange`回调函数会被触发，参数为选中图标的`key`。

## 样式定制

组件的样式可以通过修改`_style`相关的CSS文件来定制。使用`cls`和`theme?.useToken`来实现样式的动态调整和主题的适配。

## 注意事项

- 确保`antd`库和React环境已正确设置并可用。
- 该组件使用了`memo`和`isEqualWith`来优化渲染性能，仅在相关props发生实质性变化时才会重新渲染。
- 组件依赖于`useState` Hook来管理内部状态，确保在支持Hooks的React版本中使用。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 组件库](https://ant.design/)
- [Lodash-es 文档](https://lodash.com/)

```
