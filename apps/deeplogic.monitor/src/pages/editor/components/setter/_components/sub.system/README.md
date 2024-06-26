# SubSystem 组件文档

## 概述

`SubSystem` 组件提供了一个基于`antd`的`Select`下拉选择框，用于展示并选择子系统。该组件在初始化时会调用`getInitData`
服务函数获取选项数据，并渲染为下拉列表的选项。

## 代码导入

```javascript
import SubSystem from '路径/to/SubSystem';
```

## 属性

| 属性名        | 类型       | 说明                   |
|------------|----------|----------------------|
| `projId`   | string   | 项目ID，用于获取初始化数据。      |
| `value`    | string   | 当前选中的值。              |
| `onChange` | function | 选项变化时的回调函数，参数为选中项的值。 |

## 使用示例

```jsx
function ExampleComponent() {
  const [selectedValue, setSelectedValue] = useState();

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <SubSystem
      projId="yourProjectId"
      value={selectedValue}
      onChange={handleSelectChange}
    />
  );
}
```

## 功能特性

- **数据初始化**：组件加载时，通过`projId`从`getInitData`服务获取子系统的列表。
- **动态选项**：根据获取的数据动态渲染下拉列表的选项。
- **选择与清除**：支持选择特定选项或清除已选项。

## 样式定制

由于该组件使用了`antd`的`Select`组件，组件的样式可通过覆盖`antd`的相关CSS类来定制。详细的样式定制方法可以参考`antd`的官方文档。

## 注意事项

- 确保在使用组件前，项目已正确安装并导入了`antd`库。
- `getInitData`服务函数需要返回一个对象，其中包含`stations`字段，且`stations`是一个包含子系统信息的数组。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 官方文档](https://ant.design/components/select/)
