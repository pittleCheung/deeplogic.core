# Template 组件文档

## 概述

`Template` 组件集成了`Popover`和`TemplatePicker`
，为用户提供了一个便捷的模板选择功能。点击组件时，将弹出一个包含可选模板列表的`Popover`
，用户可从中选择一个模板。选择的模板信息通过`onChange`回调函数返回。

## 代码导入

```javascript
import Template from '路径/to/Template';
```

## 属性说明

| 属性名        | 类型               | 说明                               |
|------------|------------------|----------------------------------|
| `values`   | Array            | 模板数据列表，用于`TemplatePicker`渲染模板选项。 |
| `value`    | string \| number | 当前选中的模板值。                        |
| `onChange` | function         | 模板选择变化时的回调函数，参数为新选中模板的值。         |

## 使用示例

```jsx
function ExampleComponent() {
  const [templateValue, setTemplateValue] = useState();

  const handleTemplateChange = (newValue) => {
    setTemplateValue(newValue);
  };

  return (
    <Template
      values={[{ id: 'temp1', name: '模板一' }, { id: 'temp2', name: '模板二' }]}
      value={templateValue}
      onChange={handleTemplateChange}
    />
  );
}
```

## 功能特性

- **模板选择器**：提供一个通过点击触发的模板选择器，支持从预定义的模板列表中选择。
- **数据驱动**：根据`values`属性渲染模板选择列表，支持动态更新模板数据。
- **样式适配**：通过`theme.useToken`动态适配主题样式，增强组件的可用性和美观。

## 样式定制

组件的样式可通过修改`_style`文件进行定制。结合`theme.useToken`可以实现样式的动态调整，适配不同的主题风格。

## 注意事项

- 确保已安装并正确导入`antd`及相关依赖。
- 提供给`values`的模板数据应包含每个模板的唯一标识符和名称。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 官方文档](https://ant.design/)
