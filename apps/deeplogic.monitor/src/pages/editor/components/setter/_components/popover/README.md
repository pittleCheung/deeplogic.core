# Popover 组件文档

## 概述

`Popover` 组件是一个基于`AntdPopconfirm`改造的弹出确认框组件。它支持自定义标题、内容，以及确认按钮的显示与隐藏。此组件的特色在于它可以自动调整弹出位置，以适应不同的屏幕宽度和弹出内容的宽度。

## 代码导入

```javascript
import Popover from '路径/to/Popover';
```

## 属性

`Popover`组件继承了`AntdPopconfirm`的所有属性，并添加了以下自定义属性：

| 属性名       | 类型                  | 默认值 | 说明                 |
|-----------|---------------------|-----|--------------------|
| `title`   | string \| ReactNode | -   | 自定义弹出框的标题。         |
| `content` | string \| ReactNode | -   | 自定义弹出框的内容。         |
| `isOk`    | boolean             | -   | 确定按钮是否显示，默认不传时不显示。 |

## 使用示例

```jsx
<Popover
  title="确认操作"
  content="您确定要执行此操作吗？"
  isOk={true}
  onConfirm={() => console.log('用户确认操作')}
>
  <Button>点击我</Button>
</Popover>
```

## 功能特性

- **自定义标题和内容**：可以通过`title`和`content`属性自定义弹出框的标题和内容。
- **自动调整弹出位置**：组件会根据触发元素在屏幕上的位置自动调整弹出框的位置，以避免超出屏幕边界。
- **控制确认按钮显示**：通过`isOk`属性控制确定按钮是否显示。

## 样式定制

组件的样式可以通过修改`_style`相关的CSS文件来定制。此外，组件通过`theme.useToken`来适应当前的主题样式，增强样式的一致性和可定制性。

## 注意事项

- 组件依赖于`antd`库中的`Popconfirm`组件，确保在使用前已正确安装`antd`。
- 该组件使用了`useRef`和`useState` Hook，请确保在支持Hooks的React版本中使用。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 官方文档](https://ant.design/components/popconfirm/)
