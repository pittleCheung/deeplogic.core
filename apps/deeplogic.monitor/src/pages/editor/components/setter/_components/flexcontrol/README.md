# FlexControl 组件文档

## 概述

`FlexControl` 组件提供了一个可视化的界面来控制Flex布局的属性，如对齐方式和分布方式。用户可以通过交互式的界面选择不同的布局配置，并实时预览效果。

## 代码导入

```javascript
import FlexControl from '路径/to/FlexControl';
```

## 属性

| 属性名        | 类型       | 默认值 | 说明                |
|------------|----------|-----|-------------------|
| `value`    | Object   | -   | 组件的当前值，包含布局的配置信息。 |
| `onChange` | function | -   | 当布局配置变化时的回调函数。    |

## 使用示例

```jsx
<FlexControl
  value={{ alignItems: 'center', justifyContent: 'space-between' }}
  onChange={(value) => console.log('布局配置变化:', value)}
/>
```

## 功能特性

- **对齐方式选择**：通过上下箭头和下拉选择框，用户可以选择不同的对齐方式，如`alignItems`的配置。
- **布局预览**：中间的预览区域将展示当前布局配置的效果，支持鼠标悬浮预览不同布局配置。
- **主轴对齐方式选择**：通过左右箭头和下拉选择框，用户可以选择不同的主轴对齐方式，如`justifyContent`的配置。

## 样式定制

组件的样式可以通过修改`flexcontrol.less`文件来定制。此外，组件内部使用`css`模块化方法引入样式，确保了样式的封装性和可维护性。

## 注意事项

- 确保`antd`库和React环境已正确设置并可用。
- 组件依赖`useState` Hook来管理内部状态，请确保在支持Hooks的React版本中使用该组件。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 组件库](https://ant.design/)
- [Flex布局教程](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

```
