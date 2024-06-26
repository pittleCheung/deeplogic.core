```markdown
# BooleanSetter 组件文档

## 概述

`BooleanSetter` 组件提供了一个简单的布尔值切换功能，通过`antd`的`Switch`组件实现。它允许用户通过切换开关来改变一个布尔值，适用于需要简单开关功能的场景。

## 代码导入

```javascript
import BooleanSetter from '路径/to/BooleanSetter';
```

## 属性说明

| 属性名        | 类型       | 说明                         |
|------------|----------|----------------------------|
| `value`    | boolean  | 组件当前的值，`true`为开，`false`为关。 |
| `onChange` | function | 开关状态变化时的回调函数，参数为新的状态值。     |

## 使用示例

```jsx
function ExampleComponent() {
  const [switchValue, setSwitchValue] = useState(false);

  const handleSwitchChange = (checked) => {
    setSwitchValue(checked);
  };

  return (
    <BooleanSetter
      value={switchValue}
      onChange={handleSwitchChange}
    />
  );
}
```

## 功能特性

- **简单开关控制**：提供一个简单的开关控制，用户可以通过切换来改变一个布尔值。
- **状态反馈**：组件的状态（开/关）直接反映当前传入的布尔值。
- **事件回调**：当开关状态变化时，`onChange`事件会被触发，提供新的状态值。

## 样式定制

由于该组件使用了`antd`的`Switch`组件，其样式主要由`antd`控制。可以通过覆盖`antd`的`Switch`
相关CSS类来进行样式定制，或者使用`antd`提供的样式API进行简单的自定义。

## 注意事项

- 确保已安装并正确导入`antd`库以使用`Switch`组件。
- 该组件的`value`属性接受一个布尔值，表示开关的状态。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 官方文档](https://ant.design/components/switch/)

```
