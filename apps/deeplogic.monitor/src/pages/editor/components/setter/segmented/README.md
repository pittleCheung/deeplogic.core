# Segmented 组件文档

## 概述

`Segmented` 组件基于 `antd` 的 `Segmented`
控件封装，提供了一种简单的方式来选择两个或多个分段控制中的一个。常用于切换显示状态、模式选择等场景。该组件允许传入字符串数组或对象数组作为选项，自动处理成 `Segmented`
组件所需的格式。

## 组件属性

| 属性名        | 类型             | 默认值                                                                 | 说明                |
|------------|----------------|---------------------------------------------------------------------|-------------------|
| `options`  | array          | `[{ label: '显示', value: 'true' }, { label: '隐藏', value: 'false' }]` | 选项列表，可以是字符串或对象格式。 |
| `value`    | string/boolean | -                                                                   | 当前选中的值。           |
| `onChange` | function       | -                                                                   | 选项变化时的回调函数。       |

## 使用示例

```jsx
function ExampleComponent() {
  const [value, setValue] = useState(true);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Segmented
      options={['显示', '隐藏']}
      value={value}
      onChange={handleChange}
    />
  );
}
```

## 功能特性

- **灵活的选项定义**：支持传入字符串数组或对象数组定义选项，提供灵活的配置方式。
- **自动值转换**：内部自动将布尔值转换为字符串，确保与 `AntSegmented` 组件的值类型匹配。
- **回调函数**：提供 `onChange` 回调函数，用于处理选项变化事件。

## 样式定制

`Segmented` 组件的样式主要由 `antd` 控制，可以通过覆盖 `antd` 的相关 CSS
类来进行样式定制。对于特定的样式需求，建议查阅 `antd` 官方文档获取更多信息。

## 注意事项

- 确保在使用 `Segmented` 组件之前，已正确安装并导入了 `antd` 库。
- 组件的 `value` 属性应与选项中的 `value` 值匹配，注意值类型的一致性。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 官方文档](https://ant.design/components/segmented-cn/)
