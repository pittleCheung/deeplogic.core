# PointPicker 组件文档

## 概述

`PointPicker`
组件用于从一个列表中检索并选择点。它提供了输入搜索和结果列表的展示，以及当前选中项的高亮显示功能。搜索结果通过调用`searchLite`
服务获取，使用`transform`函数处理数据后展示。

## 代码导入

```javascript
import PointPicker from '路径/to/PointPicker';
```

## 属性

| 属性名        | 类型       | 默认值 | 说明                |
|------------|----------|-----|-------------------|
| `projId`   | string   | -   | 项目ID，用于搜索时作为参数传递。 |
| `value`    | string   | -   | 组件当前选中的值。         |
| `onChange` | function | -   | 当选中的值发生变化时的回调函数。  |

## 使用示例

```jsx
<PointPicker
  projId="yourProjectId"
  value="initialValue"
  onChange={(value) => console.log('选中的点:', value)}
/>
```

## 功能特性

- **关键字搜索**：用户可以输入关键字进行搜索，搜索结果将用于填充结果列表。
- **选中项展示**：当前选中的项会以`Tag`形式展示在搜索框下方，用户可以通过点击`Tag`旁的关闭按钮来取消选择。
- **动态数据加载**：搜索过程中会显示加载状态，搜索完成后更新结果列表。
- **列表展示与选择**：搜索结果以单选按钮组的形式展示，用户可以从中选择一个选项。

## 样式定制

组件的样式可以通过修改`_style`相关的CSS文件来定制。使用`cls`函数和`theme.useToken`来实现样式的动态调整和主题样式的适配。

## 注意事项

- 确保`antd`库和React环境已正确设置并可用。
- 使用`Form`组件来管理选中状态，确保与`Radio.Group`的值同步。
- 当输入框清空或搜索关键字为空时，结果列表将被清空。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 组件库](https://ant.design/)
- [Lodash-es 文档](https://lodash.com/)
