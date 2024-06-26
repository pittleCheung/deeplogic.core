# JSONSetter 组件文档

## 概述

`JSONSetter` 组件提供了一个简单的界面，用于查看和编辑JSON数据。用户可以点击“查看数据”按钮，通过弹出的`Popover`
查看当前的JSON数据，并在内嵌的`Code`组件中进行编辑。这个组件是在表单或配置面板中查看和编辑复杂JSON结构数据的便捷工具。

## 代码导入

```javascript
import JSONSetter from '路径/to/JSONSetter';
```

## 属性说明

| 属性名        | 类型       | 说明                           |
|------------|----------|------------------------------|
| `value`    | object   | 当前的JSON数据。                   |
| `onChange` | function | 当JSON数据改变时的回调函数，参数为新的JSON数据。 |

## 使用示例

```jsx
function ExampleComponent() {
  const [jsonData, setJsonData] = useState({ key: 'value' });

  const handleJsonChange = (newJson) => {
    setJsonData(JSON.parse(newJson));
  };

  return (
    <JSONSetter
      value={jsonData}
      onChange={handleJsonChange}
    />
  );
}
```

## 功能特性

- **数据展示与编辑**：提供一个`Popover`弹出层，内嵌`Code`组件用于展示和编辑JSON数据。
- **格式化展示**：展示的JSON数据会被格式化，使其更易于阅读和编辑。
- **样式定制**：支持通过`theme.useToken`根据主题动态调整样式。

## 样式定制

组件的样式可通过修改`_style`文件进行定制。通过`cls`方法应用样式，结合`theme.useToken`可以根据当前主题动态调整样式，以适应不同的视觉需求。

## 注意事项

- 请确保提供的JSON数据为有效的JSON对象，以避免解析错误。
- `onChange`函数接收的是一个字符串形式的JSON，因此在使用前可能需要对其进行`JSON.parse`处理。
- 使用`Code`组件进行JSON数据的编辑，确保`Code`组件已正确实现并能够处理JSON格式的数据。

## 扩展阅读

- [React 官方文档](https://reactjs.org/)
- [Ant Design 官方文档](https://ant.design/)
