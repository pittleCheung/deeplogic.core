# Series 组件文档

## 概述

`Series` 组件是为了在图表配置中特别处理系列（Series）数据而设计的组件。它依赖于`ArraySetter`
组件来实现系列数据的动态编辑功能，允许用户添加、删除、编辑或排序图表的系列数据。

## 组件属性

`Series`组件通过结合`Form.Item`和`ArraySetter`来实现其功能。以下是它接受的属性说明：

| 属性名        | 类型     | 说明                                             |
|------------|--------|------------------------------------------------|
| `values`   | object | 包含图表配置中所有当前值的对象，其中`series`属性包含系列数据。            |
| `name`     | string | 表单项的名称，用于`Form.Item`。                          |
| `setter`   | object | 包含`props`属性的对象，这些`props`将作为属性传递给`ArraySetter`。 |
| `...props` | -      | 传递给`ArraySetter`的其他属性。                         |

## 使用示例

```jsx
function ExampleComponent() {
  const chartConfig = {
    option: {
      series: [
        // 系列数据
      ]
    }
  };

  // 假设的setter配置
  const seriesSetterConfig = {
    props: [
      // ArraySetter 需要的属性配置
    ]
  };

  return (
    <Form>
      <Series
        values={chartConfig}
        name="chartSeries"
        setter={seriesSetterConfig}
        // 其他 ArraySetter 需要的 props
      />
    </Form>
  );
}
```

## 功能特性

- **系列数据编辑**：允许用户针对图表的系列部分进行动态的添加、编辑、删除和排序操作。
- **灵活性**：通过传递给`ArraySetter`的`attribute`属性，可以定义编辑系列时需要的各种字段和设置。
- **表单集成**：结合`antd`的`Form.Item`，支持在表单环境下使用，易于集成和管理数据。

## 样式定制

`Series`组件的样式主要依赖于`ArraySetter`和`antd`的`Form`样式。可以通过覆盖`antd`的CSS类或者在`ArraySetter`
组件中定义额外的样式类来进行样式定制。

## 注意事项

- 确保在使用`Series`组件之前，已经正确安装并可以使用`antd`和`ArraySetter`组件。
- `Series`组件的功能依赖于传入的`values`和`setter`属性，确保它们提供了正确和完整的配置信息。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 官方文档](https://ant.design/components/form/)
