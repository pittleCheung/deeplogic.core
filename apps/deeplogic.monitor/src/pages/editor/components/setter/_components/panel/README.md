# Panel 组件文档

## 概述

`Panel`
组件是一个可折叠的面板组件，支持动画效果，可以用来显示或隐藏内容。它提供了标题栏和额外操作按钮的插槽，以及可选的添加按钮和其回调函数。通过`framer-motion`
实现平滑的展开和收起动画。

## 代码导入

```javascript
import Panel from '路径/to/Panel';
```

## 子组件

### Action

用于渲染面板中的操作按钮，包括添加和折叠按钮。

### Body

用于包裹需要在面板中展示的内容，根据面板的展开状态显示或隐藏内容。

## 属性

`Panel`组件属性：

| 属性名         | 类型         | 默认值   | 说明                        |
|-------------|------------|-------|---------------------------|
| `style`     | Object     | -     | 自定义样式对象。                  |
| `className` | string     | -     | 附加的CSS类名。                 |
| `open`      | boolean    | false | 面板初始化时是否展开。               |
| `isAdd`     | boolean    | false | 是否显示添加按钮。                 |
| `onAdd`     | function   | -     | 点击添加按钮时的回调函数。             |
| `title`     | string     | -     | 面板的标题文本。                  |
| `extra`     | React.Node | -     | 面板标题栏右侧的额外内容，可以覆盖默认的操作按钮。 |
| `children`  | React.Node | -     | 面板展开时显示的内容。               |

## 使用示例

```jsx
<Panel
  title="面板标题"
  open={true}
  onAdd={() => console.log('添加操作')}
  isAdd={true}
>
  <div>这里是面板内容</div>
</Panel>
```

## 功能特性

- 支持通过`open`属性控制面板默认是否展开。
- 可通过`isAdd`和`onAdd`属性添加特定的操作，如新增项。
- 支持自定义展开/收起动画，使用`framer-motion`库实现。
- 允许通过`extra`属性自定义标题栏右侧的额外内容。

## 样式定制

组件的样式可以通过修改`panel.less`文件来定制。此外，通过`className`属性添加的类名可以用来覆盖或添加组件的样式。

## 注意事项

- 组件依赖`framer-motion`库来实现动画效果，确保项目中已安装该依赖。
- 使用`memo`优化组件性能，避免不必要的重新渲染。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Framer Motion 官方文档](https://www.framer.com/api/motion/)
