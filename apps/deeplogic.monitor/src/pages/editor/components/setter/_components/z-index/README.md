# ZIndex 组件文档

## 概述

`ZIndex` 组件提供了一个界面，让用户可以通过点击按钮来调整元素的层级（`zIndex`
属性）。它包括将元素移至顶层、底层、向上移动一层和向下移动一层的操作。该组件利用`useSetter`自定义Hook来管理和应用样式更改。

## 代码导入

```javascript
import ZIndex from '路径/to/ZIndex';
```

## 功能特性

- **层级调整**：提供四种操作，分别是移至顶层、底层、向上移一层、向下移一层，满足不同的层级调整需求。
- **自动管理zIndex**：通过内部状态自动管理`zIndex`的值，确保值的正确性和有效性。
- **使用自定义Hook**：通过`useSetter`Hook获取当前样式数据并执行更改操作。

## 使用示例

```jsx
function App() {
  // 假设useSetter Hook已正确设置并可以提供styleData和onChange方法
  return <ZIndex />;
}
```

## 组件属性

该组件不接收外部传入的props，所有操作和配置都是内部实现的。它依赖`useSetter`Hook来获取和设置样式数据。

## 样式定制

组件的样式通过修改`_style`文件进行定制，并使用`classnames`库来动态添加CSS类。组件样式利用`theme.useToken`
适应不同的主题风格，实现样式的动态调整。

## 注意事项

- 确保`antd`库已正确安装并可以使用。
- 组件的功能依赖于`useSetter`自定义Hook，请确保该Hook已正确实现并能提供必要的数据和方法。
- `zIndex`的值被限制在0到960之间，以避免不必要的层级冲突。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 官方文档](https://ant.design/)
- [Classnames 库](https://www.npmjs.com/package/classnames)
