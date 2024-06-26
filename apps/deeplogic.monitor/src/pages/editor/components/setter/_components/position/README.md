# Position 组件文档

## 概述

`Position` 组件是一个用于选择位置配置的组件，提供了一个视觉化的界面，允许用户从预定义的位置选项中选择。它通过更改组件的激活状态来反映当前选中的位置，并通过回调函数返回所选位置的值。

## 代码导入

```javascript
import Position from '路径/to/Position';
```

## 属性

| 属性名        | 类型       | 默认值 | 说明                    |
|------------|----------|-----|-----------------------|
| `onChange` | function | -   | 位置变化时的回调函数，参数为选中位置的值。 |

## 使用示例

```jsx
<Position
  onChange={(value) => console.log('选中的位置:', value)}
/>
```

## 功能特性

- **位置选择**：用户可以通过点击不同的位置选项来选择位置。每个位置选项是一个视觉化的方块，代表了一个特定的位置配置。
- **动态样式**：利用`@emotion/css`的`cx`函数结合`theme.useToken`动态调整样式，以适应不同的主题和状态变化。
- **响应式设计**：组件样式响应式地适应各种屏幕尺寸，确保在不同设备上的兼容性和用户体验。

## 样式定制

组件的样式通过`_style`文件进行管理，包括基础的渐变背景(`gradient`)和选项样式(`gradientItem`与`gradientItemActive`)
。利用`theme.useToken`可以根据当前主题动态调整样式。

## 注意事项

- 确保`@emotion/css`和`antd`依赖已正确安装于项目中。
- 组件状态管理依赖于`useState` Hook，请确保在支持Hooks的React版本中使用该组件。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 组件库](https://ant.design/)
- [@emotion/css 文档](https://emotion.sh/docs/@emotion/css)
