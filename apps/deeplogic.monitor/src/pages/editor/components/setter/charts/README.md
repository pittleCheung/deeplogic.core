# ChartSetter 组件文档

## 概述

`ChartSetter` 组件提供了一个用于配置图表属性的界面，它利用`antd`的`Tabs`
组件在左侧显示可配置项的图标列表，用户可以点击不同的图标来切换到相应的配置界面。该组件支持对图表的标题、图例、网格、坐标轴、序列、提示框、工具箱等属性进行配置。

## 代码导入

```javascript
import ChartSetter from '路径/to/ChartSetter';
```

## 属性说明

| 属性名     | 类型     | 说明                 |
|---------|--------|--------------------|
| `props` | object | 组件接收的属性，包含图表的配置信息。 |

## 使用示例

```jsx
function ExampleComponent() {
  const chartConfig = {
    // 图表配置属性
  };

  return <ChartSetter setter={chartConfig} />;
}
```

## 功能特性

- **属性配置**：提供图表各主要属性的配置界面，包括标题、图例、网格、坐标轴、序列、提示框和工具箱等。
- **动态图标显示**：根据配置项动态显示左侧Tabs的图标，利用`Tooltip`展示配置项的详细信息。
- **配置项格式化**：通过`formatterItems`函数将配置项数据格式化，以适配组件内部使用。
- **支持嵌套配置**：对于序列（series）等支持嵌套配置的属性，使用`SeriesSetter`组件进行详细配置。

## 样式定制

组件的样式通过修改`_style`文件进行定制。结合`theme.useToken`可以根据当前主题动态调整样式，提高组件的可用性和美观性。

## 注意事项

- 组件依赖于`antd`的`Tabs`组件，请确保项目中已正确安装并可以使用`antd`。
- 该组件的功能和表现依赖于传入的`setter`属性，确保提供完整且正确的图表配置信息。
- `formatterItems`函数负责将配置项转换为组件内部使用的格式，注意配置项的正确性和完整性。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 官方文档](https://ant.design/components/tabs/)
