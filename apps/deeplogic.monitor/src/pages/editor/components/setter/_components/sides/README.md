# Sides 组件文档

## 概述

`Sides` 组件提供了一个界面，允许用户为上、下、左、右四个方向分别设置数值。该组件结合了动画效果，可以根据`open`属性的变化平滑地显示或隐藏。

## 代码导入

```javascript
import Sides from '路径/to/Sides';
```

## 属性

| 属性名        | 类型       | 默认值                                        | 说明                        |
|------------|----------|--------------------------------------------|---------------------------|
| `open`     | boolean  | -                                          | 控制组件的显示与隐藏。               |
| `value`    | Object   | `{ top: 0, right: 0, bottom: 0, left: 0 }` | 包含四个方向数值的对象。              |
| `onChange` | function | -                                          | 在数值变化时的回调函数，参数为变化的方向和新的值。 |

## 使用示例

```jsx
<Sides
  open={true}
  value={{ top: 10, right: 5, bottom: 10, left: 5 }}
  onChange={({ key, value }) => console.log(`${key} changed to ${value}`)}
/>
```

## 功能特性

- **四方向数值设置**：允许用户为上、下、左、右四个方向分别设置数值。
- **动画效果**：利用`framer-motion`实现的平滑过渡动画，在组件显示和隐藏时提供更好的用户体验。
- **灵活的数据结构**：通过`value`属性接收一个对象，该对象包含四个方向的数值，方便外部控制和访问。

## 样式定制

组件的样式通过`_style`文件进行管理，并使用`css`模块来避免样式冲突。通过修改`_style`文件，可以轻松定制组件的样式以适应不同的设计需求。

## 注意事项

- 组件依赖于`antd`的`InputNumber`和`Row`、`Col`布局组件，请确保已正确安装`antd`。
- 使用`AnimatePresence`和`motion.div`来实现动画效果，确保`framer-motion`库已被安装和导入。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 官方文档](https://ant.design/)
- [Framer Motion 官方文档](https://www.framer.com/motion/)
